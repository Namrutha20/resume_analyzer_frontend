import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ResumeUpload from "../components/ResumeUpload.jsx";
import JobDescription from "../components/JobDescription.jsx";
import { analyzeResume } from "../services/api.js";

function Analyzer() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  async function handleAnalyze() {
    if (!file) {
      setFormError("Please upload your resume first.");
      return;
    }
    if (!jobDescription.trim()) {
      setFormError("Please enter a job description.");
      return;
    }

    setFormError("");
    setIsLoading(true);

    try {
      const result = await analyzeResume(file, jobDescription);
      navigate("/results", { state: { result } });
    } catch (err) {
      setFormError("Something went wrong while analyzing. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="page-section">
        <div className="container narrow">
          <h1 className="page-title">Analyze Your Resume</h1>
          <p className="page-subtitle">
            Upload your resume and paste the job description to get your ATS
            match report.
          </p>

          <div className="card analyzer-card">
            <div className="field-group">
              <span className="field-label">Resume File</span>
              <ResumeUpload file={file} onFileSelect={setFile} />
            </div>

            <JobDescription value={jobDescription} onChange={setJobDescription} />

            {formError && <p className="form-error">{formError}</p>}

            <button
              className="btn btn-primary btn-large btn-block"
              onClick={handleAnalyze}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="btn-loading">
                  <span className="spinner" aria-hidden="true"></span>
                  Analyzing...
                </span>
              ) : (
                "Analyze Resume"
              )}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Analyzer;
