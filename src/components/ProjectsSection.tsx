import { useState, useEffect } from "react";
import { projects } from "../constants/projects";
import ProjectModal from "./ProjectModal"; // ton nouveau composant

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<number | string | null>(null);
  const [hoverBg, setHoverBg] = useState<string | null>(null);
  const [prevBg, setPrevBg] = useState<string | null>(null);
  const [visibleBg, setVisibleBg] = useState<string | null>(null);

  const handleMouseEnter = (bg: string | null) => {
    if (bg !== hoverBg) {
      setPrevBg(hoverBg);
      setHoverBg(bg);
    }
  };

  useEffect(() => {
    if (hoverBg) {
      setVisibleBg(null);
      const t = setTimeout(() => setVisibleBg(hoverBg), 50);
      return () => clearTimeout(t);
    } else {
      setVisibleBg(null);
    }
  }, [hoverBg]);

  const activeProject = activeModal ? projects.find(p => p.id === activeModal) : null;

  return (
    <div className="relative px-4 py-8 overflow-hidden">
      <div className="fixed inset-0 z-0">
        {prevBg && (
          <div
            key={prevBg}
            className="absolute inset-0 bg-center bg-cover opacity-0 transition-opacity duration-700"
            style={{ backgroundImage: `url(${prevBg})` }}
            onTransitionEnd={() => setPrevBg(null)}
          />
        )}
        {hoverBg && (
          <div
            key={hoverBg}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ${
              visibleBg ? "opacity-10" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${hoverBg})` }}
          />
        )}
      </div>

      <h2 className="text-4xl md:text-5xl font-mono text-white text-center mb-12 relative inline-block z-10">
        My Projects
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-cyan-500 rounded-full animate-scaleX origin-left"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 relative z-10">
        {projects.map((project) => {
          const hoverImage =
            project.gallery && project.gallery.length > 0
              ? project.gallery[0].src
              : null;

          return (
            <button
              key={project.id}
              onClick={() => setActiveModal(project.id)}
              onMouseEnter={() => handleMouseEnter(hoverImage)}
              onMouseLeave={() => handleMouseEnter(null)}
              className="w-full bg-blue-600 text-white px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold text-left relative overflow-hidden"
            >
              {project.title}
            </button>
          );
        })}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveModal(null)}
        />
      )}

      <style>
        {`
        @keyframes scaleX {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-scaleX {
          animation: scaleX 2s ease forwards;
        }
        `}
      </style>
    </div>
  );
}
