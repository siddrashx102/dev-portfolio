import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-secondary border-top border-secondary mt-auto">
            <div className="container py-4">
                <div className="row g-4">
                    {/* Brand & tagline */}
                    <div className="col-md-4">
                        <span className="fw-bold text-light fs-5">JD.dev</span>
                        <p className="mt-1 mb-0 small">Building things for the web.</p>
                    </div>

                    {/* Quick nav */}
                    <div className="col-md-4">
                        <p className="fw-semibold text-light mb-2 small text-uppercase">Quick Links</p>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                            <li><Link href="/about" className="text-secondary text-decoration-none">About</Link></li>
                            <li><Link href="/projects" className="text-secondary text-decoration-none">Projects</Link></li>
                            <li><Link href="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social links */}
                    <div className="col-md-4">
                        <p className="fw-semibold text-light mb-2 small text-uppercase">Social</p>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary text-decoration-none"
                                >
                                    🐙 GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary text-decoration-none"
                                >
                                    💼 LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div className="border-top border-secondary py-3 text-center small">
                © {year} Your Name. All rights reserved.
            </div>
        </footer>
    );
}
