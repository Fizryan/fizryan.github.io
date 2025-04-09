import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaDiscord, FaSteam, FaTwitch, FaSpotify, FaMailBulk } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full max-w-5xl relative"
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl -z-10" />

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Hi, I'm Fizryan
        </span>
        <motion.span
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="ml-3 inline-block"
        >
          🚀
        </motion.span>
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 font-mono"
      >
        {"<Student />"}
      </motion.p>

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
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all"
            style={{ color }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-2xl sm:text-3xl" />
          </motion.a>
        ))}
      </motion.div>

      {/* Chevron Down */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-16 flex justify-center"
      >
        <FiChevronDown className="text-3xl text-cyan-400 animate-pulse" />
      </motion.div>
    </motion.div>
  </section>
);
