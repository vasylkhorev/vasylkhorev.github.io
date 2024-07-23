import {defineCollection} from "astro/content/runtime";
import {z} from "astro/zod";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string().max(100),
        date: z.date(),
        summary: z.string(),
        image: z.string().optional(),
    })
});

export const collections = {
    blog: blogCollection,
};