import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ATSScore from "../components/ATSScore.jsx";
import SkillsList from "../components/SkillsList.jsx";
import Suggestions from "../components/Suggestions.jsx";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <>
        <Navbar />
        <main className="page-section">
          <div className="container narrow empty-state">
            <h1 className="page-title">No Report Yet</h1>
            <p className="page-subtitle">
              Analyze a resume first to see your results here.
            </p>
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate("/analyzer")}
            >
              Go to Analyzer
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const { atsScore, matchedSkills, missingSkills, suggestions, fileName } = result;

  return (
    <>
      <Navbar />

      <main className="page-section">
        <div className="container">
          <h1 className="page-title">Your Resume Report</h1>
          <p className="page-subtitle">
            {fileName ? `Results for "${fileName}"` : "Here's how your resume matches the role."}
          </p>

          <div className="results-grid">
            <ATSScore score={atsScore} />
            <SkillsList title="Matched Skills" skills={matchedSkills} variant="matched" />
            <SkillsList title="Missing Skills" skills={missingSkills} variant="missing" />
          </div>

          <Suggestions suggestions={suggestions} />

          <div className="results-actions">
            <button
              className="btn btn-primary btn-large"
              onClick={() => navigate("/analyzer")}
            >
              Upload Another Resume
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Results;
