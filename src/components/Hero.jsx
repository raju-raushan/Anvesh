import { motion, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import HeroScene from './HeroScene';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 110]);

  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <HeroScene />
      <div className="absolute inset-0 -z-10 bg-radial" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />

      <motion.div style={{ y }} className="section-wrap grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-cyan-300">IEEE Student Branch SAGE University Indore</p>
          <motion.h1
            className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-7xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
          >
            TVISHI 2.0
          </motion.h1>
          <p className="mt-3 text-2xl font-semibold text-slate-100">Code Conquer Win</p>
          <p className="mt-4 max-w-xl text-slate-300">24 Hour Offline Hackathon | 13 April 2026 | SAGE University Indore</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#register" className="animate-pulseGlow rounded-full bg-ieeeBlue px-6 py-3 font-semibold transition hover:bg-cyan-600">
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
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.85 }}
          className="glass space-y-5 p-6 shadow-glow"
        >
          <p className="text-lg font-semibold">Hackathon starts in</p>
          <CountdownTimer targetDate="2026-04-13T09:00:00+05:30" />
          <p className="text-sm text-slate-300">Mode: Offline • Team Size: 1-4 • Registration: ₹399</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
