import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/constants';

const linkToId = (label) => (label === 'Home' ? 'home' : label.toLowerCase());

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="section-wrap flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-ieeeBlue font-bold">I</div>
          <div>
            <p className="text-sm text-slate-300">IEEE SB SAGE</p>
            <p className="font-semibold">TVISHI 2.0</p>
          </div>
        </a>

        <button className="text-white md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        <ul className="hidden items-center gap-5 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${linkToId(link)}`} className="transition hover:text-cyan-300">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="rounded-full bg-ieeeBlue px-4 py-2 font-semibold text-white transition hover:bg-cyan-600"
            >
              Register Now
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-900 md:hidden">
          <ul className="section-wrap flex flex-col gap-4 py-4 text-slate-200">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${linkToId(link)}`} onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
