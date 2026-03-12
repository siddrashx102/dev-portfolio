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
                            I&apos;m Mohd Rashid Siddiqui, a backend developer with 3+ years of
                            experience at Tata Consultancy Services (TCS), where I built, tested,
                            and maintained enterprise software using agile methodologies.
                        </p>
                        <p className="text-secondary fs-5">
                            I focus on Node.js and MERN stack development, RESTful APIs, and
                            database performance optimization. I reduced SQL query runtime from
                            5 seconds to 2 seconds in the HxG NEAM application and also automated
                            manual PL/SQL data-entry workflows.
                        </p>
                        <p className="text-secondary fs-5 mb-4">
                            I enjoy shipping practical products, collaborating with cross-functional
                            teams, and building systems that are both scalable and maintainable.
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
                                    <div className="fs-4 fw-bold text-primary">1</div>
                                    <div className="text-secondary small">Enterprise Role</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border border-secondary rounded-3 p-3">
                                    <div className="fs-4 fw-bold text-primary">50%</div>
                                    <div className="text-secondary small">Productivity Gain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
