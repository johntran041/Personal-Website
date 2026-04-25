const SKILLS = [
  { category: "Languages", skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"] },
  { category: "Frameworks", skills: ["Next.js", "React", "Node.js", "Express.js", "FastAPI"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "pgvector"] },
  { category: "Cloud & DevOps", skills: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD"] },
  { category: "Tools", skills: ["Git", "Figma", "Postman", "Storybook", "Linear"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="ghost-num">04</div>
      <div className="section-label anim">
        <span className="section-num">04</span>
        <span className="section-label-line" />
        <span className="section-label-text">Toolkit</span>
      </div>
      <h2 className="section-h2 anim anim-d1">Skills</h2>
      <div className="skills-table anim anim-d2">
        {SKILLS.map(({ category, skills }) => (
          <div className="skill-row" key={category}>
            <span className="skill-category">{category}</span>
            <div className="skill-tags">
              {skills.map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
