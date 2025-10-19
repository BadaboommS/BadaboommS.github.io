import { useState, useEffect } from "react";
import { projects } from "../constants/projects";

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<number | string | null>(null);
  const [expandedImg, setExpandedImg] = useState<string | null>(null);
  const [hoverBg, setHoverBg] = useState<string | null>(null);
  const [prevBg, setPrevBg] = useState<string | null>(null);
  const [visibleBg, setVisibleBg] = useState<string | null>(null); // ← gère l'opacité du fond

  const handleMouseEnter = (bg: string | null) => {
    if (bg !== hoverBg) {
      setPrevBg(hoverBg);
      setHoverBg(bg);
    }
  };

  // 🔥 Transition fluide à chaque changement d’image
  useEffect(() => {
    if (hoverBg) {
      setVisibleBg(null); // reset avant d'afficher
      const t = setTimeout(() => setVisibleBg(hoverBg), 50); // léger délai => déclenche bien la transition
      return () => clearTimeout(t);
    } else {
      setVisibleBg(null);
    }
  }, [hoverBg]);

  return (
    <div className="relative px-4 py-8 overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 z-0">
        {/* Ancienne image : fade-out */}
        {prevBg && (
          <div
            key={prevBg}
            className="absolute inset-0 bg-center bg-cover opacity-0 transition-opacity duration-700"
            style={{ backgroundImage: `url(${prevBg})` }}
            onTransitionEnd={() => setPrevBg(null)}
          />
        )}
        {/* Nouvelle image : fade-in contrôlé */}
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

      {/* Expanded Image */}
      {expandedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setExpandedImg(null)}
        >
          <img
            src={expandedImg}
            alt="Expanded project"
            className="max-w-full max-h-full rounded-lg shadow-xl object-contain transform transition-transform duration-300 scale-90 opacity-0 animate-scaleFadeIn"
            onLoad={(e) => {
              (e.currentTarget as HTMLImageElement).classList.remove(
                "opacity-0",
                "scale-90"
              );
            }}
          />
          <button
            onClick={() => setExpandedImg(null)}
            className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300"
          >
            &times;
          </button>
        </div>
      )}

      {/* Modals */}
      {projects.map((project) => (
        <div
          key={project.id}
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            activeModal === project.id
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-black border border-gray-300 rounded-lg w-[90%] max-w-3xl p-6 md:p-8 text-left relative shadow-xl flex flex-col gap-4 font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-gray-400 hover:text-black text-3xl font-bold transition"
              onClick={() => setActiveModal(null)}
            >
              &times;
            </button>

            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
              {project.title}
            </h3>

            {project.description.map((desc, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            ))}

            {project.stack && (
              <p className="mt-2">
                <span className="font-semibold underline">Stack:</span>{" "}
                <span className="font-mono select-text">{project.stack}</span>
              </p>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div className="flex gap-2 overflow-x-auto justify-center mt-4">
                {project.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className="h-[80px] md:h-[100px] rounded-md shadow cursor-pointer flex-shrink-0"
                    onClick={() => setExpandedImg(img.src)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Boutons projets */}
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

      <style>
        {`
        @keyframes scaleFadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleFadeIn {
          animation: scaleFadeIn 0.3s ease forwards;
        }
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
