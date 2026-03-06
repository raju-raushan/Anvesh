import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { stats } from '../data/constants';

const Counter = ({ value, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{`${prefix}${count.toLocaleString()}${suffix}`}</span>;
};

const StatsSection = () => (
  <section className="section-wrap py-14">
    <SectionHeading title="Hackathon At a Glance" subtitle="Big ideas, bold builders, real impact." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="glass p-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold text-cyan-300">
            <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
          </p>
          <p className="mt-2 text-slate-200">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
