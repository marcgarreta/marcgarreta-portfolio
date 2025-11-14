import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certificates";
import Ending from "./components/Ending";
import MouseEffect from "./assets/MouseEffect";
import ProjectsArchive from "./components/ProjectsArchive"; 
import "./index.css";

function App() {
  return (
    <Router>
      <MouseEffect /> {/* Global MouseEffect for all pages */}
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div className="app-container">
              <Sidebar />
              <main className="content">
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="certifications"><Certifications /></section>
                <section id="ending"><Ending /></section>
              </main>
            </div>
          }
        />
        {/* Projects Archive page */}
        <Route
          path="/projects-archive"
          element={<ProjectsArchive />}
        />
      </Routes>
    </Router>
  );
}

export default App;
