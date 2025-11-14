import { useEffect } from "react";

const Ending = () => {
  useEffect(() => {
    const section = document.getElementById("ending");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.body.style.overflow = "hidden"; // lock scroll at end
        } else {
          document.body.style.overflow = "auto"; // re-enable scroll
        }
      },
      { threshold: 0.9 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="ending-section" id="ending">
      <div>
        <p>
          Website design inspired by{" "}
          <a
            href="https://www.linkedin.com/in/bchiang7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </a>{" "}
          and adapted using{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>
          , and{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </a>
          .
        </p>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.85rem",
            opacity: 0.8,
          }}
        >
          © 2025 Marc Garreta Basora — Code implementation and content.  
          Original design inspired by Brittany Chiang.
        </p>
      </div>
    </section>
  );
};

export default Ending;
