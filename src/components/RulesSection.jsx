import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const rules = [
  { title: 'Team Composition', body: 'Team size must be between 1 and 4 members. Cross-domain teams are encouraged.' },
  { title: 'Build Window', body: 'All projects must be ideated and built during the official 24-hour hackathon duration.' },
  { title: 'Tools & Frameworks', body: 'Open-source tools, APIs, and frameworks are allowed. Respect all API and license policies.' },
  { title: 'Originality', body: 'Plagiarism or pre-built submissions lead to immediate disqualification.' },
  { title: 'Submission', body: 'Final submission must include a GitHub repo, clear README, and demo/pitch presentation.' },
];

const RulesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="rules" className="bg-slate-900/40 py-16">
      <div className="section-wrap">
        <SectionHeading title="Rules & Guidelines" subtitle="Transparent standards for a fair, innovation-first competition." />
        <div className="mx-auto max-w-3xl space-y-3">
          {rules.map((rule, index) => {
            const open = openIndex === index;
            return (
              <div key={rule.title} className="glass overflow-hidden">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="font-medium">{rule.title}</span>
                  <FaChevronDown className={`transition ${open ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/10 px-5 py-4 text-slate-300">{rule.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
