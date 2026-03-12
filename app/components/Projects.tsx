import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-5">
            <div className="container py-4">
                {/* Section heading */}
                <div className="mb-5 text-center">
                    <h2 className="display-6 fw-bold text-light">Projects</h2>
                    <span
                        className="d-inline-block mt-2 rounded"
                        style={{ width: "48px", height: "4px", background: "var(--bs-primary)" }}
                    />
                </div>

                {/* Projects grid */}
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.slug} className="col-md-6 col-lg-4">
                            <div className="border border-secondary rounded-3 p-4 h-100">
                                <h3 className="h5 fw-semibold text-light mb-2">{project.title}</h3>
                                <p className="text-secondary small mb-0">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
