import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

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
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
