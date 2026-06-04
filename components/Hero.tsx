"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        {/* Text Column */}
        <div className="hero-text-col">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge-dot" />
            IBA University, Karachi
          </motion.div>

          <motion.h1
            className="hero-title"
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            Hi, I&apos;m{" "}
            <span className="hero-name-highlight">Affan Ali</span>
          </motion.h1>

          <motion.p
            className="hero-role"
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            Business Analytics Student · Front-End Developer · Educator
          </motion.p>

          <motion.p
            className="hero-desc"
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            An unconventional academic journey shaped by discipline, curiosity, and
            resilience — from Hifz to IBA&apos;s Bachelor of Business Analytics programme.
          </motion.p>

          <motion.div
            className="hero-actions"
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <a href="#about" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
              Explore My Story
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <div className="hero-stat">
              <span className="hero-stat-value">70<span className="hero-stat-accent">%</span></span>
              <span className="hero-stat-label">Scholarship</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">3<span className="hero-stat-accent">+</span></span>
              <span className="hero-stat-label">Years Teaching</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">2<span className="hero-stat-accent">+</span></span>
              <span className="hero-stat-label">Roles Held</span>
            </div>
          </motion.div>
        </div>

        {/* Avatar Column */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-avatar-ring">
            <Image
              src="/avatar.png"
              alt="Affan Ali - Portfolio Avatar"
              fill
              className="hero-avatar-img"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
