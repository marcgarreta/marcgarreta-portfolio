import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const contentElement = document.querySelector(".content");
    const sections = document.querySelectorAll(".content section");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = contentElement.scrollTop;
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActive(current);
    };

    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      return () => contentElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const contentElement = document.querySelector(".content");
    const targetSection = document.getElementById(targetId);
    if (contentElement && targetSection) {
      const offset = 100;
      contentElement.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <aside className="sidebar">
      {/* Contenido superior */}
      <div className="sidebar-top">
        <h1>Marc Garreta</h1>
        <h2>AI Engineer</h2>
        <p>I'm exploring data-driven solutions to be efficient and easy to understand, while learning something new every day.</p>

        <nav>
          <ul>
            <li>
              <a
                href="#about"
                className={active === "about" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "about")}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={active === "experience" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "experience")}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={active === "projects" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "projects")}
              >
                PROJECTS

              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className={active === "certifications" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "certifications")}
              >
                CERTIFICATIONS
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <a href="https://github.com/marcgarreta" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/marcgarretabasora" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:marcgarretab@gmail.com">
          <FaEnvelope className="social-icon" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
