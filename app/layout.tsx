import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-portfolio.vercel.app";
const defaultTitle = "Mohd Rashid Siddiqui";
const defaultDescription = "Backend developer with 3+ years of experience building reliable enterprise applications and full-stack web products.";
const defaultImage = "https://placehold.co/1200x630/png?text=Mohd+Rashid+Siddiqui";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Mohd Rashid Siddiqui",
  },
  description: defaultDescription,
  keywords: [
    "developer portfolio",
    "backend developer",
    "Node.js",
    "MERN stack",
    "Express.js",
    "full-stack developer",
    "software engineer",
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
