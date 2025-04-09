import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

export const AboutSection = () => {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 -z-10"
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAwIDBIMHYyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMzI0NCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            variants={floatingVariants}
            animate="float"
          />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-8 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
              About Me
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-3 inline-block"
              >
                👨💻
              </motion.span>
            </h2>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-4"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hello! I'm Fizryan, a Software Engineering student passionate about crafting smooth, modern experiences through clean code and strong logic.
            </motion.p>
            
            <motion.p
              className="text-gray-400 text-base leading-relaxed"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.6 }}
            >
              When I'm not building in React or exploring Lua scripting, you'll find me reverse-engineering systems or experimenting with AI. Always curious, always creating!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '3+', label: 'Years Learning', emoji: '📚' },
              { value: '?', label: 'Projects Built', emoji: '🚀' },
              { value: '∞', label: 'Curiosity', emoji: '🔍' },
              { value: '🔥', label: 'Tech Passion', emoji: '💻' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                <div className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  {item.value}
                  <motion.span
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {item.emoji}
                  </motion.span>
                </div>
                <div className="text-sm text-gray-400 mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-96">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 bg-cyan-400/10 rounded-3xl blur-3xl"
          />
          
          <motion.div 
            className="relative h-full grid place-items-center"
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
          >
            <svg viewBox="0 0 100 100" className="w-64 h-64">
              {['React', 'TypeScript', 'Node', 'Tailwind'].map((_, i) => {
                const angle = i * 90;
                const radius = 40;
                const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
                const y = 50 + Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <g key={i}>
                    <motion.path
                      animate={{ 
                        pathLength: [0, 0.8, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      d="M50 50 L90 50 A40 40 0 0 1 50 90 Z"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`rotate(${angle} 50 50)`}
                    />

                    <foreignObject x={x - 15} y={y - 15} width="30" height="30">
                      <motion.div
                        className="text-2xl text-cyan-400 text-center"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        {i === 0 && <FaReact />}
                        {i === 1 && <SiTypescript />}
                        {i === 2 && <FaNodeJs />}
                        {i === 3 && <SiTailwindcss />}
                      </motion.div>
                    </foreignObject>

                    {/* Glow effect */}
                    <motion.div
                      className="absolute w-8 h-8 blur-md bg-cyan-400/30 rounded-full"
                      style={{ x: x - 20, y: y - 20 }}
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  </g>
                );
              })}
              
              {/* Central pulsating dot */}
              <motion.circle
                cx="50"
                cy="50"
                r="2"
                fill="#22d3ee"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};