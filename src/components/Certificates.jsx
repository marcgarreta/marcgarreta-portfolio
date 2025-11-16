import { FiArrowUpRight } from "react-icons/fi";

const certificates = [
  {
    year: "2025",
    title: "Introduction to the Principles and Practice of Clinical Research",
    issuer: "The National Institutes of Health (NIH)",
    skills: ["Clinical Research", "Research Ethics", "Data Analysis", "Biostatistics"],
  },
  {
    year: "2025",
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    skills: ["Python", "Keras", "Neural Networks"],
    link: "https://www.coursera.org/account/accomplishments/verify/QJR1HJR2XK4Q"
  },
  {
    year: "2024",
    title: "Deep Neural Networks with PyTorch",
    issuer: "IBM",
    skills: ["Python", "PyTorch", "Scikit-Learn"],
    link: "https://www.coursera.org/account/accomplishments/verify/4J4LK5XSKLL4"
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-item"
          >
            <div className="certificate-details">
              <h3 className="certificate-title">
                {cert.title} · <span className="certificate-issuer">{cert.issuer}</span>
              </h3>
              <p className="certificate-year">{cert.year}</p>
              <div className="certificate-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
