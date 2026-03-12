"use client";

import { useEffect, useRef, useState } from "react";

const roles = ["Full-Stack Developer", "React Engineer", "Open Source Contributor"];

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const charIndexRef = useRef(0);
    const phaseRef = useRef<"typing" | "pausing">("typing");

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const interval = setInterval(() => {
            if (phaseRef.current === "typing") {
                charIndexRef.current += 1;
                setDisplayText(currentRole.slice(0, charIndexRef.current));

                if (charIndexRef.current === currentRole.length) {
                    phaseRef.current = "pausing";
                    setTimeout(() => {
                        setDisplayText("");
                        charIndexRef.current = 0;
                        phaseRef.current = "typing";
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }, 1500);
                }
            }
        }, 80);

        return () => clearInterval(interval);
    }, [roleIndex]);

    return (
        <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
            <p className="text-secondary mb-2 fs-5">👋 Hi, I&apos;m</p>
            <h1 className="display-2 fw-bold text-light mb-2">John Doe</h1>
            <h2 className="h4 text-primary mb-3">
                {displayText}
                <span className="cursor text-primary">|</span>
            </h2>
            <p className="text-secondary fs-5 mb-0">
                I build fast, accessible, and beautiful web apps.
            </p>
            <div className="d-flex gap-3 flex-wrap justify-content-center mt-4">
                <a href="#projects" className="btn btn-primary btn-lg">
                    View My Work
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                    Get In Touch
                </a>
            </div>
        </section>
    );
}
