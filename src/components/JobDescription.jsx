function JobDescription({ value, onChange }) {
  const maxLength = 4000;

  return (
    <div className="field-group">
      <div className="field-label-row">
        <label htmlFor="job-description" className="field-label">
          Job Description
        </label>
        <span className="char-count">
          {value.length}/{maxLength}
        </span>
      </div>
      <textarea
        id="job-description"
        className="textarea"
        placeholder="Paste the job description here..."
        rows={10}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default JobDescription;
