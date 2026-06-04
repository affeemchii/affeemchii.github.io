export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} <span>Affan Ali</span>. Designed &amp; Built with ❤️ in Karachi, Pakistan.
      </p>
    </footer>
  );
}
