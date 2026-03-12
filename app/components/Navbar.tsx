"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
            <div className="container">
                <Link href="/" className="navbar-brand fw-bold">
                    JD.dev
                </Link>

                {/* Hamburger button — visible only on small screens */}
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Nav links — collapsible on mobile, always visible on desktop */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <div className="navbar-nav ms-auto d-lg-flex gap-3">
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
            </div>
        </nav>
    );
}
