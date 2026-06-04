"use client";
import { motion } from "framer-motion";

const skills = [
  {
    icon: "🖥️",
    name: "Front-End Web Design",
    desc: "Building modern, responsive websites using HTML, CSS, and JavaScript. Passionate about clean UI and great user experiences.",
    level: 70,
    barClass: "",
  },
  {
    icon: "📚",
    name: "Teaching & Education",
    desc: "Three+ years of O Level tutoring experience. Skilled at adapting explanations to different learning styles and abilities.",
    level: 90,
    barClass: "gold",
  },
  {
    icon: "📊",
    name: "Business Analytics",
    desc: "Currently deepening expertise in data analysis, quantitative methods, and business intelligence at IBA University.",
    level: 65,
    barClass: "",
  },
  {
    icon: "🔢",
    name: "Mathematics",
    desc: "A longstanding strength — from O Level to A Level, mathematics has been a subject I've consistently excelled in and enjoyed.",
    level: 85,
    barClass: "gold",
  },
  {
    icon: "🗣️",
    name: "Communication",
    desc: "Refined through years of teaching, academic consulting, and team leadership roles in sports and school environments.",
    level: 80,
    barClass: "",
  },
  {
    icon: "🤝",
    name: "Leadership & Teamwork",
    desc: "Proven through Sports Captain roles, inter-school event coordination, and managing diverse teams in competitive settings.",
    level: 85,
    barClass: "gold",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Strengths</span>
          <h2 className="section-title">What I Bring to the Table</h2>
          <p className="section-subtitle">
            A blend of technical, academic, and interpersonal skills developed through study, work, and leadership.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="skill-card-glow" />
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-bar-wrapper">
                <motion.div
                  className={`skill-bar ${skill.barClass}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
