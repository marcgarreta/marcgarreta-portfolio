import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ECG from "@/assets/images/ECG_project.png";
import WEBSITE from "@/assets/images/WEBSITE_project.png";

const projects = [
  {
    title: "Unsupervised detection of anomalies in 12-lead electrocardiograms (ECGs)",
    description: "Developed a deep learning framework to detect anomalies in 12-lead ECGs, complemented by a user interface to enhance interpretability.",
    image: ECG,
    skills: ["Python", "PyTorch", "Streamlit", "LaTeX"],
    link: "https://arxiv.org/abs/2510.05919"
  },
  {
    title: "Personal Website",
    description: "Built and deployed a personal portfolio website using React and Vite on Vercel to showcase my projects and skills as a complement to my academic portfolio.",
    image: WEBSITE,
    skills: ["React", "Vite", "Vercel"],
    link: "https://github.com/marcgarreta/marcgarreta-portfolio"
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-list">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            {/* Project Image */}
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>

            {/* Project Details */}
            <div className="project-details">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="project-skills">
                {proj.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="resume-button-wrapper" style={{ marginTop: "2rem" }}>
        <Link to="/projects-archive" className="resume-button">
          View Full Project Archive
          <FiArrowUpRight className="resume-arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
