import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const prizes = [
  { title: 'Winner', reward: '₹20,000 + Certificate' },
  { title: 'Runner Up', reward: '₹10,000 + Certificate' },
  { title: 'Second Runner Up', reward: '₹5,000 + Certificate' },
];

const PrizesSection = () => (
  <section id="prizes" className="section-wrap py-16">
    <SectionHeading title="Prizes" subtitle="Compete for glory and rewards worth ₹35,000." />
    <div className="mb-8 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5 text-center text-xl font-bold text-cyan-200">
      Total Prize Pool: ₹35,000
    </div>
    <div className="grid gap-5 md:grid-cols-3">
      {prizes.map((prize, index) => (
        <motion.div
          key={prize.title}
          className="glass p-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">{prize.title}</h3>
          <p className="mt-3 text-cyan-300">{prize.reward}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PrizesSection;
