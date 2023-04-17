// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
export const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    // An optional frontmatter property. Very common!
    // In frontmatter, dates written without quotes around them are interpreted as Date objects
    publishDate: z.date(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};