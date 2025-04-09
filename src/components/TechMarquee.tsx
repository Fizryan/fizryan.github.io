import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaJava,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiFramer,
  SiSharp,
  SiCplusplus,
  SiPython,
  SiLua,
} from 'react-icons/si';

const icons = [
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaJsSquare, SiTypescript, SiTailwindcss, SiFramer,
  FaJava, SiSharp, SiCplusplus, SiLua, SiPython
];

export const TechMarquee = () => {
  const duplicatedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <section className="overflow-hidden py-16 bg-transparent">
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: 'linear',
            repeatType: 'loop'
          }}
          className="flex gap-8 text-5xl md:text-6xl text-cyan-400/80 whitespace-nowrap w-max"
        >
          {duplicatedIcons.flatMap((Icon, idx) => [
            <motion.div
              key={`icon-${idx}`}
              whileHover={{ 
                scale: 1.25, 
                rotate: 10,
                transition: { 
                  type: 'spring', 
                  stiffness: 300,
                  damping: 10 
                }
              }}
              className="cursor-pointer drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all"
            >
              <Icon />
            </motion.div>,
            <motion.div
              key={`dot-${idx}`}
              className="w-2 h-2 bg-cyan-400 rounded-full self-center opacity-50"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: idx * 0.1 
              }}
            />
          ])}
        </motion.div>
      </div>
    </section>
  );
};