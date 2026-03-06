import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveParticipants from './components/LiveParticipants';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import RulesSection from './components/RulesSection';
import SponsorsSection from './components/SponsorsSection';
import MemoriesSection from './components/MemoriesSection';
import RegisterSection from './components/RegisterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.7 }}>
        <Navbar />
        <main>
          <Hero />
          <LiveParticipants />
          <StatsSection />
          <AboutSection />
          <TracksSection />
          <TimelineSection />
          <PrizesSection />
          <RulesSection />
          <SponsorsSection />
          <MemoriesSection />
          <RegisterSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
