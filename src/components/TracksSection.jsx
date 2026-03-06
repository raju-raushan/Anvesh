import SectionHeading from './SectionHeading';
import { tracks } from '../data/constants';
import TrackCard from './TrackCard';

const TracksSection = () => (
  <section id="tracks" className="section-wrap py-16">
    <SectionHeading title="Problem Tracks" subtitle="Choose your challenge and build your breakthrough." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {tracks.map((track, index) => (
        <TrackCard key={track.title} track={track} index={index} />
      ))}
    </div>
  </section>
);

export default TracksSection;
