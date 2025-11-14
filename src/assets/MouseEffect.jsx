import { useEffect, useRef } from "react";
import "../index.css";

const MouseEffect = () => {
  const spotlightRef = useRef(null);
  const pos = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${pos.current.x}%`);
        spotlightRef.current.style.setProperty("--y", `${pos.current.y}%`);
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="mouse-light-wrapper">
      <div ref={spotlightRef} className="mouse-light"></div>
    </div>
  );
};

export default MouseEffect;