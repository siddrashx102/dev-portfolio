"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section id="contact" className="py-5 bg-dark">
            <div className="container py-4">
                <h2 className="display-6 fw-bold text-light mb-2">Get In Touch</h2>
                <div
                    className="bg-primary mb-4"
                    style={{ width: "3rem", height: "4px", borderRadius: "2px" }}
                />
                <p className="text-secondary mb-5">Have a project in mind? Let&apos;s talk.</p>

                <div className="row g-5">
                    {/* Left column — contact info */}
                    <div className="col-lg-5">
                        <h3 className="h5 fw-semibold text-light mb-4">Contact Info</h3>
                        <ul className="list-unstyled d-flex flex-column gap-4">
                            <li className="d-flex align-items-start gap-3">
                                <MdEmail size={24} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-secondary small mb-1">Email</p>
                                    <a
                                        href="mailto:hello@example.com"
                                        className="text-light text-decoration-none"
                                    >
                                        hello@example.com
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex align-items-start gap-3">
                                <SiGithub size={24} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-secondary small mb-1">GitHub</p>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-light text-decoration-none"
                                    >
                                        github.com/yourusername
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex align-items-start gap-3">
                                <FaLinkedin size={24} className="text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-secondary small mb-1">LinkedIn</p>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-light text-decoration-none"
                                    >
                                        linkedin.com/in/yourusername
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right column — contact form */}
                    <div className="col-lg-7">
                        <div className="border border-secondary rounded-4 p-4 bg-dark">
                            <form noValidate>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-light">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="John Doe"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your name.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-light">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="john@example.com"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label text-light">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="Project inquiry"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a subject.
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label text-light">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your message.
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
