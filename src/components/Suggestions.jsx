function Suggestions({ suggestions = [] }) {
  return (
    <div className="card suggestions-card">
      <h3 className="card-title">Suggestions to Improve</h3>
      {suggestions.length === 0 ? (
        <p className="empty-note">No suggestions — your resume looks solid!</p>
      ) : (
        <ol className="suggestions-list">
          {suggestions.map((tip, index) => (
            <li key={index} className="suggestion-item">
              {tip}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Suggestions;
