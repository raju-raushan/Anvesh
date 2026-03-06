import { useState } from 'react';
import { motion } from 'framer-motion';

const TrackCard = ({ track, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = track.icon;

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 18;
    const y = (e.clientY - rect.top - rect.height / 2) / 18;
    setTilt({ x: -y, y: x });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass group p-5 transition hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-neon"
      data-hover
    >
      <Icon className="text-3xl text-cyan-300 transition group-hover:scale-125 group-hover:rotate-6" />
      <h3 className="mt-4 text-xl font-semibold">{track.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{track.description}</p>
    </motion.article>
  );
};

export default TrackCard;
