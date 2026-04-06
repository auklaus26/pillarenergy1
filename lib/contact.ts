import { z } from "zod";

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
