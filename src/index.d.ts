import { z } from "zod";

// Define the Zod schema
export const WorkspaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  google_maps_url: z.string().url(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  description: z.string().nullable(),
  rules: z.string().nullable(),
  amenities: z.array(z.string()),
  images: z.array(z.string()),
  working_hours_start: z.string(),
  working_hours_end: z.string(),
  contact_person_name: z.string(),
  facilities: z.string().nullable(),
  is_active: z.boolean(),
  is_day_pass_enabled: z.boolean(),
  day_pass_price: z.number(),
  day_pass_discounts_percentage: z.record(
    z.object({
      value: z.number(),
      message: z.string(),
    }),
  ),
  manager_id: z.string().nullable(),
});

export const WorkspacesSchema = z.array(WorkspaceSchema);
export type Workspaces = z.infer<typeof WorkspacesSchema>;
