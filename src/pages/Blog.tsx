import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 50, 50, 0.3)',
                '0 0 40px rgba(255, 50, 50, 0.6)',
                '0 0 20px rgba(255, 50, 50, 0.3)',
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <h1 className="text-pure-white text-6xl md:text-8xl font-black mb-8 tracking-tight">
              Coming Soon
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-pure-white/60 text-xl md:text-2xl mb-12">
              Insights for industrial marketers are on the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-3"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 bg-red-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
