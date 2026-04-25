import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="ghost-num">03</div>
      <div className="section-label anim">
        <span className="section-num">03</span>
        <span className="section-label-line" />
        <span className="section-label-text">Work</span>
      </div>
      <h2 className="section-h2 anim anim-d1">Projects</h2>
      <div className="projects-grid anim anim-d2">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-card-accent" />
            <div className="project-name">{p.title}</div>
            {p.status && (
              <span className="project-status">{p.status}</span>
            )}
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                {p.linkLabel ?? "View live"} ↗
              </a>
            )}
          </div>
        ))}

        {/* Placeholder card */}
        <div
          className="project-card"
          style={{
            background: "var(--bg-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 220,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: 10,
                color: "var(--dim)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              More coming soon
            </div>
            <div
              style={{
                fontFamily: "var(--font-syne), 'Syne', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                color: "var(--dim)",
                marginTop: 6,
              }}
            >
              ···
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
