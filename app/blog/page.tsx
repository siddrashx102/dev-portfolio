import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../lib/getBlogPosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";
const pageTitle = "Blog";
const pageDescription = "Articles on web development, TypeScript, and practical Next.js patterns.";
const pageImage = "https://placehold.co/1200x630/png?text=Blog";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/blog`,
        title: `${pageTitle} | My Developer Portfolio`,
        description: pageDescription,
        images: [
            {
                url: pageImage,
                width: 1200,
                height: 630,
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${pageTitle} | My Developer Portfolio`,
        description: pageDescription,
        images: [pageImage],
    },
};

export default async function BlogPage() {
    const allPosts = await getBlogPosts();
    const [featuredPost, ...remainingPosts] = allPosts;

    return (
        <section className="py-5">
            <div className="container py-4">
                {/* Heading */}
                <div className="mb-5 text-center">
                    <h1 className="display-5 fw-bold text-light mb-2">
                        Blog
                        <span className="badge bg-primary ms-2">{allPosts.length} posts</span>
                    </h1>
                    <p className="text-secondary fs-5 mb-3">Articles on web development, design, and tech</p>
                    <span
                        className="d-inline-block mt-2 rounded"
                        style={{ width: "48px", height: "4px", background: "var(--bs-primary)" }}
                    />
                </div>

                {/* Featured post */}
                {featuredPost && (
                    <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="text-decoration-none d-block mb-5"
                    >
                        <div className="blog-card border border-primary rounded-4 p-5 bg-dark">
                            <p className="text-primary small fw-semibold text-uppercase mb-2">Featured</p>
                            <h2 className="display-6 fw-bold text-light mb-3">{featuredPost.metadata.title}</h2>
                            <p className="text-secondary small mb-3">{featuredPost.metadata.date}</p>
                            <p className="text-secondary">{featuredPost.metadata.excerpt}</p>
                        </div>
                    </Link>
                )}

                {/* Remaining posts grid */}
                {remainingPosts.length > 0 && (
                    <div className="row g-4">
                        {remainingPosts.map((post) => (
                            <div key={post.slug} className="col-md-6 col-lg-4">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-decoration-none"
                                >
                                    <div className="blog-card border border-secondary rounded-3 p-4 h-100 bg-dark">
                                        <h3 className="h5 fw-bold text-light mb-2">
                                            {post.metadata.title}
                                        </h3>
                                        <p className="text-secondary small mb-3">
                                            {post.metadata.date}
                                        </p>
                                        <p className="text-secondary">{post.metadata.excerpt}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
