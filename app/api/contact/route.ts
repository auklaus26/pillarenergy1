import { NextResponse } from "next/server";

import { contactSchema, deliverContact } from "@/lib/contact";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { message: firstIssue?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const result = await deliverContact(parsed.data);

  if (!result.ok) {
    return NextResponse.json({ message: result.message }, { status: 500 });
  }

  const message =
    result.mode === "resend"
      ? "Your enquiry has been sent. We will follow up shortly."
      : "Your enquiry has been captured. Configure Resend to enable outbound delivery.";

  return NextResponse.json({ message });
}
