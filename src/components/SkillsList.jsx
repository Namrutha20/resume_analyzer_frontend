function SkillsList({ title, skills, variant }) {
  const isMatched = variant === "matched";

  return (
    <div className="card skills-card">
      <h3 className="card-title">{title}</h3>
      {skills.length === 0 ? (
        <p className="empty-note">Nothing to show here.</p>
      ) : (
        <ul className="skills-list">
          {skills.map((skill) => (
            <li
              key={skill}
              className={`skill-chip ${isMatched ? "chip-matched" : "chip-missing"}`}
            >
              <span className="chip-icon">{isMatched ? "✓" : "✕"}</span>
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillsList;
