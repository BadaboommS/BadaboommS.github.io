import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#070808] z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.h2
        className="mt-6 text-cyan-400 text-xl font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.h2>
    </motion.div>
  );
}
