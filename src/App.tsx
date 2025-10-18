import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";
import MouseParticlesBG from "./components/MouseParticlesBG";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WhoSection from "./components/WhoSection";
import ZNavigator from "./components/ZNavigator";

function App() {
  return (
    <div className="relative w-screen h-screen font-roboto-slab overflow-x-hidden crayon-cursor">
      <div className="bg-blueprint w-screen h-screen" />
      <MouseParticlesBG />

      <ZNavigator>
        <HomeSection />
        <WhoSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </ZNavigator>
    </div>
  )
}

export default App
