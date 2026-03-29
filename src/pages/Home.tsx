import { motion } from 'motion/react';
import { ArrowRight, Target, Users, BarChart3, Search, Megaphone, Globe, Linkedin } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Section 1: Hero */}
      <section className="relative bg-navy pt-48 pb-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4F4F8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-pure-white text-5xl md:text-7xl font-black leading-[1.1] mb-8">
              B2B Marketing for Industrial Manufacturers. <span className="text-red-accent">Strategy First. Pipeline Always.</span>
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
              Gritelos helps OEMs, contract manufacturers, and industrial companies build marketing programs that generate real pipeline — not just impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button to="/process-pricing" variant="primary">See How We Work</Button>
              <Button to="/services" variant="outline">View Our Services</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Problem Strip */}
      <section className="bg-off-white py-24 border-y border-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="text-red-accent mb-6" size={32} />,
                title: "Most agencies don't understand your buyers",
                desc: "They've never spoken to a plant manager or read a technical spec sheet."
              },
              {
                icon: <Target className="text-red-accent mb-6" size={32} />,
                title: "Generic marketing doesn't close industrial deals",
                desc: "B2B manufacturing has long sales cycles, multiple stakeholders, and complex products."
              },
              {
                icon: <BarChart3 className="text-red-accent mb-6" size={32} />,
                title: "You need pipeline, not just posts",
                desc: "Impressions and followers don't pay your engineers. Qualified leads do."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-body-gray/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Services Grid */}
      <section className="bg-pure-white py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black max-w-2xl">
              Full-Stack B2B Marketing, Built for Industrial Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Target className="text-red-accent" size={24} />,
                title: "B2B Marketing Strategy",
                desc: "We audit, strategize, and build a documented plan before a single dollar is spent."
              },
              {
                icon: <Linkedin className="text-red-accent" size={24} />,
                title: "LinkedIn Marketing",
                desc: "Reach plant managers, VPs of Engineering, and procurement heads at exactly the right companies."
              },
              {
                icon: <Megaphone className="text-red-accent" size={24} />,
                title: "Content Marketing",
                desc: "White papers, case studies, and thought leadership that builds trust with technical buyers."
              },
              {
                icon: <Search className="text-red-accent" size={24} />,
                title: "Search Engine Optimization",
                desc: "Get found when industrial buyers search for what you offer."
              },
              {
                icon: <BarChart3 className="text-red-accent" size={24} />,
                title: "Paid Campaigns",
                desc: "Google and LinkedIn ads targeted at your exact buyer profile, not a broad audience."
              },
              {
                icon: <Globe className="text-red-accent" size={24} />,
                title: "Web Design",
                desc: "Websites built for B2B industrial buyers, engineered to convert."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 bg-off-white border border-navy/5 rounded-sm flex flex-col h-full"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-body-gray/80 mb-8 flex-grow">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button to="/services" variant="primary">See All Services</Button>
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section className="bg-navy py-32 text-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-label">We Speak Your Language</span>
              <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-8">
                We don't just serve industrial companies — we come from deep immersion in this world.
              </h2>
              <p className="text-pure-white/60 text-lg mb-12 leading-relaxed">
                We understand your buyers, your sales cycles, and your competitive landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Contract Manufacturing",
                "Industrial Equipment & Machinery",
                "Automation & Robotics",
                "Specialty Chemicals",
                "Industrial Distribution",
                "Engineering Services"
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-pure-white/5 border border-pure-white/10 rounded-sm text-center font-bold uppercase tracking-wider text-[13px]"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Process Overview */}
      <section className="bg-pure-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">How Gritelos Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-navy/5 z-0"></div>
            
            {[
              {
                num: "01",
                title: "Strategy & Audit",
                desc: "We deep-dive into your business, buyers, and competitive landscape. You walk away with a documented strategy."
              },
              {
                num: "02",
                title: "Build & Execute",
                desc: "We implement the plan across the right channels — content, LinkedIn, SEO, paid, web — all coordinated toward one goal: pipeline."
              },
              {
                num: "03",
                title: "Optimize & Grow",
                desc: "We report obsessively, optimize monthly, and tie every metric back to revenue impact. No vanity metrics. Ever."
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 bg-pure-white border-2 border-red-accent rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-red-accent text-3xl font-black">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-body-gray/80 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Button to="/process-pricing" variant="primary">See Full Process & Pricing</Button>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Banner */}
      <section className="bg-red-accent py-24 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-12">
            Ready to build a marketing program that actually closes deals?
          </h2>
          <Button to="/contact" variant="secondary">Let's Talk</Button>
        </div>
      </section>
    </div>
  );
}
