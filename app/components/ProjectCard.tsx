import Image from "next/image";
import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card card bg-dark border border-secondary rounded-3 overflow-hidden h-100">
            {/* Project image */}
            <div className="project-card-image" style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Card body */}
            <div className="card-body d-flex flex-column">
                <h3 className="h5 fw-semibold text-light mb-2">{project.title}</h3>
                <div className="mb-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="badge bg-primary me-1">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-secondary small mb-0 flex-grow-1">{project.description}</p>
            </div>

            {/* Card footer */}
            <div className="card-footer border-top border-secondary bg-dark d-flex gap-2">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link btn btn-primary btn-sm"
                    >
                        Live Demo
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link btn btn-outline-secondary btn-sm"
                    >
                        View Code
                    </a>
                )}
            </div>
        </div>
    );
}
