import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { tracks } from '../data/constants';

const TracksSection = () => (
  <section id="tracks" className="section-wrap py-16">
    <SectionHeading title="Problem Tracks" subtitle="Choose your challenge and build your breakthrough." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {tracks.map((track, index) => {
        const Icon = track.icon;
        return (
          <motion.article
            key={track.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="glass group p-5 transition hover:-translate-y-1 hover:border-cyan-300/70"
          >
            <Icon className="text-3xl text-cyan-300 transition group-hover:scale-110" />
            <h3 className="mt-4 text-xl font-semibold">{track.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{track.description}</p>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default TracksSection;
