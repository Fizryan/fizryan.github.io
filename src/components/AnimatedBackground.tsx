import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <motion.div 
      style={{ scale }}
      className="fixed inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-purple-900/20 -z-10"
    />
  );
};
