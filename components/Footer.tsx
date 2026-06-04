export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--color-canvas-parchment)', padding: 'var(--spacing-section) 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
        <p className="text-fine-print" style={{ color: 'var(--color-ink-muted-48)', borderTop: '1px solid var(--color-divider-soft)', paddingTop: '24px' }}>
          © {year} Affan Ali. Built in Karachi, Pakistan.
        </p>
      </div>
    </footer>
  );
}
