import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  className: z.string().min(1, "Please choose a class"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters"),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export const CLASSES = [
  "Pre-Nursery", "Nursery", "KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12",
];
