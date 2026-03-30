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
            <motion.h1 
              className="text-pure-white text-5xl md:text-7xl font-black leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              GTM Engineering for Industrial Manufacturers.
            </motion.h1>
            <motion.p 
              className="text-pure-white/70 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Gritelos helps OEMs, contract manufacturers, and industrial companies build marketing programs that generate real pipeline, not just impressions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/process-pricing" variant="primary">See How We Work</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/services" variant="outline">View Our Services</Button>
              </motion.div>
            </motion.div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col p-8 rounded-lg bg-white border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div 
                  className="text-red-accent mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  {item.icon}
                </motion.div>
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
                title: "GTM Strategy",
                desc: "We audit, strategize, and build a documented go-to-market plan before a single dollar is spent."
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
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                className="p-10 bg-off-white border border-navy/5 rounded-sm flex flex-col h-full relative overflow-hidden group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div 
                  className="mb-6 relative z-10"
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                <p className="text-body-gray/80 mb-8 flex-grow relative z-10">{service.desc}</p>
                <motion.div 
                  className="text-red-accent font-bold text-sm uppercase tracking-wider relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Learn More →
                </motion.div>
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
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">We Speak Your Language</span>
              <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-8">
                We don't just serve industrial companies — we come from deep immersion in this world.
              </h2>
              <motion.p 
                className="text-pure-white/60 text-lg mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We understand your buyers, your sales cycles, and your competitive landscape.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="p-6 bg-pure-white/5 border border-pure-white/10 rounded-sm text-center font-bold uppercase tracking-wider text-[13px] cursor-pointer"
                >
                  {industry}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Process Overview */}
      <section className="bg-pure-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h2 
              className="text-4xl md:text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >How Gritelos Works</motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Animated Connecting Line */}
            <motion.div 
              className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-navy/5 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
            
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
              <motion.div 
                key={i} 
                className="relative z-10 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <motion.div 
                  className="w-24 h-24 bg-pure-white border-2 border-red-accent rounded-full flex items-center justify-center mx-auto mb-8 relative"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.span 
                    className="text-red-accent text-3xl font-black"
                    whileHover={{ scale: 1.2 }}
                  >
                    {step.num}
                  </motion.span>
                  {/* Animated pulse effect */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-red-accent rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  whileHover={{ scale: 1.05, color: "#EF4444" }}
                  transition={{ duration: 0.2 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-body-gray/80 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Button to="/process-pricing" variant="primary">See Full Process & Pricing</Button>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA Banner */}
      <section className="bg-red-accent py-24 text-pure-white text-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-pure-white text-4xl md:text-5xl font-black mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to build a marketing program that actually closes deals?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button to="/contact" variant="secondary">Let's Talk</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
