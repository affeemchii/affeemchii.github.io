const experiences = [
  {
    period: "A2 Year",
    title: "Student Consultant",
    company: "EdPro — Educational Consultancy",
    desc: "Worked at EdPro, an educational consultancy helping students with studying abroad. Gained exposure to a professional environment and developed an understanding of academic planning, university selection, and decision-making at a broader level.",
  },
  {
    period: "A Levels — Present",
    title: "O Level Tutor",
    company: "Private Tuition",
    desc: "Teaching O Level students across multiple subjects. Working with students of varying learning abilities has strengthened my communication skills and taught me how to break down complex concepts into simple, digestible explanations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="product-tile-dark">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          Real-World Skills
        </h2>
        <p className="text-lead" style={{ marginBottom: '64px', color: 'var(--color-body-muted)', maxWidth: '600px' }}>
          Professional and educational experience.
        </p>

        <div className="utility-grid-2" style={{ textAlign: 'left' }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ marginBottom: '32px' }}>
              <p className="text-caption-strong text-muted-on-dark" style={{ marginBottom: '4px' }}>{exp.period}</p>
              <h3 className="text-body-strong text-on-dark" style={{ marginBottom: '4px' }}>{exp.title}</h3>
              <p className="text-body" style={{ color: 'var(--color-primary-on-dark)', marginBottom: '12px' }}>{exp.company}</p>
              <p className="text-body text-muted-on-dark">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
