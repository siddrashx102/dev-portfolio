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
        slug: "yelp-camp",
        title: "Yelp-Camp Website",
        description:
            "A full-stack campground review platform where users can create, review, edit, and manage camp listings with persistent cloud data.",
        tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "Passport.js"],
        imageUrl: "https://placehold.co/600x400",
        year: "2024",
        role: "Full-Stack Developer",
        overview: [
            "Yelp-Camp is a full-stack project focused on campground discovery and user-generated reviews. Public users can browse listings, while authenticated users can create and manage their own content.",
            "The application enforces ownership-based authorization so users can only edit or delete campgrounds and comments they created. Data is stored persistently in the cloud for real-world usage.",
        ],
        features: [
            "Authentication and authorization using Passport.js",
            "CRUD flows for campgrounds and comments",
            "Review system with edit and delete controls",
            "Role-based ownership checks for protected actions",
            "Persistent cloud-hosted data storage",
        ],
        repoUrl: "https://github.com/siddrashx102",
    },
    {
        slug: "hxg-neam-query-optimization",
        title: "HxG NEAM Query Optimization",
        description:
            "Performance improvement work on a warehouse inventory management application at TCS, reducing heavy SQL query runtime from 5 seconds to 2 seconds.",
        tags: ["SQL", "PL/SQL", "Backend", "Performance", "Enterprise"],
        imageUrl: "https://placehold.co/600x400",
        year: "2023",
        role: "Backend Developer",
        overview: [
            "At Tata Consultancy Services, I worked on the HxG NEAM application used to manage assets and inventory across warehouses. The focus was database-heavy backend optimization.",
            "By improving query design and tuning execution logic, the team achieved significantly faster response times for key workflows and lowered runtime cost.",
        ],
        features: [
            "Reduced critical SQL query runtime from 5s to 2s",
            "Optimized database access patterns for inventory operations",
            "Improved backend response times for core warehouse tasks",
            "Collaborated in agile delivery with cross-functional teams",
            "Contributed to lower operational cost through query tuning",
        ],
    },
    {
        slug: "plsql-data-automation",
        title: "PL/SQL Data Entry Automation",
        description:
            "Designed and implemented a PL/SQL automation script to replace manual data-entry processes and improve throughput.",
        tags: ["PL/SQL", "Automation", "Oracle", "Productivity"],
        imageUrl: "https://placehold.co/600x400",
        year: "2022",
        role: "Backend Developer",
        overview: [
            "Manual data-entry steps were causing delays and avoidable operational overhead. I developed a PL/SQL automation script to streamline this workflow.",
            "The automation reduced repetitive manual effort and improved consistency, helping the team move faster while reducing human error risk.",
        ],
        features: [
            "Automated repetitive manual data-entry process",
            "Improved productivity by approximately 50%",
            "Reduced error-prone handoffs in operational workflow",
            "Integrated with existing backend process constraints",
            "Delivered maintainable script-based automation",
        ],
    },
];
