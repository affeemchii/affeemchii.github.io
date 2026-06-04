"use client";
import { motion } from "framer-motion";

const sportsCards = [
  {
    emoji: "🏏",
    title: "Cricket",
    desc: "Active participant since school. Represented teams in inter-school and inter-campus tournaments.",
  },
  {
    emoji: "⚽",
    title: "Football",
    desc: "Regular player throughout academic years, contributing to team coordination and competitive matches.",
  },
  {
    emoji: "🏆",
    title: "Alpha Sports Festival",
    desc: "Key organiser and participant in the Alpha Sports Festival, coordinating multi-sport events.",
  },
  {
    emoji: "🤝",
    title: "Inter-Campus Events",
    desc: "Managed cross-campus tournaments, ensuring student participation and team discipline.",
  },
];

export default function Sports() {
  return (
    <section id="sports" className="section sports">
      <div className="container">
        <div className="sports-grid">
          {/* Left: Content */}
          <motion.div
            className="sports-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Sports & Leadership</span>
            <h2 className="section-title">More Than Academics</h2>
            <p style={{ color: "var(--gray-400)", fontSize: "1rem", lineHeight: "1.8", margin: "16px 0 0" }}>
              My involvement in sports has been a constant throughout my academic life.
              I&apos;ve participated in cricket, football, and various inter-school events — not
              just as a player, but eventually as a leader.
            </p>

            <div className="sports-highlight">
              <p className="sports-highlight-title">🏅 Sports Captain — Happy Home School</p>
              <p className="sports-highlight-desc">
                Selected as Sports Captain, I was responsible for organising teams, coordinating with
                students, and ensuring active participation across multiple events. This role taught me
                how to manage people with different personalities, handle responsibility under pressure,
                and maintain team discipline in competitive environments.
              </p>
            </div>

            <ul className="sports-list">
              <li>Organised inter-campus cricket and football tournaments</li>
              <li>Coordinated teams for the Alpha Sports Festival at Alpha College</li>
              <li>Developed communication and conflict-resolution skills through team management</li>
              <li>Balanced competitive sports with strong academic performance</li>
            </ul>
          </motion.div>

          {/* Right: Sport Cards */}
          <motion.div
            className="sports-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sportsCards.map((card, i) => (
              <motion.div
                key={i}
                className="sport-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <span className="sport-emoji">{card.emoji}</span>
                <div>
                  <p className="sport-info-title">{card.title}</p>
                  <p className="sport-info-desc">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
