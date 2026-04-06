import { Resend } from "resend";
import { z } from "zod";

import { siteConfig } from "@/content/site-content";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  organization: z.string().trim().optional(),
  email: z.email("Enter a valid email address."),
  category: z.string().trim().min(1, "Select an enquiry category."),
  message: z.string().trim().min(20, "Please provide more project detail."),
  consent: z.literal(true, {
    message: "Consent is required."
  })
});

export type ContactInput = z.infer<typeof contactSchema>;

type DeliveryResult =
  | { ok: true; mode: "resend" | "capture" }
  | { ok: false; message: string };

function formatEmailPayload(input: ContactInput) {
  return `
New website enquiry

Name: ${input.fullName}
Organisation: ${input.organization || "-"}
Email: ${input.email}
Category: ${input.category}

Message:
${input.message}
  `.trim();
}

export async function deliverContact(input: ContactInput): Promise<DeliveryResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Pillar Energy <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.info(formatEmailPayload(input));
    return { ok: true, mode: "capture" };
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      to,
      from,
      replyTo: input.email,
      subject: `Pillar Energy enquiry: ${input.category}`,
      text: formatEmailPayload(input)
    });

    return { ok: true, mode: "resend" };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "The enquiry could not be sent. Please try again shortly."
    };
  }
}
