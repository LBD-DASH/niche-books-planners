import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const titles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/titles' }),
  schema: z.object({
    title: z.string().min(8).max(70),
    description: z.string().min(50).max(170),
    format: z.enum(['Planner', 'Journal', 'Workbook', 'Guide']),
    status: z.literal('In development'),
    audience: z.string(),
    contents: z.array(z.string()).min(3),
    price: z.literal('Coming soon'),
    lastUpdated: z.coerce.date(),
  }),
});

export const collections = { titles };
