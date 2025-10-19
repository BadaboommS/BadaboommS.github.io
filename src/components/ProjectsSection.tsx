import { useState, useEffect } from "react";
import { projects } from "../constants/projects";

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<number | string | null>(null);
  const [expandedImg, setExpandedImg] = useState<string | null>(null);
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

  return (
    <div className="relative px-4 py-8 overflow-hidden">
      {/* Fond animé */}
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

      {/* Modals (dark) */}
      {projects.map((project) => (
        <div
          key={project.id}
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            activeModal === project.id
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-[90%] max-w-3xl rounded-2xl border border-cyan-700/30 shadow-[0_0_25px_rgba(0,255,255,0.12)]
                        bg-gradient-to-br from-[#0d1117] to-[#0f1724] text-gray-200 p-6 md:p-8
                        flex flex-col gap-5 font-mono transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-5 text-gray-400 hover:text-cyan-400 text-3xl font-bold transition"
              onClick={() => setActiveModal(null)}
            >
              &times;
            </button>

            <h3 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.25)]">
              {project.title}
            </h3>

            {project.description.map((desc, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-gray-300">
                {desc}
              </p>
            ))}

            {project.stack && (
              <p className="mt-2 text-gray-300 text-center">
                <span className="font-semibold text-cyan-400">Stack:</span>{" "}
                <span className="font-mono select-text">{project.stack}</span>
              </p>
            )}

            {/* Images de stack centrées + fond clair */}
            {project.img && project.img.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-3 pb-2">
                {project.img.map((imgObj, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-2 rounded-xl 
                               bg-gray-100/10 shadow-inner shadow-cyan-900/20 
                               backdrop-blur-sm min-w-[80px]"
                  >
                    <img
                      src={imgObj.src}
                      alt={imgObj.alt}
                      className="h-[48px] w-[48px] md:h-[64px] md:w-[64px] rounded-md object-contain"
                      title={imgObj.alt}
                    />
                    {imgObj.alt && (
                      <span className="text-[11px] text-gray-400 mt-1 max-w-[80px] truncate">
                        {imgObj.alt}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div className="flex gap-2 overflow-x-auto justify-center mt-4 pb-2">
                {project.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className="h-[80px] md:h-[100px] rounded-md shadow-md flex-shrink-0 cursor-pointer
                               hover:shadow-[0_0_10px_rgba(0,255,255,0.18)] transition"
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
