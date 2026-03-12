import type { Metadata } from "next";
import Projects from "../components/Projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";
const pageTitle = "Projects";
const pageDescription = "A showcase of featured projects built with Next.js, TypeScript, and modern web tools.";
const pageImage = "https://placehold.co/1200x630/png?text=Projects";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/projects`,
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

export default function ProjectsPage() {
    return <Projects />;
}
