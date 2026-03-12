import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export default function ProjectDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <section className="py-5">
            <div className="container py-4">
                <h1 className="display-5 fw-bold text-light mb-3">{project.title}</h1>
                <p className="text-secondary fs-5 mb-3">{project.description}</p>

                <div className="mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="badge bg-primary me-2">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-secondary small mb-0">
                    Current slug: {params.slug}
                </p>
            </div>
        </section>
    );
}
