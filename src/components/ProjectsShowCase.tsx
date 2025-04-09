import { motion, useMotionValue, useTransform } from 'framer-motion';
import {FaReact, FaGithub } from 'react-icons/fa';
import {SiTailwindcss, SiFramer } from 'react-icons/si';
import {useState } from 'react';

const projects = [
  {
    title: 'Portfolio Site',
    description: 'Animated developer portfolio with Framer Motion & Tailwind CSS.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/Fizryan/fizryan.github.io',
    icon: <FaReact className="text-cyan-400" />,
    techIcons: [<FaReact key="react" />, <SiTailwindcss key="lua" />, <SiFramer key="framermotion" />,]
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 300], [-10, 10]);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black backdrop-blur border border-gray-700 hover:border-cyan-400 relative overflow-hidden shadow-2xl"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-px h-full bg-cyan-400/20" style={{ left: `${(i * 100)/12}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-full h-px bg-cyan-400/20" style={{ top: `${(i * 100)/8}%` }} />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{ 
            scale: hovered ? [0, 1, 0] : 0,
            x: Math.random() * 400 - 200,
            y: Math.random() * 200 - 100
          }}
          transition={{ duration: 2, delay: i * 0.3 }}
        />
      ))}

      {/* 3D transform container */}
      <motion.div 
        className="relative z-10"
        style={{ rotateX, rotateY }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl">
            {project.icon}
          </div>
          <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack pills with icons */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t: string, idx: number) => (
            <motion.div
              key={t}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + idx * 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-sm"
            >
              <span className="text-cyan-300">{project.techIcons[idx]}</span>
              <span className="text-gray-300">{t}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hover glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        animate={{
          backgroundPosition: hovered ? ['0% 50%', '100% 50%'] : '0% 50%'
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.a>
  );
};

export const ProjectsShowcase = () => (
  <section className="py-24 px-6 text-white relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
          animate={{
            y: [0, -100],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
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
      className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
    >
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⚡
      </motion.span>
      Projects Showcase
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} index={i} />
      ))}
    </div>
  </section>
);