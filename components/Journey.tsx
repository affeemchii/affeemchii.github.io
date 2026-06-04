import DisplayCards from "./DisplayCards";

const timelineData = [
  {
    year: "Early Childhood",
    title: "Grade 1 — Conventional School",
    desc: "Started formal education before stepping away to pursue a transformative path.",
  },
  {
    year: "Hifz Journey",
    title: "Memorisation of the Holy Quran",
    desc: "Completed Hifz — a feat demanding extraordinary focus, patience, and dedication.",
  },
  {
    year: "Return to School",
    title: "Happy Home School — O Levels",
    desc: "Rejoined formal education and navigated the adjustment back to structured academics.",
  },
  {
    year: "O Levels",
    title: "70% Merit Scholarship",
    desc: "Strong O Level results earned a 70% merit scholarship at Alpha College, Karachi.",
  },
  {
    year: "A Levels",
    title: "Alpha College",
    desc: "Completed A Levels studying Chemistry and Physics. Strong analytical foundation.",
  },
  {
    year: "Present",
    title: "IBA University — BBA",
    desc: "Pursuing a Bachelor of Business Analytics at IBA University.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="product-tile-dark" style={{ overflow: "hidden" }}>
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: "16px" }}>
          Academic Journey
        </h2>
        <p
          className="text-lead"
          style={{ marginBottom: "80px", maxWidth: "600px", color: "var(--color-body-muted)" }}
        >
          From Hifz to IBA.
        </p>

        {/* Split layout: left text + right DisplayCards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            width: "100%",
            maxWidth: "1080px",
            textAlign: "left",
          }}
        >
          {/* Left: Timeline list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {timelineData.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                {/* Step number */}
                <div
                  style={{
                    minWidth: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(41,151,255,0.15)",
                    border: "1px solid rgba(41,151,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-primary-on-dark)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    className="text-caption-strong"
                    style={{ color: "var(--color-primary-on-dark)", marginBottom: "2px" }}
                  >
                    {item.year}
                  </p>
                  <p className="text-body-strong text-on-dark" style={{ marginBottom: "4px" }}>
                    {item.title}
                  </p>
                  <p className="text-body text-muted-on-dark">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: DisplayCards stack */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "80px",
              paddingRight: "60px",
            }}
          >
            <DisplayCards />
          </div>
        </div>
      </div>
    </section>
  );
}
