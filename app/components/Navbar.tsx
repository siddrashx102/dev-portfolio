"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark border-bottom border-secondary">
            <div className="container">
                <Link href="/" className="navbar-brand fw-bold">
                    JD.dev
                </Link>
                <div className="ms-auto d-flex gap-3">
                    <Link href="/about" className="nav-link text-light">
                        About
                    </Link>
                    <Link href="/projects" className="nav-link text-light">
                        Projects
                    </Link>
                    <Link href="/contact" className="nav-link text-light">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
