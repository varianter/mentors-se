// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const mentorCollection = defineCollection({
  // type: "content", // v2.5.0 and later
  schema: z.object({
    tags: z.array(z.string()),
    email: z.string(),
    name: z.string(),
    category: z.union([
      z.literal("design"),
      z.literal("utvikling"),
      z.literal("ledelse"),
    ]),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  mentors: mentorCollection,
};
