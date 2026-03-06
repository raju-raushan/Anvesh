import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const onOver = (e) => setActive(Boolean(e.target.closest('a, button, input, textarea, [data-hover]')));

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-7 w-7 rounded-full border border-cyan-300/70 bg-cyan-300/10 md:block"
        animate={{ x: position.x - 14, y: position.y - 14, scale: active ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30, mass: 0.4 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-neon md:block"
        animate={{ x: position.x - 3, y: position.y - 3 }}
        transition={{ type: 'spring', stiffness: 650, damping: 28, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
