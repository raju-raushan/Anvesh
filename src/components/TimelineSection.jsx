import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { timeline } from '../data/constants';

const TimelineSection = () => (
  <section id="timeline" className="bg-slate-900/40 py-16">
    <div className="section-wrap">
      <SectionHeading title="Event Timeline" subtitle="Your journey from registration to victory." />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-cyan-300/40 sm:left-1/2 sm:-translate-x-1/2" />
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative pl-12 sm:pl-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-1 top-6 z-10 h-6 w-6 rounded-full border-2 border-cyan-200 bg-ieeeBlue sm:left-1/2 sm:-translate-x-1/2" />
              <div className={`glass p-5 sm:w-[47%] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
