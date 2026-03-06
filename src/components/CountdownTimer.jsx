import { useEffect, useMemo, useState } from 'react';

const getRemainingTime = (targetDate) => {
  const distance = new Date(targetDate).getTime() - Date.now();
  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

const CountdownTimer = ({ targetDate }) => {
  const [time, setTime] = useState(getRemainingTime(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const entries = useMemo(() => Object.entries(time), [time]);

  return (
    <div className="grid grid-cols-4 gap-3">
      {entries.map(([unit, value]) => (
        <div key={unit} className="glass p-4 text-center">
          <p className="text-2xl font-bold text-cyan-300 sm:text-3xl">{value.toString().padStart(2, '0')}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">{unit}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
