import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      title: "B2B Marketing Strategy",
      desc: "Before any tactics, you need a strategy. We conduct a full diagnostic of your current marketing, your buyers, your competitive landscape, and your growth opportunities. You walk away with a documented plan you can execute — with us or without us.",
      items: [
        "Discovery session with your leadership team",
        "Buyer persona and ICP development",
        "Competitive landscape analysis",
        "Channel and messaging strategy",
        "Documented action plan with priorities and timelines"
      ]
    },
    {
      title: "LinkedIn Marketing",
      desc: "LinkedIn is where industrial B2B deals are built. We build and run LinkedIn programs that put your brand directly in front of the plant managers, VPs of Engineering, operations directors, and procurement heads at exactly the companies you want to win.",
      items: [
        "Company page optimization",
        "Organic content strategy and execution",
        "LinkedIn paid campaigns (Sponsored Content, Message Ads)",
        "Audience targeting by job title, company size, and industry",
        "Monthly reporting tied to pipeline metrics"
      ]
    },
    {
      title: "Content Marketing",
      desc: "In industrial B2B, trust is everything. The buyers are technical, skeptical, and do deep research before they ever talk to a salesperson. We create content that positions your company as the undeniable expert in your space.",
      items: [
        "Case studies and success stories",
        "White papers and technical guides",
        "Thought leadership articles",
        "Video scripts and interview-based content",
        "Trade publication submissions"
      ]
    },
    {
      title: "Search Engine Optimization",
      desc: "When a procurement manager searches \"custom contract manufacturer Ohio\" or \"industrial automation integrator,\" you need to appear. We build SEO programs tuned specifically for industrial search behavior.",
      items: [
        "Technical SEO audit and fixes",
        "Keyword research for industrial/B2B terms",
        "On-page optimization",
        "Content-driven SEO execution",
        "Backlink building within trade and industrial publications"
      ]
    },
    {
      title: "Paid Campaigns",
      desc: "Paid ads only work when the targeting is precise and the messaging matches the buyer's mindset. We run Google and LinkedIn ad campaigns built around how industrial buyers actually search and decide.",
      items: [
        "Google Search campaigns for high-intent industrial queries",
        "LinkedIn Sponsored Content and Lead Gen Forms",
        "Retargeting campaigns",
        "Landing page creation and optimization",
        "Full campaign reporting and optimization"
      ]
    },
    {
      title: "Web Design",
      desc: "Your website is your most important sales tool. For industrial companies, it needs to communicate technical credibility, handle complex product portfolios, and convert the right visitors into conversations.",
      items: [
        "Website strategy and architecture",
        "Copywriting for technical/industrial audiences",
        "Design and development",
        "CRM and HubSpot integration",
        "Ongoing maintenance and optimization"
      ]
    }
  ];

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
              B2B Marketing Services for Industrial Companies
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl leading-relaxed">
              We don't do social media management for local coffee shops. Every service we offer is engineered specifically for complex B2B industrial sales cycles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section key={i} className={`py-32 ${i % 2 === 0 ? 'bg-pure-white' : 'bg-off-white'}`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl font-black mb-8">{service.title}</h2>
                <p className="text-lg text-body-gray/80 leading-relaxed mb-12">
                  {service.desc}
                </p>
                <Button to="/contact" variant="primary">Discuss This Service</Button>
              </div>
              <div className="bg-pure-white p-12 shadow-sm border border-navy/5 rounded-sm">
                <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-8 text-red-accent">What's Included</h4>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-red-accent mr-3 font-bold">•</span>
                      <span className="text-body-gray/90 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="bg-navy py-32 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-12">
            Ready to build a program that generates pipeline?
          </h2>
          <Button to="/contact" variant="primary">Let's Talk</Button>
        </div>
      </section>
    </div>
  );
}
