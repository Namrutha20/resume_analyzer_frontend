import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <span className="eyebrow">AI-Powered Resume Screening</span>
            <h1 className="hero-title">
              Know exactly why your resume gets rejected — before recruiters do.
            </h1>
            <p className="hero-subtitle">
              Upload your resume and a job description. Get an instant ATS score,
              matched &amp; missing skills, and clear suggestions to improve your
              chances of landing an interview.
            </p>
            <div className="hero-actions">
              <Link to="/analyzer" className="btn btn-primary btn-large">
                Analyze My Resume
              </Link>
              <a href="#about" className="btn btn-outline btn-large">
                Learn More
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">ATS systems checked</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">2 min</span>
                <span className="stat-label">Average analysis time</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Resumes analyzed</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Three simple steps to a resume that gets past the filters and in
              front of a human.
            </p>

            <div className="about-grid">
              <div className="card about-card">
                <div className="about-icon">⬆️</div>
                <h3 className="card-title">1. Upload Resume</h3>
                <p className="card-text">
                  Upload your resume as a PDF or DOCX file — it stays private and
                  is only used for analysis.
                </p>
              </div>
              <div className="card about-card">
                <div className="about-icon">📋</div>
                <h3 className="card-title">2. Add Job Description</h3>
                <p className="card-text">
                  Paste the job description you're targeting so we can compare it
                  against your resume's content.
                </p>
              </div>
              <div className="card about-card">
                <div className="about-icon">📊</div>
                <h3 className="card-title">3. Get Your Report</h3>
                <p className="card-text">
                  Receive an ATS score, matched and missing skills, and concrete
                  suggestions to improve your resume.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
