import SectionHeading from './SectionHeading';

const rules = [
  'Team size: 1–4 members',
  'All projects must be built during the hackathon',
  'Open-source tools allowed',
  'Plagiarism leads to disqualification',
  'Final submission must include GitHub repository and demo',
];

const RulesSection = () => (
  <section id="rules" className="bg-slate-900/40 py-16">
    <div className="section-wrap">
      <SectionHeading title="Rules & Guidelines" subtitle="Play fair, build smart, and submit with confidence." />
      <ul className="glass mx-auto max-w-3xl space-y-3 p-6">
        {rules.map((rule) => (
          <li key={rule} className="flex items-start gap-3 text-slate-200">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            {rule}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RulesSection;
