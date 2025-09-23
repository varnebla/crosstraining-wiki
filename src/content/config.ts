import { defineCollection, z, reference } from 'astro:content';

const movementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().optional(),
    title: z.string(),
    meta_description: z.string().optional(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    material: z.array(z.string()),
    category: z.string(),
    difficulty: z.string(),
    drills: z.array(z.string()),
    related: z.array(z.string()),
    description: z.string(),
    muscles: z.array(z.string()),
  }),
});

const materialCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const categoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const drillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    material: z.array(reference('materialCollection')),
    category: reference('categoryCollection'),
    // difficulty: z.string(),
    // drills: z.array(z.string()),
    // related: z.array(reference('movementsCollection')),
    description: z.string(),
    muscles: z.array(z.string()),
  }),
});

export const collections = { 
  movements: movementsCollection,
  materials: materialCollection,
  categories: categoryCollection,
  drills: drillsCollection
};