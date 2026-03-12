export default function Hero() {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
      <p className="text-secondary mb-2 fs-5">👋 Hi, I&apos;m</p>
      <h1 className="display-2 fw-bold text-light mb-2">John Doe</h1>
      <h2 className="h4 text-primary mb-3">Full-Stack Developer</h2>
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
