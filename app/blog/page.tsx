import Link from "next/link";
import { getBlogPosts } from "../lib/getBlogPosts";

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <section className="py-5">
            <div className="container py-4">
                <h1 className="display-5 fw-bold text-light mb-4">Blog</h1>
                <div className="row g-4">
                    {posts.map((post) => (
                        <div key={post.slug} className="col-md-6 col-lg-4">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-decoration-none"
                            >
                                <div className="border border-secondary rounded-3 p-4 h-100 bg-dark">
                                    <h2 className="h5 fw-bold text-light mb-2">
                                        {post.metadata.title}
                                    </h2>
                                    <p className="text-secondary small mb-3">
                                        {post.metadata.date}
                                    </p>
                                    <p className="text-secondary">{post.metadata.excerpt}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
