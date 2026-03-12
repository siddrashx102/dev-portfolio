export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    overview: string[];
    features: string[];
    year: string;
    role: string;
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
        year: "2026",
        role: "Full-Stack Developer",
        overview: [
            "This portfolio was designed from the ground up to showcase projects and skills in a clean, performance-focused way. The App Router structure keeps routing intuitive while server components ensure fast initial loads.",
            "Bootstrap provides a reliable design system without the overhead of a custom CSS framework, and TypeScript enforces consistency across every component and data file in the project.",
        ],
        features: [
            "Typing animation cycling through developer roles using useState and useEffect",
            "Responsive navbar with mobile hamburger toggle and React state",
            "Dynamic project detail pages via Next.js App Router [slug] routes",
            "Optimised images using the next/image component",
            "Site-wide Footer with dynamic copyright year",
        ],
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
        year: "2025",
        role: "Full-Stack Developer",
        overview: [
            "The Task Manager App was built to replace spreadsheet-based workflows with a structured, real-time Kanban board. Users can create boards, add tasks, assign priorities, and drag cards between columns.",
            "The backend is a Node.js REST API connected to PostgreSQL, with JWT-based authentication. The React frontend uses optimistic updates so the UI feels instant even before server confirmation.",
        ],
        features: [
            "JWT authentication with secure HTTP-only cookie sessions",
            "Drag-and-drop Kanban board with column and card management",
            "Real-time updates via WebSocket connection",
            "PostgreSQL schema with migrations managed by Knex.js",
            "RESTful API with input validation and error handling",
        ],
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
        year: "2025",
        role: "Lead Developer",
        overview: [
            "This e-commerce platform was built to handle a full product catalogue with variant support, inventory tracking, and a streamlined checkout flow. The goal was production-readiness from day one.",
            "Stripe handles all payment processing via webhooks, ensuring order state is always consistent even when users close the browser mid-checkout. An admin dashboard lets staff manage products and view orders in real time.",
        ],
        features: [
            "Product catalogue with filtering, sorting, and search",
            "Shopping cart persisted in localStorage and synced on login",
            "Stripe Checkout integration with webhook-driven order fulfilment",
            "Admin dashboard for product and order management",
            "Fully typed API routes with Zod validation",
        ],
        repoUrl: "https://github.com",
    },
];
