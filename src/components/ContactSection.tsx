import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { useState } from 'react';

export const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 300], [-10, 10]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-20 px-6 text-white relative overflow-hidden">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%'
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
        Contact Me
        <motion.span
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="ml-4 inline-block"
        >
          📨
        </motion.span>
      </h2>

      <motion.form 
        onSubmit={handleSubmit}
        className="relative max-w-2xl mx-auto space-y-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        {/* Floating glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl opacity-30 -z-10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />

        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Your Message"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-all"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 relative overflow-hidden"
        >
          <AnimatePresence mode='wait'>
            {sent ? (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                ✅ Message Sent!
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-2"
              >
                <FiSend className="text-lg" />
                Send Message
              </motion.span>
            )}
          </AnimatePresence>
          
          {/* Button hover effect */}
          <motion.div
            className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>

        {/* Interactive particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
            initial={{
              x: Math.random() * 200 - 100 + 'px',
              y: Math.random() * 200 - 100 + 'px'
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity
            }}
          />
        ))}
      </motion.form>
    </section>
  );
};