import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import MouseParticlesBG from "./components/MouseParticlesBG";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WhoSection from "./components/WhoSection";
import ZNavigator from "./components/ZNavigator";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen font-roboto-slab overflow-x-hidden crayon-cursor">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-blueprint w-screen h-screen" />
            <MouseParticlesBG />

            <ZNavigator>
              <HomeSection />
              <WhoSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </ZNavigator>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
