import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const floating = {
  animate: {
    y: [0, -15, 0],
    x: [0, 8, 0],
    transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
  },
};

const Hero = () => (
  <section id="home" className="relative overflow-hidden pt-28">
    <div className="absolute inset-0 -z-10 bg-radial" />
    {[...Array(8)].map((_, i) => (
      <motion.span
        key={i}
        {...floating}
        className="absolute -z-10 h-3 w-3 rounded-full bg-cyan-300/40"
        style={{
          top: `${10 + i * 10}%`,
          left: `${5 + ((i * 13) % 90)}%`,
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}

    <div className="section-wrap grid items-center gap-10 py-16 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300">IEEE Student Branch SAGE University Indore</p>
        <h1 className="text-5xl font-black leading-tight sm:text-6xl">TVISHI 2.0</h1>
        <p className="mt-3 text-2xl font-semibold text-slate-100">Code Conquer Win</p>
        <p className="mt-4 max-w-xl text-slate-300">24 Hour Offline Hackathon | 13 April 2026 | SAGE University Indore</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#register" className="rounded-full bg-ieeeBlue px-6 py-3 font-semibold transition hover:bg-cyan-600">
            Register Now
          </a>
          <a
            href="#tracks"
            className="rounded-full border border-cyan-300/70 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            View Tracks
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass space-y-5 p-6 shadow-glow"
      >
        <p className="text-lg font-semibold">Hackathon starts in</p>
        <CountdownTimer targetDate="2026-04-13T09:00:00+05:30" />
        <p className="text-sm text-slate-300">Mode: Offline • Team Size: 1-4 • Registration: ₹399</p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
