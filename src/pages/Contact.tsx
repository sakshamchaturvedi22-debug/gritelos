import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy pt-48 pb-32 text-pure-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-pure-white text-5xl md:text-7xl font-black mb-8">
              Let's See If There's a Fit
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl leading-relaxed">
              We work with a limited number of industrial clients at any given time. If you think there might be a fit, start with a conversation. No pressure, no pitch — just a genuine discussion about where you are and where you want to go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">First Name *</label>
                <input type="text" required className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">Last Name *</label>
                <input type="text" required className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">Company Name *</label>
                <input type="text" required className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">Job Title *</label>
                <input type="text" required className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">Email Address *</label>
                <input type="email" required className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">Company Website</label>
                <input type="url" className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors" />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">What best describes your company?</label>
                <select className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors appearance-none">
                  <option>Contract Manufacturer</option>
                  <option>Industrial Equipment</option>
                  <option>Automation & Robotics</option>
                  <option>Specialty Chemicals</option>
                  <option>Industrial Distribution</option>
                  <option>Engineering Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[12px] font-bold uppercase tracking-wider text-navy">What are you looking to achieve?</label>
                <textarea rows={5} className="bg-off-white border border-navy/10 p-4 focus:outline-none focus:border-red-accent transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <Button variant="primary" className="w-full">Start the Conversation</Button>
                <p className="text-center text-sm text-body-gray/60 mt-6">We typically respond within 1 business day.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
