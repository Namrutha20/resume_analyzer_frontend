function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark small">AI</span>
          <span>Resume Analyzer</span>
        </div>
        <p className="footer-text">
          Built to help candidates pass ATS filters and land more interviews.
        </p>
        <p className="footer-copy">© {year} AI Resume Analyzer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
