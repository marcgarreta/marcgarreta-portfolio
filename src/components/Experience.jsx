import { FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    date: "2024 – 2025",
    position: "Data Governance",
    company: "Sabadell Zurich JV",
    description: "Ensured data quality and regulatory compliance across business units, collaborated to standardize data management, supported AI proof-of-concepts, developed scripts for data enrichment and analysis, and coordinated project tasks through team meetings.",
    skills: ["Python", "SQL", "Informatica", "Databricks", "Excel", "OneTrust"]
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-date">{exp.date}</div>
            <div className="experience-details">
              <h3 className="experience-position">{exp.position} · {exp.company}</h3>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="resume-button-wrapper" style={{ marginTop: "2rem" }}>
        <a
          href="src/assets/images/cv_marcgarreta_eng.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Complete CV
          <FiArrowUpRight className="resume-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
