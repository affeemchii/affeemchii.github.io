"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    icon: "🏢",
    period: "A2 Year",
    title: "Student Consultant",
    company: "EdPro — Educational Consultancy",
    desc: "Worked at EdPro, an educational consultancy helping students with studying abroad. Gained exposure to a professional environment and developed an understanding of academic planning, university selection, and decision-making at a broader level.",
    tags: ["Academic Consulting", "Communication", "Professional Exposure", "Study Abroad"],
  },
  {
    icon: "📖",
    period: "A Levels — Present",
    title: "O Level Tutor",
    company: "Private Tuition",
    desc: "Teaching O Level students across multiple subjects. Working with students of varying learning abilities has strengthened my communication skills and taught me how to break down complex concepts into simple, digestible explanations. An ongoing commitment that has deepened my passion for education.",
    tags: ["Teaching", "Communication", "Mentoring", "Subject Expertise"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Work & Experience</span>
          <h2 className="section-title">Building Real-World Skills</h2>
          <p className="section-subtitle">
            Alongside academics, I&apos;ve gained hands-on professional experience in education and consulting.
          </p>
        </motion.div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="exp-icon">{exp.icon}</div>
              <p className="exp-period">{exp.period}</p>
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
