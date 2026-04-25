import experience from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="ghost-num">02</div>
      <div className="section-label anim">
        <span className="section-num">02</span>
        <span className="section-label-line" />
        <span className="section-label-text">Career</span>
      </div>
      <h2 className="section-h2 anim anim-d1">Experience</h2>
      <div className="anim anim-d2">
        {experience.map((exp) => (
          <div className="exp-item" key={exp.company}>
            <div className="exp-meta">
              <div className="exp-date">
                {exp.period.replace(" – ", "\n").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
              <div className="exp-company">{exp.company}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              {exp.bullets && (
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {exp.tags && (
                <div className="project-tags" style={{ marginTop: 14 }}>
                  {exp.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
