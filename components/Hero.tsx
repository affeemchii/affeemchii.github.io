"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="product-tile-light" style={{ paddingTop: '120px' }}>
      <div className="tile-container">
        <h1 className="text-hero-display" style={{ marginBottom: '8px' }}>
          Affan Ali.
        </h1>
        <p className="text-lead" style={{ marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
          Business Analytics Student. Front-End Developer. Educator.
        </p>
        
        <div className="tile-actions">
          <a href="#about" className="button-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
            Explore My Story
          </a>
          <a href="#contact" className="button-secondary-pill" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get In Touch
          </a>
        </div>

        <div style={{ marginTop: 'var(--spacing-xxl)' }}>
          <Image
            src="/avatar.jpg"
            alt="Affan Ali"
            width={400}
            height={400}
            className="product-render"
            priority
            style={{ borderRadius: 'var(--rounded-lg)' }}
          />
        </div>
      </div>
    </section>
  );
}
