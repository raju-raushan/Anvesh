import {
  FaBook,
  FaBriefcase,
  FaBuilding,
  FaCoins,
  FaFileShield,
  FaHeartbeat,
  FaLandmark,
  FaShieldAlt,
} from 'react-icons/fa';

export const navLinks = [
  'Home',
  'About',
  'Tracks',
  'Timeline',
  'Prizes',
  'Rules',
  'Sponsors',
  'Memories',
  'Contact',
  'Register',
];

export const stats = [
  { label: 'Hackathon Hours', value: 24, suffix: ' Hours' },
  { label: 'Prize Pool', value: 35000, prefix: '₹' },
  { label: 'Problem Tracks', value: 8 },
  { label: 'Expected Hackers', value: 300, suffix: '+' },
];

export const tracks = [
  { icon: FaHeartbeat, title: 'Healthcare', description: 'Digital solutions for diagnosis, wellness, and care delivery.' },
  { icon: FaCoins, title: 'Finance', description: 'Build transparent, secure, and inclusive fintech products.' },
  { icon: FaFileShield, title: 'Insurance', description: 'Reimagine risk management and claim experiences with tech.' },
  { icon: FaBook, title: 'Education', description: 'Empower learners with smarter, accessible education tools.' },
  { icon: FaShieldAlt, title: 'Cyber Security', description: 'Defend systems, users, and data through resilient security.' },
  { icon: FaBriefcase, title: 'JobTech Automation', description: 'Automate talent workflows and build future-ready job platforms.' },
  { icon: FaLandmark, title: 'GovTech', description: 'Create civic-tech solutions for smarter public services.' },
  { icon: FaBuilding, title: 'Open Innovation', description: 'Pitch bold ideas that solve real-world challenges at scale.' },
];

export const timeline = [
  { title: 'Registration Opens', date: '15 Feb 2026' },
  { title: 'Registration Closes', date: '05 Apr 2026' },
  { title: 'Shortlisting', date: '08 Apr 2026' },
  { title: 'Hackathon Start', date: '13 Apr 2026 | 9:00 AM' },
  { title: 'Final Presentation', date: '14 Apr 2026 | 8:00 AM' },
  { title: 'Winner Announcement', date: '14 Apr 2026 | 11:00 AM' },
];

export const memories = [
  {
    title: 'Kickoff Energy',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Team Collaboration',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mentor Sessions',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Final Presentations',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Judging Panel',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Winning Moment',
    image:
      'https://images.unsplash.com/photo-1464047736614-af63643285bf?auto=format&fit=crop&w=900&q=80',
  },
];
