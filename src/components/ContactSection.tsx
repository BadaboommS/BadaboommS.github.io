import { easeInOut, motion, type Variants } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const container: Variants = {
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  const hoverAnim = {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    boxShadow: "0 0 15px #0ff",
  };

  const hoverTransition = { type: "tween" as const, duration: 0.6, ease: easeInOut };

  const mailHoverAnim = {
    scale: [1, 1.2, 1.1, 1.2, 1],
    y: [0, -5, 5, -5, 0],
    boxShadow: ["0 0 0px #0ff", "0 0 10px #0ff", "0 0 5px #0ff", "0 0 10px #0ff", "0 0 0px #0ff"],
  };

  // state pour savoir si le bloc Status est survolé
  const [statusHover, setStatusHover] = useState(false);

  const socials = [
    { href: "https://www.linkedin.com/in/yann-lindeboom", img: "/img/linkedin.svg", alt: "LinkedIn", title: "LinkedIn" },
    { href: "https://github.com/BadaboommS", img: "/img/square-github.svg", alt: "GitHub", title: "GitHub" },
    { href: "mailto:yann.lindeboomm@gmail.com", img: "/img/square-envelope-solid.svg", alt: "Email", title: "Email" },
  ];

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center w-screen min-h-screen px-5 py-5 text-center bg-transparent"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={container}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-lg"
        variants={item}
      >
        Want to contact me?
      </motion.h2>

      {/* Socials */}
      <motion.div
        className="mb-10"
        variants={container}
        initial={false}
        animate="show"
      >
        <motion.h3
          className="text-xl md:text-2xl mb-4 text-white drop-shadow"
          variants={item}
        >
          My socials
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={item}
        >
          {socials.map((social, i) => {
            const isMail = social.href.startsWith("mailto:");
            return (
              <motion.a
                key={i}
                href={social.href}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={hoverAnim}
                transition={hoverTransition}
                animate={isMail && statusHover ? mailHoverAnim : { scale: 1, y: 0, boxShadow: "0 0 0px #0ff" }}
              >
                <img src={social.img} alt={social.alt} className="w-16 md:w-20" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Status & Resume */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        variants={container}
        initial={false}
        animate="show"
      >
        {/* Status */}
        <motion.div
          className="flex flex-col items-center bg-white/20 backdrop-blur-md p-4 rounded-lg cursor-pointer"
          variants={item}
          whileHover={{ scale: 1.05, y: -5 }}
          onHoverStart={() => setStatusHover(true)}
          onHoverEnd={() => setStatusHover(false)}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <h3 className="text-xl md:text-2xl mb-2 text-white drop-shadow">Status</h3>
          <p className="text-white bg-green-400/80 rounded-lg px-4 py-2 text-center">
            Currently Looking for work
          </p>
        </motion.div>

        {/* Resume */}
        <motion.div
          className="flex flex-col items-center bg-white/20 backdrop-blur-md p-4 rounded-lg"
          variants={item}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <h3 className="text-xl md:text-2xl mb-2 text-white drop-shadow">Resume</h3>
          <a
            href="cv/YL_CV_Dev.pdf"
            title="CV"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            <motion.img
              src="/img/file-solid.svg"
              alt="CV"
              className="w-12 md:w-14"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            />
          </a>
          <p className="text-white drop-shadow">French version</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
