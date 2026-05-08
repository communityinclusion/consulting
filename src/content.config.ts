import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const staff = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/staff' }),
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    title: z.string().optional(),
    photo: z.string(),
    photoAlt: z.string(),
    expertise: z.string(),
    teaserExpertise: z.array(z.string()),
    email: z.string(),
    credentials: z.string().optional(),
    order: z.number().optional(),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    teaserTitle: z.string(),
    teaserDescription: z.string(),
    contact: z.string().optional(),
    staffSlugs: z.array(z.string()),
    externalUrl: z.string().optional(),
  }),
});

export const collections = { staff, areas };
