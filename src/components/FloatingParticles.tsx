import { motion } from 'framer-motion';

export const FloatingParticles = () => (
  <>
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
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
        className="fixed w-1 h-1 bg-cyan-400 rounded-full -z-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    ))}
  </>
);
