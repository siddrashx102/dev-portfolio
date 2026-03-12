import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { getBlogPost } from "../../lib/getBlogPosts";
import { notFound } from "next/navigation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const canonicalPath = `/blog/${slug}`;

    try {
        const post = await getBlogPost(slug);
        const title = post.metadata.title;
        const description = post.metadata.excerpt;
        const image = "https://placehold.co/1200x630/png?text=Blog+Post";

        return {
            title,
            description,
            alternates: {
                canonical: canonicalPath,
            },
            openGraph: {
                type: "article",
                url: `${siteUrl}${canonicalPath}`,
                title,
                description,
                images: [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [image],
            },
        };
    } catch {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
            alternates: {
                canonical: canonicalPath,
            },
            robots: {
                index: false,
                follow: false,
            },
        };
    }
}

const mdxComponents = {
    h2: ({ children }: any) => (
        <h2 className="h3 fw-bold text-light mt-4 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
        <h3 className="h5 fw-semibold text-light mt-3 mb-2">{children}</h3>
    ),
    p: ({ children }: any) => (
        <p className="text-secondary mb-3 lh-lg">{children}</p>
    ),
    ul: ({ children }: any) => (
        <ul className="list-unstyled mb-3 ps-3">{children}</ul>
    ),
    ol: ({ children }: any) => (
        <ol className="mb-3 ps-3 text-secondary">{children}</ol>
    ),
    li: ({ children }: any) => (
        <li className="text-secondary mb-2 position-relative ps-3">
            <span className="position-absolute start-0">•</span>
            {children}
        </li>
    ),
    code: ({ children }: any) => (
        <code className="bg-dark border border-secondary rounded px-2 py-1 text-primary" style={{ fontSize: "0.9em" }}>
            {children}
        </code>
    ),
    pre: ({ children }: any) => (
        <pre className="bg-dark border border-secondary rounded-3 p-4 mb-3 overflow-auto" style={{ fontSize: "0.9rem" }}>
            {children}
        </pre>
    ),
};

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    try {
        const post = await getBlogPost(slug);
        return (
            <article className="py-5">
                <div className="container py-4" style={{ maxWidth: "56rem" }}>
                    <Link
                        href="/blog"
                        className="text-secondary text-decoration-none small d-inline-block mb-4"
                    >
                        ← Back to Blog
                    </Link>
                    <h1 className="display-5 fw-bold text-light mb-2">
                        {post.metadata.title}
                    </h1>
                    <p className="text-secondary small mb-4">{post.metadata.date}</p>
                    <div className="text-secondary" style={{ lineHeight: "1.8" }}>
                        <MDXRemote
                            source={post.content}
                            components={mdxComponents}
                            options={{
                                mdxOptions: {
                                    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
                                },
                            }}
                        />
                    </div>
                </div>
            </article>
        );
    } catch {
        notFound();
    }
}
