import { FiArrowUpRight } from "react-icons/fi";

const certificates = [
  {
    year: "2025",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    skills: ["Neural Networks", "CNNs", "RNNs"],
    link: "https://coursera.org/some-certificate-link"
  },
  {
    year: "2024",
    title: "Machine Learning with Python",
    issuer: "IBM Skills Network",
    skills: ["Python", "Scikit-Learn", "Modeling"],
    link: "https://coursera.org/some-certificate-link"
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
