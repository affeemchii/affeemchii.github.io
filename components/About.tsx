
export default function About() {
  return (
    <section id="about" className="product-tile-dark">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          An Unconventional Path
        </h2>
        <p className="text-lead" style={{ marginBottom: '48px', color: 'var(--color-body-muted)', maxWidth: '700px' }}>
          My story doesn&apos;t follow a straight line — and that&apos;s what makes it mine.
        </p>

        <div className="utility-grid-2" style={{ textAlign: 'left', marginTop: 'var(--spacing-xl)' }}>
          <div>
            <p className="text-body-strong text-on-dark" style={{ marginBottom: '8px' }}>Early Years</p>
            <p className="text-body text-muted-on-dark" style={{ marginBottom: '24px' }}>
              After completing Grade 1, I stepped away from conventional schooling to pursue Hifz, which I completed successfully. That experience instilled in me an extraordinary level of discipline, focus, and perseverance.
            </p>
          </div>
          <div>
            <p className="text-body-strong text-on-dark" style={{ marginBottom: '8px' }}>Return to Academics</p>
            <p className="text-body text-muted-on-dark" style={{ marginBottom: '24px' }}>
              Rejoining formal education at Happy Home School was challenging at first, but with time I settled in and performed consistently well. My O Level results earned me a 70% scholarship at Alpha College.
            </p>
          </div>
          <div>
            <p className="text-body-strong text-on-dark" style={{ marginBottom: '8px' }}>Pivoting Focus</p>
            <p className="text-body text-muted-on-dark" style={{ marginBottom: '24px' }}>
              Originally planning to pursue Biotechnology abroad, unexpected circumstances brought me back to Karachi. I reassessed my interests and found my true calling — Analytics and Finance.
            </p>
          </div>
          <div>
            <p className="text-body-strong text-on-dark" style={{ marginBottom: '8px' }}>Today</p>
            <p className="text-body text-muted-on-dark" style={{ marginBottom: '24px' }}>
              I am pursuing a Bachelor&apos;s in Business Analytics at IBA University, combining my quantitative strengths with a passion for data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
