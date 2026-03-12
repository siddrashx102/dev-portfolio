export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "portfolio-site",
        title: "Developer Portfolio",
        description:
            "A personal portfolio site built with Next.js, TypeScript, and Bootstrap. Features a responsive layout, typing animation, and project showcase.",
        tags: ["Next.js", "TypeScript", "Bootstrap"],
        imageUrl: "https://placehold.co/600x400",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        slug: "task-manager-app",
        title: "Task Manager App",
        description:
            "A full-stack task management application with user authentication, real-time updates, and a clean Kanban board interface.",
        tags: ["React", "Node.js", "PostgreSQL"],
        imageUrl: "https://placehold.co/600x400",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        slug: "ecommerce-platform",
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce platform with product management, cart functionality, Stripe payments, and an admin dashboard.",
        tags: ["Next.js", "TypeScript", "Stripe"],
        imageUrl: "https://placehold.co/600x400",
        repoUrl: "https://github.com",
    },
];
