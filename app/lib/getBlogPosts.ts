import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface BlogPostMetadata {
    title: string;
    date: string;
    excerpt: string;
}

export async function getBlogPosts() {
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => {
        const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
        const { data } = matter(raw);
        return {
            slug: file.replace(".mdx", ""),
            metadata: data as BlogPostMetadata,
        };
    });
}

export async function getBlogPost(slug: string) {
    const raw = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf-8");
    const { data, content } = matter(raw);
    return {
        metadata: data as BlogPostMetadata,
        content,
    };
}
