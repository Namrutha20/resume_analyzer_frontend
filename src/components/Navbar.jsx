import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-mark">AI</span>
          <span className="brand-text">Resume Analyzer</span>
        </Link>

        <nav className="navbar-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
          <Link
            to="/analyzer"
            className={location.pathname === "/analyzer" ? "nav-link active" : "nav-link"}
          >
            Analyzer
          </Link>
          <Link to="/analyzer" className="btn btn-primary btn-small">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
