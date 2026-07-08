function getScoreTier(score) {
  if (score >= 80) return { label: "Strong Match", className: "tier-strong" };
  if (score >= 60) return { label: "Good Match", className: "tier-good" };
  return { label: "Needs Work", className: "tier-weak" };
}

function ATSScore({ score = 0 }) {
  const clamped = Math.max(0, Math.min(100, score));
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;
  const tier = getScoreTier(clamped);

  return (
    <div className="card ats-score-card">
      <h3 className="card-title">ATS Score</h3>
      <div className="score-ring-wrap">
        <svg width="180" height="180" viewBox="0 0 180 180" className="score-ring">
          <circle cx="90" cy="90" r={radius} className="score-ring-track" />
          <circle
            cx="90"
            cy="90"
            r={radius}
            className="score-ring-progress"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="score-ring-label">
          <span className="score-number">{clamped}</span>
          <span className="score-max">/100</span>
        </div>
      </div>
      <span className={`score-tier ${tier.className}`}>{tier.label}</span>
    </div>
  );
}

export default ATSScore;
