import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { memories } from '../data/constants';

const MemoriesSection = () => (
  <section id="memories" className="bg-slate-900/40 py-16">
    <div className="section-wrap">
      <SectionHeading title="TVISHI 1.0 Memories" subtitle="A glimpse of last edition's spirit and celebration." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory, index) => (
          <motion.figure
            key={memory.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="group overflow-hidden rounded-xl border border-white/10"
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <figcaption className="bg-slate-950/80 p-3 text-sm text-slate-200">{memory.title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default MemoriesSection;
