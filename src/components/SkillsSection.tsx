import { motion, useMotionValue } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiCplusplus, SiSharp } from 'react-icons/si';
import { useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 19, icon: <SiJavascript className="text-[#f7df1e]" /> },
  { name: 'TypeScript', level: 15, icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: 'React.js', level: 14, icon: <FaReact className="text-[#61dafb]" /> },            
  { name: 'Node.js', level: 7, icon: <FaNodeJs className="text-[#3c873a]" /> },               
  { name: 'Tailwind CSS', level: 24, icon: <SiTailwindcss className="text-[#38bdf8]" /> },   
  { name: 'Java', level: 18, icon: <FaJava className="text-[#f89820]" /> },                   
  { name: 'Cplusplus', level: 11, icon: <SiCplusplus className="text-[#00599c]" /> },        
  { name: 'CSharp', level: 15, icon: <SiSharp className="text-[#9b4f96]" /> },  
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);

  return (
    <motion.div 
      className="group relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Animated background */}
      <motion.div
        className="absolute -inset-2 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0"
        animate={{ 
          opacity: hovered ? 0.3 : 0,
          scale: hovered ? 1.02 : 1
        }}
      />
      
      <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all">
        <motion.div
          animate={{ 
            scale: hovered ? 1.2 : 1,
            rotate: hovered ? 15 : 0
          }}
          className="text-3xl"
        >
          {skill.icon}
        </motion.div>

        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <motion.span 
              className="text-gray-300 font-medium"
              animate={{ x: hovered ? 5 : 0 }}
            >
              {skill.name}
            </motion.span>
            <motion.span
              className="text-cyan-400 font-mono"
              animate={{ scale: hovered ? 1.2 : 1 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                type: 'spring'
              }}
              className="h-full relative bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            >
              {/* Animated shimmer */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ['-100%', '150%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => (
  <section className="py-20 px-6 text-white relative overflow-hidden">
    {/* Floating particles background */}
    <div className="absolute inset-0 -z-10">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
          animate={{
            y: [0, -100],
            x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
    >
      Skills & Tools
      <motion.span
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="ml-4 inline-block"
      >
        🛠️
      </motion.span>
    </motion.h2>

    <motion.div 
      className="max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>

    {/* Animated background grid */}
    <div className="absolute inset-0 -z-10 opacity-10">
      {[...Array(12)].map((_, i) => (
        <div 
          key={`v-${i}`}
          className="absolute w-px h-full bg-cyan-400" 
          style={{ left: `${(i * 100)/12}%` }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <div 
          key={`h-${i}`}
          className="absolute w-full h-px bg-cyan-400" 
          style={{ top: `${(i * 100)/8}%` }}
        />
      ))}
    </div>
  </section>
);