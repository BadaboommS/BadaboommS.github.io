import { motion, type Variants } from "framer-motion";

export default function HomeSection() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-screen min-h-screen text-center px-5 py-5 text-white bg-transparent overflow-x-hidden"
    >
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Nom avec hover glow/scale fluide */}
        <motion.h2
          className="text-[clamp(2rem,6vw,5rem)] drop-shadow-lg font-chalk will-change-transform"
          variants={item}
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 15px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.4)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 15 }}
        >
          I'm{" "}
          <motion.strong
            className="font-bold will-change-transform"
            whileHover={{
              scale: 1.12,
              textShadow: "0 0 20px rgba(0,255,255,0.8), 0 0 35px rgba(0,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 17 }}
          >
            Yann Lindeboom
          </motion.strong>
        </motion.h2>

        {/* Sous-titre avec légère entrée et pulse */}
        <motion.h3
          className="text-[clamp(1.5rem,4vw,2.5rem)] mt-6 max-w-[80%] drop-shadow-lg select-none"
          variants={item}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
          whileHover={{ scale: 1.03 }}
        >
          Well arrived or simply lost on the Internet?
          <br />
          Either way, welcome to my site!
        </motion.h3>

        {/* Scroll indicator animé */}
        <motion.div
          className="mt-10 px-6 py-3 text-cyan-400 font-mono text-2xl select-none"
          whileHover={{ scale: 1.05, rotate: 1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          Scroll down to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
