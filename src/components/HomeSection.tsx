import { motion, type Variants } from "framer-motion";

export default function HomeSection() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 1 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-screen min-h-[80vh] sm:min-h-screen text-center px-4 py-8 sm:px-5 sm:py-10 text-white bg-transparent overflow-x-hidden"
    >
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Nom avec hover glow/scale fluide */}
        <motion.h2
          className="drop-shadow-lg font-chalk text-2xl sm:text-[clamp(2rem,6vw,5rem)] leading-snug sm:leading-tight"
          variants={item}
          initial="hidden"
          animate="show"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 15px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 15 }}
        >
          I'm{" "}
          <motion.strong
            className="font-bold"
            whileHover={{
              scale: 1.08,
              textShadow: "0 0 20px rgba(0,255,255,0.8), 0 0 35px rgba(0,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 17 }}
          >
            Yann Lindeboom
          </motion.strong>
        </motion.h2>

        {/* Sous-titre avec légère entrée et pulse */}
        <motion.h3
          className="text-lg sm:text-[clamp(1.5rem,4vw,2.5rem)] leading-relaxed sm:leading-snug mt-4 sm:mt-6 max-w-[90%] sm:max-w-[80%] drop-shadow-lg select-none"
          variants={item}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
        >
          Well arrived or simply lost on the Internet?
          <br />
          Either way, welcome to my site!
        </motion.h3>

        {/* Scroll indicator animé */}
        <motion.div
          className="mt-6 sm:mt-10 px-4 py-2 sm:px-6 sm:py-3 text-cyan-400 font-mono text-lg sm:text-2xl select-none"
          whileHover={{ scale: 1.03, rotate: 1 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          Scroll down to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
