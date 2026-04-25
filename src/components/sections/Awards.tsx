const AWARDS = [
  { title: "IELTS Academic", sub: "English Language Proficiency", badge: "7.5" },
  { title: "RMIT Neo League", sub: "Startup Competition — Finalist", badge: "Top 16" },
  { title: "RMIT Game Jam 2025", sub: "Game Development — Best of Theme Award", badge: "Winner" },
  { title: "Google UX Design Certificate", sub: "Coursera", badge: "Certified", dim: true },
  { title: "AWS Cloud Practitioner", sub: "Amazon Web Services — In progress", badge: "2026", dim: true },
];

export default function Awards() {
  return (
    <section id="awards">
      <div className="ghost-num">05</div>
      <div className="section-label anim">
        <span className="section-num">05</span>
        <span className="section-label-line" />
        <span className="section-label-text">Recognition</span>
      </div>
      <h2 className="section-h2 anim anim-d1">Awards & Certifications</h2>
      <div className="awards-list anim anim-d2">
        {AWARDS.map(({ title, sub, badge, dim }) => (
          <div className="award-row" key={title}>
            <div>
              <div className="award-title">{title}</div>
              <div className="award-sub">{sub}</div>
            </div>
            <div
              className="award-badge"
              style={dim ? { fontSize: 11, fontWeight: 600, opacity: 0.55 } : undefined}
            >
              {badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
