import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    className="fixed inset-0 z-[80] grid place-items-center bg-ieeeDark"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    <div className="text-center">
      <motion.div
        className="mx-auto mb-5 h-16 w-16 rounded-2xl border border-cyan-300/40"
        animate={{ rotate: 360, borderRadius: ['20%', '40%', '20%'] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
      />
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Loading Experience</p>
      <p className="mt-2 text-2xl font-extrabold">TVISHI 2.0</p>
    </div>
  </motion.div>
);

export default Loader;
