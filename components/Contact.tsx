export default function Contact() {
  return (
    <section id="contact" className="product-tile-parchment">
      <div className="tile-container">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>
          Let&apos;s Connect
        </h2>
        <p className="text-lead" style={{ marginBottom: '48px', maxWidth: '600px', color: 'var(--color-ink-muted-80)' }}>
          Whether you&apos;re looking for a tutor, a developer, or just want to have a conversation — my inbox is always open.
        </p>

        <a
          href="mailto:affanali2000@icloud.com"
          className="button-primary"
          style={{ marginBottom: '48px' }}
        >
          Email Me
        </a>

        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
          <a
            href="https://github.com/affeemchii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/affan-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
