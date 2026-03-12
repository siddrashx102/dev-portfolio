import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";
const defaultTitle = "My Developer Portfolio";
const defaultDescription = "A developer portfolio built with Next.js, TypeScript, and Bootstrap.";
const defaultImage = "https://placehold.co/1200x630/png?text=My+Developer+Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | My Developer Portfolio",
  },
  description: defaultDescription,
  keywords: [
    "developer portfolio",
    "Next.js portfolio",
    "TypeScript developer",
    "frontend engineer",
    "full-stack developer",
    "web development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: defaultTitle,
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark text-light d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
