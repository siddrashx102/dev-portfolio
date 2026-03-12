import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-5">
            <div className="container py-4">
                {/* Section heading */}
                <div className="mb-5 text-center">
                    <h2 className="display-6 fw-bold text-light">About Me</h2>
                    <span
                        className="d-inline-block mt-2 mb-0 rounded"
                        style={{ width: "48px", height: "4px", background: "var(--bs-primary)" }}
                    />
                </div>

                {/* Two-column layout */}
                <div className="row align-items-center gy-4">
                    {/* Left: profile image */}
                    <div className="col-md-5 text-center">
                        <Image
                            src="https://placehold.co/400x400"
                            alt="Profile photo"
                            width={400}
                            height={400}
                            className="img-fluid rounded-4"
                            priority
                        />
                    </div>

                    {/* Right: bio + stats */}
                    <div className="col-md-7">
                        <p className="text-secondary fs-5">
                            Hi! I&apos;m John — a full-stack developer with a passion for building
                            clean, performant web experiences. I specialize in React, Next.js, and
                            Node.js, and I love turning complex problems into elegant solutions.
                        </p>
                        <p className="text-secondary fs-5">
                            When I&apos;m not coding, you&apos;ll find me contributing to open-source
                            projects, writing technical articles, or exploring the outdoors.
                        </p>
                        <p className="text-secondary fs-5 mb-4">
                            I&apos;m always open to new opportunities and interesting collaborations —
                            feel free to reach out!
                        </p>

                        {/* Stat badges */}
                        <div className="row g-3 text-center">
                            <div className="col-4">
                                <div className="border border-secondary rounded-3 p-3">
                                    <div className="fs-4 fw-bold text-primary">3+</div>
                                    <div className="text-secondary small">Years Experience</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border border-secondary rounded-3 p-3">
                                    <div className="fs-4 fw-bold text-primary">20+</div>
                                    <div className="text-secondary small">Projects Completed</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border border-secondary rounded-3 p-3">
                                    <div className="fs-4 fw-bold text-primary">10+</div>
                                    <div className="text-secondary small">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
