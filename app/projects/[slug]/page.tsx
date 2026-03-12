import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const canonicalPath = `/projects/${slug}`;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
            alternates: {
                canonical: canonicalPath,
            },
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: project.title,
        description: project.description,
        alternates: {
            canonical: canonicalPath,
        },
        openGraph: {
            type: "article",
            url: `${siteUrl}${canonicalPath}`,
            title: project.title,
            description: project.description,
            images: [
                {
                    url: project.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [project.imageUrl],
        },
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="py-5">
            <div className="container py-4">
                <Link href="/#projects" className="text-secondary text-decoration-none small d-inline-block mb-4">
                    ← Back to Projects
                </Link>

                {/* Hero: title + description */}
                <h1 className="display-5 fw-bold text-light mb-3">{project.title}</h1>
                <p className="text-secondary fs-5 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="badge bg-primary me-2">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="d-flex gap-3 flex-wrap mb-5">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                            View Code
                        </a>
                    )}
                </div>

                {/* Hero image */}
                <div
                    className="position-relative rounded-4 overflow-hidden mb-5"
                    style={{ height: "420px" }}
                >
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="(max-width: 768px) 100vw, 90vw"
                    />
                </div>

                {/* Two-column content */}
                <div className="row g-4">
                    {/* Left: overview + features */}
                    <div className="col-lg-8">
                        <h2 className="h4 fw-bold text-light mb-3">Project Overview</h2>
                        {project.overview.map((paragraph) => (
                            <p key={paragraph} className="text-secondary">
                                {paragraph}
                            </p>
                        ))}

                        <h2 className="h4 fw-bold text-light mt-4 mb-3">Key Features</h2>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            {project.features.map((feature) => (
                                <li key={feature} className="text-secondary d-flex gap-2">
                                    <span className="text-primary mt-1">▸</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: info sidebar */}
                    <div className="col-lg-4">
                        <div className="border border-secondary rounded-4 p-4 bg-dark">
                            <h3 className="h6 fw-bold text-light text-uppercase mb-3">Project Info</h3>
                            <ul className="list-unstyled mb-0 text-secondary small d-flex flex-column gap-2">
                                <li>
                                    <span className="text-light fw-semibold">Slug: </span>
                                    {slug}
                                </li>
                                <li>
                                    <span className="text-light fw-semibold">Year: </span>
                                    {project.year}
                                </li>
                                <li>
                                    <span className="text-light fw-semibold">Role: </span>
                                    {project.role}
                                </li>
                                <li>
                                    <span className="text-light fw-semibold">Stack count: </span>
                                    {project.tags.length} {project.tags.length === 1 ? "technology" : "technologies"}
                                </li>
                                <li>
                                    <span className="text-light fw-semibold">Live demo: </span>
                                    {project.liveUrl ? "Yes" : "No"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
