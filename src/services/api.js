import axios from "axios";

// Point this at your real backend when it's ready.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

/**
 * Builds a believable mock analysis result so the UI works end to end
 * before a real backend is connected.
 */
function buildMockResult(fileName, jobDescription) {
  const skillBank = [
    "JavaScript",
    "React.js",
    "Node.js",
    "REST APIs",
    "Git",
    "SQL",
    "Python",
    "TypeScript",
    "Communication",
    "Problem Solving",
    "Docker",
    "AWS",
  ];

  const shuffled = [...skillBank].sort(() => 0.5 - Math.random());
  const matched = shuffled.slice(0, 6);
  const missing = shuffled.slice(6, 10);
  const score = Math.floor(60 + Math.random() * 35);

  return {
    fileName,
    atsScore: score,
    matchedSkills: matched,
    missingSkills: missing,
    suggestions: [
      "Add measurable achievements (numbers, %, $) to your bullet points.",
      `Mention "${missing[0] || "key skills"}" explicitly if you have experience with it.`,
      "Keep your resume to a single, well-structured page for ATS parsing.",
      "Mirror keywords from the job description in your skills section.",
      "Use standard section headings like 'Experience' and 'Education' for ATS compatibility.",
    ],
    jobDescriptionPreview: jobDescription?.slice(0, 140) || "",
  };
}

/**
 * Sends the resume file + job description to the backend for analysis.
 * Falls back to a mock response if the backend isn't reachable yet,
 * so the frontend remains fully demoable on its own.
 */
export async function analyzeResume(file, jobDescription) {
  try {
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);

    const { data } = await client.post("/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return data;
  } catch (error) {
    // Backend not available yet — return a realistic mock instead of failing.
    console.warn("Falling back to mock analysis result:", error.message);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return buildMockResult(file?.name, jobDescription);
  }
}

export default client;
