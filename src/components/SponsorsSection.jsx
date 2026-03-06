import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const SponsorsSection = () => (
  <section id="sponsors" className="section-wrap py-16">
    <SectionHeading title="Sponsors" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass mx-auto max-w-4xl p-10 text-center"
    >
      <p className="text-2xl font-semibold text-cyan-300">Sponsors Revealing Soon</p>
    </motion.div>
  </section>
);

export default SponsorsSection;
