import { useState } from "react";
import { projects } from "../constants/projects";

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<number | string | null>(null);
  const [expandedImg, setExpandedImg] = useState<string | null>(null);
  const [hoverBg, setHoverBg] = useState<string | null>(null);

  return (
    <div className="relative px-4 py-8">
      {/* Background dynamique */}
      <div
        className={`fixed inset-0 z-0 transition-all duration-500 bg-center bg-cover opacity-10`}
        style={{ backgroundImage: hoverBg ? `url(${hoverBg})` : "none" }}
      ></div>

      <h2 className="text-4xl md:text-5xl font-mono text-white text-center mb-12 relative inline-block">
        My Projects
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-cyan-500 rounded-full animate-scaleX origin-left"></span>
      </h2>

      {/* Expanded Image Fullscreen */}
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

            {/* Stack Images */}
            {project.img && project.img.length > 0 && (
              <div className="flex gap-4 overflow-x-auto justify-center my-4">
                {project.img.map((imgObj, idx) => (
                  <img
                    key={idx}
                    src={imgObj.src}
                    alt={imgObj.alt}
                    className="h-[80px] md:h-[100px] rounded-md shadow flex-shrink-0"
                  />
                ))}
              </div>
            )}

            {/* Gallery Images */}
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

            {/* Links Table */}
            {project.links && project.links.length > 0 && (
              <div className="mt-4 flex flex-col md:flex-row justify-center gap-4 text-center">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Project Buttons */}
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
              onMouseEnter={() => setHoverBg(hoverImage)}
              onMouseLeave={() => setHoverBg(null)}
              className="w-full bg-blue-600 text-white px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold text-left relative overflow-hidden"
            >
              {project.title}
            </button>
          );
        })}
      </div>

      {/* Animation keyframes */}
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
