"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const inView = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* Card */}
          <motion.div
            className="about-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={inView}
          >
            <Image
              src="/avatar.png"
              alt="Affan Ali"
              width={120}
              height={120}
              className="about-avatar"
            />
            <p className="about-name">Affan Ali</p>
            <p className="about-title-text">BBA in Business Analytics · IBA Karachi</p>

            <ul className="about-info-list">
              <li className="about-info-item">
                <span className="about-info-icon">📍</span>
                Karachi, Pakistan
              </li>
              <li className="about-info-item">
                <span className="about-info-icon">🎓</span>
                IBA University — BBA Business Analytics
              </li>
              <li className="about-info-item">
                <span className="about-info-icon">✉️</span>
                affanali2000@icloud.com
              </li>
              <li className="about-info-item">
                <span className="about-info-icon">💼</span>
                Open to Opportunities
              </li>
              <li className="about-info-item">
                <span className="about-info-icon">📚</span>
                O & A Levels Graduate
              </li>
            </ul>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ ...inView, show: { ...inView.show, transition: { ...inView.show.transition, delay: 0.2 } } }}
          >
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">An Unconventional Path to Analytics</h2>

            <p>
              My story doesn&apos;t follow a straight line — and that&apos;s what makes it mine.
              After completing Grade 1, I stepped away from conventional schooling to pursue{" "}
              <strong>Hifz</strong>, which I completed successfully. That experience instilled in me
              an extraordinary level of discipline, focus, and perseverance.
            </p>
            <p>
              I later rejoined formal education at <strong>Happy Home School</strong>. The transition
              was challenging at first, but with time I settled in and performed consistently well.
              My O Level results reflected this progress and earned me a{" "}
              <strong>70% scholarship at Alpha College</strong>, where I completed my A Levels
              studying Chemistry and Physics.
            </p>
            <p>
              Originally planning to pursue Biotechnology in the United States, unexpected family
              circumstances brought me back to Karachi. After reassessing my interests and
              local opportunities, I found my true calling — <strong>Analytics and Finance</strong>.
              Mathematics had always been a subject I felt deeply confident in, and Business
              Analytics at IBA felt like the natural convergence of all my strengths.
            </p>
            <p>
              Today, I am pursuing a <strong>Bachelor&apos;s in Business Analytics at IBA University</strong>,
              one of Pakistan&apos;s most prestigious institutions, while continuing to teach and
              develop my skills in front-end web development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
