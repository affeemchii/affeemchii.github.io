const sportsCards = [
  {
    title: "Cricket",
    desc: "Represented teams in inter-school and inter-campus tournaments.",
  },
  {
    title: "Football",
    desc: "Contributed to team coordination and competitive matches.",
  },
  {
    title: "Alpha Sports Festival",
    desc: "Key organiser and participant in multi-sport events.",
  },
  {
    title: "Inter-Campus Events",
    desc: "Managed cross-campus tournaments and team discipline.",
  },
];

export default function Sports() {
  return (
    <section id="sports" className="product-tile-dark">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          More Than Academics
        </h2>
        <p className="text-lead" style={{ marginBottom: '64px', color: 'var(--color-body-muted)', maxWidth: '600px' }}>
          Sports and leadership.
        </p>

        <div className="utility-grid-2" style={{ textAlign: 'left' }}>
          <div>
            <h3 className="text-body-strong text-on-dark" style={{ marginBottom: '12px' }}>Sports Captain</h3>
            <p className="text-body text-muted-on-dark" style={{ marginBottom: '24px' }}>
              Selected as Sports Captain at Happy Home School, I was responsible for organising teams, coordinating with students, and ensuring active participation across multiple events. This role taught me how to manage people with different personalities, handle responsibility under pressure, and maintain team discipline in competitive environments.
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--color-body-muted)' }}>
              <li className="text-body" style={{ marginBottom: '8px' }}>Organised inter-campus tournaments</li>
              <li className="text-body" style={{ marginBottom: '8px' }}>Coordinated teams for Alpha Sports Festival</li>
              <li className="text-body" style={{ marginBottom: '8px' }}>Developed conflict-resolution skills</li>
            </ul>
          </div>

          <div>
            <div className="utility-grid-1" style={{ gap: '32px' }}>
              {sportsCards.map((card, i) => (
                <div key={i}>
                  <p className="text-body-strong text-on-dark" style={{ marginBottom: '4px' }}>{card.title}</p>
                  <p className="text-body text-muted-on-dark">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
