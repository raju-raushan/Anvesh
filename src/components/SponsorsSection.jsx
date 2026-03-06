import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const SponsorsSection = () => (
  <section id="sponsors" className="section-wrap py-16">
    <SectionHeading title="Sponsors" subtitle="Backers powering innovation will be unveiled soon." />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass mx-auto max-w-5xl p-10 text-center"
    >
      <p className="text-2xl font-semibold text-cyan-300">Sponsors Revealing Soon</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-6"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.35 }}
          >
            <div className="mx-auto h-8 w-32 rounded bg-cyan-300/20" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SponsorsSection;
