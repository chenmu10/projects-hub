import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['live', 'wip', 'planned']),
    started: z.string().regex(/^\d{4}-\d{2}$/),
    tech: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
    repo: z.string().optional(), // "owner/name"
    cover: z.string().optional(), // path under /public
    order: z.number().default(99),
  }),
});

export const collections = { projects };
