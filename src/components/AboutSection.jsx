import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const AboutSection = () => (
  <section id="about" className="bg-slate-900/40 py-16">
    <div className="section-wrap">
      <SectionHeading title="About TVISHI 2.0" />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mx-auto max-w-4xl p-8 text-center text-slate-200"
      >
        TVISHI 2.0 is a 24-hour offline hackathon organized by the IEEE Student Branch at SAGE University Indore,
        bringing innovators, developers, and creators together to solve real-world problems across multiple domains.
        From healthcare to GovTech, this is your platform to build impact-driven solutions, collaborate with
        like-minded hackers, and showcase your creativity under one dynamic campus experience.
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
