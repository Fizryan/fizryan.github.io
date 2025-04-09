import { motion } from 'framer-motion';

interface JourneyTimelineProps {
  activeYear: number | null;
  setActiveYear: (i: number | null) => void;
}

export const JourneyTimeline = ({ activeYear, setActiveYear }: JourneyTimelineProps) => {
  const floatingVariants = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const yearVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const timelineData = [
    {
      year: '2021',
      title: 'Code Awakening',
      desc: 'Began my programming journey with Python, JavaScript',
      emoji: '🐍',
      badge: '✨',
    },
    {
      year: '2021',
      title: 'Web',
      desc: 'Deep dive into JavaScript ecosystem',
      emoji: '🌐',
      badge: '🚀',
    },
    {
      year: '2022',
      title: 'Game Cheating',
      desc: 'Make some Game Cheat with Lua',
      emoji: '🤞',
      badge: '😉',
    },
    {
      year: '2024',
      title: 'Learning',
      desc: 'Learning Java, C++, C#',
      emoji: '💻',
      badge: '🎯',
    },
    {
      year: '2024',
      title: 'Machine Learning',
      desc: 'Develope some Machine Learning',
      emoji: '🤖',
      badge: '🔥',
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(25)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = Math.random() * 3 + 2;
          const x = Math.random() * 100 - 50;
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
              style={{ left, top }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [0, -100],
                x,
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
        My Journey
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="ml-4 inline-block"
        >
          🚀
        </motion.span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-16 relative">
        {/* Central timeline line */}
        <motion.div
          className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        >
          <motion.div
            className="absolute w-full h-8 bg-cyan-400 blur-lg"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Timeline Cards */}
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            className="relative flex justify-center"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: i * 0.2
            }}
            onMouseEnter={() => setActiveYear(i)}
            onMouseLeave={() => setActiveYear(null)}
          >
            {/* Hover background glow */}
            <div className={`absolute top-4 w-64 h-64 rounded-full ${
              activeYear === i ? 'bg-cyan-400/20 blur-3xl' : 'bg-cyan-400/10 blur-xl'
            } transition-all duration-300`} />

            <motion.div
              variants={floatingVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl backdrop-blur-lg border relative z-10 w-full sm:w-[80%] md:w-[70%] ${
                i % 2 === 0
                  ? 'bg-gradient-to-r from-cyan-400/5 to-transparent border-cyan-400/20'
                  : 'bg-gradient-to-l from-blue-400/5 to-transparent border-blue-400/20'
              } shadow-lg hover:shadow-2xl transition-all`}
            >
              {/* Emoji badge */}
              <motion.div
                variants={yearVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.2 + 0.3 }}
                className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.span>
              </motion.div>

              {/* Year + Title */}
              <div className="text-2xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {item.title}
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.badge}
                </motion.span>
              </h3>

              {/* Description */}
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {item.desc}
              </motion.p>

              {/* Animated border effect */}
              {activeYear === i && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                  animate={{
                    opacity: [1, 0.8, 1],
                    borderColor: ['#22d3ee', '#2563eb', '#22d3ee']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
