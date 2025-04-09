import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { TechMarquee } from './components/TechMarquee';
import { ProjectsShowcase } from './components/ProjectsShowCase';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { CodeShowcase } from './components/CodeShowCase';
import { CopyrightSection } from './components/CopyrightSection';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [activeYear, setActiveYear] = useState<number | null>(2020);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen font-sans overflow-x-hidden">
      <motion.div style={{ scale }}>
        <AnimatedBackground />
      </motion.div>
      <HeroSection />
      <CodeShowcase />
      <AboutSection />
      <JourneyTimeline activeYear={activeYear} setActiveYear={setActiveYear} />
      <ProjectsShowcase />
      <TechMarquee />
      <SkillsSection />
      <ContactSection />
      <CopyrightSection />
    </div>
  );
};

export default App;
