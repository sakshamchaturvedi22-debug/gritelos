import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process & Pricing', path: '/process-pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-pure-white tracking-tighter flex items-center">
          GRITELOS<span className="text-red-accent ml-1">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-red-accent ${location.pathname === link.path ? 'text-red-accent' : 'text-pure-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/contact" className="ml-4 !px-6 !py-3">Let's Talk</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-pure-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy border-t border-pure-white/10 p-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-pure-white text-[14px] font-bold uppercase tracking-[0.15em]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</Button>
        </div>
      )}
    </nav>
  );
}
