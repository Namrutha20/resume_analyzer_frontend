import { useRef, useState } from "react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function ResumeUpload({ file, onFileSelect }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  function validateAndSet(selectedFile) {
    if (!selectedFile) return;
    if (!ACCEPTED_TYPES.includes(selectedFile.type)) {
      setError("Please upload a PDF or DOCX file.");
      return;
    }
    setError("");
    onFileSelect(selectedFile);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    validateAndSet(e.dataTransfer.files?.[0]);
  }

  return (
    <div>
      <div
        className={`upload-dropzone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          hidden
          onChange={(e) => validateAndSet(e.target.files?.[0])}
        />

        {!file ? (
          <>
            <div className="upload-icon">📄</div>
            <p className="upload-title">Drag & drop your resume here</p>
            <p className="upload-subtitle">or click to browse — PDF or DOCX</p>
          </>
        ) : (
          <>
            <div className="upload-icon">✅</div>
            <p className="upload-title">{file.name}</p>
            <p className="upload-subtitle">Click to choose a different file</p>
          </>
        )}
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default ResumeUpload;
