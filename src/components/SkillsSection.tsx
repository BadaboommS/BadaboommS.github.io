import { skills } from "../constants/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="panel flex flex-col items-center justify-start w-screen px-4 py-4 bg-transparent
                 max-h-screen overflow-auto"
    >
      <div className="w-full max-w-6xl flex flex-col gap-4 px-8 md:px-4 lg:px-0 sm:gap-5 md:gap-6">
        {skills.map((category, idx) => (
          <div key={idx} className="flex flex-col gap-2 items-center w-full">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 drop-shadow-lg text-center">
              {category.name}
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-2 w-full justify-items-center">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1 p-1 md:p-2 rounded-lg
                             transition-transform hover:scale-105 w-full max-w-[140px]
                             bg-gray-700/60 hover:bg-gray-600/60 backdrop-blur-md"
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      title={item.name}
                      className="w-[30px] sm:w-[40px] md:w-[60px] lg:w-[80px] xl:w-[90px]
                                 h-[30px] sm:h-[40px] md:h-[60px] lg:h-[80px] xl:h-[90px]
                                 object-contain"
                    />
                  )}
                  <p className="text-white font-semibold drop-shadow-md text-xs sm:text-sm md:text-base text-center mt-1">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
