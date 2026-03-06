import { motion } from 'framer-motion';
import { FaMicrochip, FaUsers } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const AboutSection = () => (
  <section id="about" className="bg-slate-900/40 py-16">
    <div className="section-wrap">
      <SectionHeading title="About TVISHI 2.0" subtitle="A premium 24-hour innovation sprint designed for real-world impact." />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mx-auto grid max-w-5xl gap-6 p-8 md:grid-cols-2"
      >
        <div>
          <p className="text-slate-200">
            TVISHI 2.0 is a 24-hour offline hackathon organized by the IEEE Student Branch at SAGE University Indore,
            bringing innovators together to solve pressing problems across healthcare, finance, education, cyber security,
            and beyond.
          </p>
          <p className="mt-4 text-slate-300">
            Build with mentors, pitch to experts, and launch ideas that can shape communities, industries, and digital
            futures.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <FaMicrochip className="mb-2 text-cyan-300" />
            <p className="text-sm text-slate-200">Futuristic challenge statements curated around practical use-cases.</p>
          </div>
          <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <FaUsers className="mb-2 text-cyan-300" />
            <p className="text-sm text-slate-200">Collaborative campus experience with builders, mentors, and judges.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
