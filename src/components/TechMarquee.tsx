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
  return (
    <section className="overflow-hidden py-16 bg-transparent">
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex gap-12 text-5xl md:text-6xl text-cyan-400/80 whitespace-nowrap w-max"
        >
          {[...icons, ...icons].flatMap((Icon, idx) => [
            <motion.div
              key={idx}
              whileHover={{ scale: 1.25, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="cursor-pointer drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
            >
              <Icon />
            </motion.div>,
            <div
              key={`dot-${idx}`}
              className="w-2 h-2 bg-cyan-400 rounded-full self-center opacity-50"
            />,
          ])}
        </motion.div>
      </div>
    </section>
  );
};
