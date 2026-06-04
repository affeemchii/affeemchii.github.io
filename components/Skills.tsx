const skills = [
  {
    name: "Front-End Design",
    desc: "Building modern, responsive websites using HTML, CSS, and JavaScript. Passionate about clean UI.",
  },
  {
    name: "Teaching",
    desc: "Three+ years of O Level tutoring. Skilled at adapting explanations to different learning styles.",
  },
  {
    name: "Business Analytics",
    desc: "Deepening expertise in data analysis, quantitative methods, and business intelligence.",
  },
  {
    name: "Mathematics",
    desc: "A longstanding strength — from O Level to A Level, consistently excelling in quantitative logic.",
  },
  {
    name: "Communication",
    desc: "Refined through years of teaching, academic consulting, and team leadership roles.",
  },
  {
    name: "Leadership",
    desc: "Proven through Sports Captain roles, inter-school events, and managing diverse teams.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="product-tile-light">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          What I Bring to the Table
        </h2>
        <p className="text-lead" style={{ marginBottom: '64px', maxWidth: '600px' }}>
          A blend of technical, academic, and interpersonal skills.
        </p>

        <div className="utility-grid-4">
          {skills.map((skill, i) => (
            <div key={i} className="store-utility-card">
              <h3 className="text-body-strong" style={{ marginBottom: '8px' }}>{skill.name}</h3>
              <p className="text-body text-muted">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
