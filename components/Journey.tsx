"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "Early Childhood",
    title: "Grade 1 — Conventional School",
    desc: "Started formal education before taking a bold and transformative decision to pursue a different path.",
    dot: "default",
  },
  {
    year: "Hifz Journey",
    title: "Memorisation of the Holy Quran",
    desc: "Completed Hifz — the memorisation of the entire Quran — a feat demanding extraordinary focus, patience, and dedication. This experience built the foundation of my discipline.",
    dot: "gold",
    badge: "✨ Milestone Achieved",
  },
  {
    year: "Return to School",
    title: "Happy Home School — O Levels",
    desc: "Rejoined formal education and navigated the adjustment back to structured academics. Performed consistently well across subjects, with particular strength in quantitative disciplines.",
    dot: "default",
  },
  {
    year: "O Levels",
    title: "O Level Results & Scholarship",
    desc: "O Level results reflected strong academic progress and earned me a 70% merit scholarship at Alpha College, Karachi.",
    dot: "gold",
    badge: "🏆 70% Scholarship",
  },
  {
    year: "A Levels — Alpha College",
    title: "A Levels: Chemistry & Physics",
    desc: "Completed A Levels at Alpha College with a scholarship, studying Chemistry and Physics. Developed a strong analytical and problem-solving foundation alongside leadership responsibilities.",
    dot: "default",
  },
  {
    year: "Present",
    title: "IBA University — BBA Business Analytics",
    desc: "Currently pursuing a Bachelor of Business Analytics at IBA University, one of Pakistan's most prestigious institutions. Combining quantitative strengths with a passion for data-driven decision making.",
    dot: "active",
    badge: "🎓 Currently Enrolled",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Academic Journey</span>
          <h2 className="section-title">From Hifz to IBA</h2>
          <p className="section-subtitle">
            An unconventional path that shaped character, discipline, and academic direction.
          </p>
        </motion.div>

        <div className="timeline">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`timeline-dot ${item.dot}`} />
              <div className="timeline-card">
                <span className={`timeline-year ${item.dot === "gold" ? "gold" : ""}`}>
                  {item.year}
                </span>
                <h3 className="timeline-card-title">{item.title}</h3>
                <p className="timeline-card-sub">{item.desc}</p>
                {item.badge && (
                  <span className="timeline-badge">{item.badge}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
