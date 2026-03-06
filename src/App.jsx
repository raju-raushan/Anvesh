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

const App = () => (
  <div>
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
  </div>
);

export default App;
