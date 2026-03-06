import { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

const LiveParticipants = () => {
  const [participants, setParticipants] = useState(186);

  useEffect(() => {
    const timer = setInterval(() => {
      setParticipants((prev) => {
        const drift = Math.floor(Math.random() * 4);
        return Math.min(300, prev + drift);
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="section-wrap pb-6">
      <div className="glass flex items-center justify-center gap-3 p-4 text-sm sm:text-base">
        <FaUsers className="text-cyan-300" />
        <span className="font-medium">Live Registrations:</span>
        <span className="font-bold text-cyan-300">{participants}+ Participants</span>
      </div>
    </div>
  );
};

export default LiveParticipants;
