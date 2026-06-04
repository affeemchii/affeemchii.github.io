const timelineData = [
  {
    year: "Early Childhood",
    title: "Grade 1 — Conventional School",
    desc: "Started formal education before taking a bold and transformative decision to pursue a different path.",
  },
  {
    year: "Hifz Journey",
    title: "Memorisation of the Holy Quran",
    desc: "Completed Hifz — the memorisation of the entire Quran — a feat demanding extraordinary focus, patience, and dedication.",
  },
  {
    year: "Return to School",
    title: "Happy Home School — O Levels",
    desc: "Rejoined formal education and navigated the adjustment back to structured academics.",
  },
  {
    year: "O Levels",
    title: "70% Merit Scholarship",
    desc: "O Level results reflected strong academic progress and earned me a 70% merit scholarship at Alpha College, Karachi.",
  },
  {
    year: "A Levels",
    title: "Alpha College",
    desc: "Completed A Levels studying Chemistry and Physics. Developed a strong analytical and problem-solving foundation.",
  },
  {
    year: "Present",
    title: "IBA University — BBA",
    desc: "Currently pursuing a Bachelor of Business Analytics at IBA University, combining quantitative strengths with data-driven decision making.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="product-tile-parchment">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          Academic Journey
        </h2>
        <p className="text-lead" style={{ marginBottom: '64px', maxWidth: '600px' }}>
          From Hifz to IBA.
        </p>

        <div className="utility-grid-2" style={{ textAlign: 'left' }}>
          {timelineData.map((item, i) => (
            <div key={i} className="store-utility-card">
              <p className="text-caption-strong text-muted" style={{ marginBottom: '4px' }}>{item.year}</p>
              <h3 className="text-body-strong" style={{ marginBottom: '8px' }}>{item.title}</h3>
              <p className="text-body text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
