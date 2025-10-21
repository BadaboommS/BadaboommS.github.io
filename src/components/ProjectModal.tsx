import { useState } from "react";

interface Project {
  id: number | string;
  title: string;
  description: string[];
  stack?: string;
  img?: { src: string; alt: string }[];
  gallery?: { src: string; alt: string }[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [expandedImg, setExpandedImg] = useState<string | null>(null);

  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      >
        <div
          className="relative w-[90%] max-w-3xl rounded-2xl border border-cyan-700/30 shadow-[0_0_25px_rgba(0,255,255,0.12)]
                     bg-gradient-to-br from-[#0d1117] to-[#0f1724] text-gray-200 p-6 md:p-8
                     flex flex-col gap-5 font-mono transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="flex-1 text-xl md:text-2xl lg:text-3xl font-semibold text-center text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.25)] whitespace-nowrap overflow-hidden truncate">
              {project.title}
            </h3>

            <button
              className="text-4xl md:text-3xl text-gray-400 hover:text-cyan-400 font-bold transition p-2 md:p-0 rounded-full"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          {project.description.map((desc, i) => (
            <p
              key={i}
              className="text-sm md:text-base leading-snug md:leading-relaxed text-gray-300"
            >
              {desc}
            </p>
          ))}

          {project.stack && (
            <p className="mt-2 text-gray-300 text-sm md:text-lg text-start">
              <span className="font-semibold text-cyan-400">Stack:</span>{" "}
              <span className="font-mono select-text">{project.stack}</span>
            </p>
          )}

          {project.img && project.img.length > 0 && (
            <div className="hidden xl:flex flex-nowrap justify-start md:justify-center overflow-x-auto justify-start gap-4 mt-3 pb-2">
              {project.img.map((imgObj, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-2 rounded-xl 
                            bg-gray-100/10 shadow-inner shadow-cyan-900/20 
                            backdrop-blur-sm min-w-[80px] flex-shrink-0"
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
            <div className="flex gap-2 justify-start md:justify-center overflow-x-auto justify-center mt-4 pb-2">
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
    </>
  );
}
