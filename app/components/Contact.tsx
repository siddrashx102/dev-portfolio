"use client";

import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const EMPTY_FORM: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
    const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [generalError, setGeneralError] = useState("");

    function validate(): Partial<Record<keyof FormData, string>> {
        const errs: Partial<Record<keyof FormData, string>> = {};
        if (!formData.name.trim()) errs.name = "Please enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            errs.email = "Please enter a valid email address.";
        if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
        if (formData.message.trim().length < 10)
            errs.message = "Message must be at least 10 characters.";
        return errs;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setGeneralError("");
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                const data = await res.json();
                setGeneralError(data?.error ?? "Something went wrong. Please try again.");
                return;
            }
            setSubmitted(true);
            setFormData(EMPTY_FORM);
        } catch {
            setGeneralError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    function field(key: keyof FormData) {
        return {
            value: formData[key],
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setFormData({ ...formData, [key]: e.target.value }),
        };
    }

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
                            {submitted ? (
                                <div className="text-center py-5">
                                    <div className="text-success fs-1 mb-3">✓</div>
                                    <h3 className="text-light">Message Sent!</h3>
                                    <p className="text-secondary">I&apos;ll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form noValidate onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label text-light">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="John Doe"
                                            {...field("name")}
                                        />
                                        {errors.name && (
                                            <div className="text-danger small mt-1">{errors.name}</div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label text-light">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="john@example.com"
                                            {...field("email")}
                                        />
                                        {errors.email && (
                                            <div className="text-danger small mt-1">{errors.email}</div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label text-light">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="Project inquiry"
                                            {...field("subject")}
                                        />
                                        {errors.subject && (
                                            <div className="text-danger small mt-1">{errors.subject}</div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label text-light">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="Tell me about your project..."
                                            {...field("message")}
                                        />
                                        {errors.message && (
                                            <div className="text-danger small mt-1">{errors.message}</div>
                                        )}
                                    </div>

                                    {generalError && (
                                        <div className="alert alert-danger py-2 small mb-3">{generalError}</div>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
