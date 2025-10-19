import { useState } from "react";
import { motion, type Variants } from "framer-motion";

export default function WhoSection() {
  const [flipped, setFlipped] = useState(false);

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
      id="who"
      className="w-screen min-h-screen flex items-center justify-center px-6 py-10"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl bg-blue-900/30 backdrop-blur-lg border border-blue-400 rounded-xl p-8 md:p-12 shadow-lg perspective-1000"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Image avec backflip */}
        <motion.div
          className="relative w-40 h-40 md:w-64 md:h-64 cursor-pointer"
          onClick={() => setFlipped(!flipped)}
          style={{ perspective: 1000 }}
        >
          {/* Front face */}
          <motion.img
            src="../img/IMG_2404.jpg"
            alt="It's me!"
            className="absolute w-full h-full rounded-full border-4 border-blue-400 shadow-md object-cover backface-hidden"
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.6)" }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          />

          {/* Back face avec image et texte */}
          <motion.div
            className="absolute w-full h-full rounded-full backface-hidden overflow-hidden"
            animate={{ rotateY: flipped ? 0 : -180 }}
            transition={{ duration: 1, type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Image de fond */}
            <img
              src="../img/yes.png" // remplace par ton image
              alt="Back"
              className="w-full h-full object-cover"
            />
            {/* Overlay semi-transparent pour texte */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 rounded-full">
              <p className="text-white text-xs md:text-sm lg:text-base text-center font-semibold drop-shadow-md leading-snug">
                Stop right there, criminal scum! nobody breaks the law on my watch, i'm confiscating your stolen goods, now pay your fine, or it's off to jail !
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Texte */}
        <motion.div className="flex flex-col gap-5 text-center md:text-left" variants={item}>
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-200 border-b border-cyan-400 pb-2 drop-shadow-lg relative inline-block">
            <motion.span
              className="absolute left-0 bottom-0 w-full h-1 bg-cyan-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            ></motion.span>
            A Quick Introduction
          </h3>

          <motion.p className="text-cyan-100 text-base md:text-lg leading-relaxed drop-shadow-md" variants={item}>
            <span className="block mb-2">
              Hi! My name is Yann Lindeboom. I recently committed to learning web development to fulfill my urge to learn.
            </span>
            <span className="block mb-2">
              I especially love experimenting and trying new ways to resolve problems!
            </span>
            <span className="block">
              I can build websites with the holy trinity HTML - CSS - JS, but i can also use some popular framework like ReactJS, Vue, or Angular.
            </span>
            <span className="block">
              In the future i plan to expand my understanding of certain topics like backend technologies, CI/CD, Low Level programming or Cyber Security practices.
            </span>
            <span className="block">
              I also recently got into using more specific tools like GSAP and Motion for fun animations!
            </span>
          </motion.p>
        </motion.div>
      </motion.div>

      <style>
        {`
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}
      </style>
    </section>
  );
}
