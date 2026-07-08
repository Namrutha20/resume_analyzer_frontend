import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Analyzer from "./pages/Analyzer.jsx";
import Results from "./pages/Results.jsx";

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyzer" element={<Analyzer />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
