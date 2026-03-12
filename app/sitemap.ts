import type { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/getBlogPosts";
import { projects } from "./data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [posts] = await Promise.all([getBlogPosts()]);
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.metadata.date ? new Date(post.metadata.date) : now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(`${project.year}-01-01`),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
