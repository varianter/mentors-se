// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const categoriesStringSchema = z.union([z.literal('design'), z.literal('utveckling'), z.literal('ledarskap')]);
// 2. Define a `type` and `schema` for each collection
const mentorCollection = defineCollection({
  // type: "content", // v2.5.0 and later
  schema: z.object({
    tags: z.array(z.string()),
    email: z.string(),
    name: z.string(),
    categories: z.array(categoriesStringSchema),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  mentors: mentorCollection,
};
