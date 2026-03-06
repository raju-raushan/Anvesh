import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950 py-10">
    <div className="section-wrap grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold">IEEE Student Branch SAGE University Indore</h3>
        <p className="mt-2 text-sm text-slate-300">SAGE University Indore Campus, Madhya Pradesh</p>
      </div>

      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-300">
          {['Home', 'About', 'Tracks', 'Timeline', 'Prizes', 'Rules', 'Contact', 'Register'].map((item) => (
            <a key={item} href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold">Follow Us</h4>
        <div className="mt-3 flex gap-4 text-xl text-cyan-300">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </div>
    <p className="mt-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} TVISHI 2.0. All rights reserved.</p>
  </footer>
);

export default Footer;
