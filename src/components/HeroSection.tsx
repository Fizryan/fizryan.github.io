import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaDiscord, FaSteam, FaTwitch, FaSpotify, FaMailBulk } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export const HeroSection = () => {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10"
            initial={{
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <FaGithub className="text-4xl md:text-6xl" />
          </motion.div>
        ))}
      </div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 -z-20 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity
        }}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(34,211,238,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(34,211,238,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-5xl relative"
      >
        {/* Glowing Core */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-3xl -z-10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 relative">
            Hi, I'm Fizryan
            {/* Text Glow Effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl opacity-0 hover:opacity-30 transition-opacity"
              aria-hidden
            />
          </span>
          <motion.span
            variants={floatingVariants}
            animate="float"
            className="ml-3 inline-block"
          >
            🚀
          </motion.span>
        </motion.h1>

        {/* Subtitle with Floating Tags */}
        <motion.div className="relative mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-mono mb-4"
          >
            {"<Student />"}
          </motion.p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {[
            { icon: FaGithub, color: '#1DA1F2', link: 'https://github.com/fizryan' },
            { icon: FaInstagram, color: '#E1306C', link: 'https://instagram.com/_fizryan' },
            { icon: FaDiscord, color: '#7289DA', link: 'https://discord.com/invite/6qSdavg8uJ' },
            { icon: FaSteam, color: '#1DB5F6', link: 'https://steamcommunity.com/profiles/76561198305039331' },
            { icon: FaTwitch, color: '#9146FF', link: 'https://www.twitch.tv/zarfana' },
            { icon: FaSpotify, color: '#1DB954', link: 'https://open.spotify.com/user/31sacpnete6pic6apfx3g2r2wcxe' },
            { icon: FaMailBulk, color: '#EA4335', link: 'mailto:hafizryandin@outlook.com' }
          ].map(({ icon: Icon, color, link }, i) => (
            <motion.a
              key={i}
              whileHover={{ 
                y: -10,
                scale: 1.2,
                rotate: Math.random() > 0.5 ? 10 : -10
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 relative overflow-hidden"
              style={{ color }}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="text-2xl sm:text-3xl relative z-10" />
              <motion.div
                className="absolute inset-0 bg-current opacity-0 hover:opacity-10 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
            className="flex flex-col items-center gap-2"
          >
            <FiChevronDown className="text-3xl text-cyan-400" />
            <motion.span
              className="text-cyan-400 text-sm font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              scroll down
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full -z-10"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </section>
  );
};