import {
    SiReact,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiJquery,
    SiPassport,
    SiGit,
    SiPython,
    SiOpenjdk,
    SiBootstrap,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

const skills: Skill[] = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "Passport.js", icon: SiPassport, color: "#34E27A" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#6CC24A" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: SiOpenjdk, color: "#EA2D2E" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-5">
            <div className="container py-4">
                {/* Section heading */}
                <div className="mb-5 text-center">
                    <h2 className="display-6 fw-bold text-light">Tech Stack</h2>
                    <span
                        className="d-inline-block mt-2 rounded"
                        style={{ width: "48px", height: "4px", background: "var(--bs-primary)" }}
                    />
                </div>

                {/* Skills grid */}
                <div className="row g-3 justify-content-center">
                    {skills.map((skill) => (
                        <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <div className="skill-card border border-secondary rounded-3 p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center gap-2">
                                <skill.icon size={40} color={skill.color} />
                                <span className="text-secondary small">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
