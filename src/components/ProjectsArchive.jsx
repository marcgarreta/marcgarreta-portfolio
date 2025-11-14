import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MouseEffect from "../assets/MouseEffect";

const projects = [
  {
    year: "2025",
    title: "Unsupervised detection of anomalies in 12-lead ECGs",
    builtWith: ["Python", "PyTorch", "Streamlit", "LaTeX"],
    link: "https://arxiv.org/abs/2510.05919",
    linkText: "arxiv.org/abs/2510.05919",
  },
  {
    year: "2025",
    title: "Personal Website",
    builtWith: ["React", "Vite", "Vercel"],
    link: "https://github.com/marcgarreta/PersonalWebsite",
    linkText: "github.com/marcgarreta/PersonalWebsite",
  },
];

const ProjectsArchive = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <MouseEffect />

      <main
        className="content"
        style={{ marginLeft: "5%", width: "90%", padding: "6rem" }}
      >
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <FiArrowLeft className="resume-arrow" />
          Back
        </button>

        <h2 style={{ color: "#f8fafc", marginBottom: "1.5rem" }}>
          Full Project Archive
        </h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                color: "#94a3b8",
                borderBottom: "1px solid #475569",
              }}
            >
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Year</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Project</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Built With</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Link</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((proj, index) => (
              <tr
                key={index}
                className="projects-archive-row"
                style={{
                  borderBottom: "1px solid #1e293b",
                  color: "#cbd5e1",
                }}
              >
                <td style={{ padding: "1rem 0.5rem" }}>{proj.year}</td>
                <td style={{ padding: "1rem 0.5rem" }}>{proj.title}</td>

                <td style={{ padding: "1rem 0.5rem" }}>
                  <div className="project-skills">
                    {proj.builtWith.map((tech, i) => (
                      <span key={i} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>

                <td style={{ padding: "1rem 0.5rem" }}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="archive-link"
                  >
                    {proj.linkText}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </main>
    </div>
  );
};

export default ProjectsArchive;
