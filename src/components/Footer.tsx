import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-navy text-pure-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="text-2xl font-black text-pure-white tracking-tighter mb-6 block">
              GRITELOS<span className="text-red-accent ml-1">.</span>
            </Link>
            <p className="text-pure-white/60 mb-8 max-w-xs">
              Grit to do the work. Telos to finish it.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-red-accent transition-colors">
              <Linkedin size={24} />
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-8">Services</h4>
            <ul className="space-y-4 text-pure-white/60 text-[15px]">
              <li><Link to="/services" className="hover:text-pure-white transition-colors">B2B Marketing Strategy</Link></li>
              <li><Link to="/services" className="hover:text-pure-white transition-colors">LinkedIn Marketing</Link></li>
              <li><Link to="/services" className="hover:text-pure-white transition-colors">Content Marketing</Link></li>
              <li><Link to="/services" className="hover:text-pure-white transition-colors">SEO</Link></li>
              <li><Link to="/services" className="hover:text-pure-white transition-colors">Paid Campaigns</Link></li>
              <li><Link to="/services" className="hover:text-pure-white transition-colors">Web Design</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-8">Industries</h4>
            <ul className="space-y-4 text-pure-white/60 text-[15px]">
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Contract Manufacturing</Link></li>
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Industrial Equipment</Link></li>
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Automation & Robotics</Link></li>
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Specialty Chemicals</Link></li>
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Industrial Distribution</Link></li>
              <li><Link to="/industries" className="hover:text-pure-white transition-colors">Engineering Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-8">Company</h4>
            <ul className="space-y-4 text-pure-white/60 text-[15px] mb-8">
              <li><Link to="/about" className="hover:text-pure-white transition-colors">About</Link></li>
              <li><Link to="/process-pricing" className="hover:text-pure-white transition-colors">Process & Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-pure-white transition-colors">Contact</Link></li>
            </ul>
            <Button to="/process-pricing" className="w-full !px-4 !text-[12px]">Start with the Audit</Button>
          </div>
        </div>

        <div className="border-t border-pure-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-pure-white/40 text-[13px]">
          <p>© 2025 Gritelos. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-pure-white transition-colors">Privacy Policy</Link>
            <span>gritelos.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
