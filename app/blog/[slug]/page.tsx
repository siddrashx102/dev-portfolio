import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "../../lib/getBlogPosts";
import { notFound } from "next/navigation";

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
                    <div className="text-secondary lh-lg" style={{ lineHeight: "1.8" }}>
                        <MDXRemote source={post.content} />
                    </div>
                </div>
            </article>
        );
    } catch {
        notFound();
    }
}
