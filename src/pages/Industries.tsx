import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Industries() {
  const industries = [
    {
      title: "Contract Manufacturing",
      desc: "Contract manufacturers face a unique challenge: they need to market capabilities, not products. Buyers are engineers and supply chain managers who are looking for precision, reliability, and capacity. We help contract manufacturers build credibility programs that generate qualified RFQs from ideal customers.",
      items: [
        "RFQ-focused lead generation",
        "Capability showcase content and case studies",
        "LinkedIn targeting of supply chain and procurement professionals"
      ]
    },
    {
      title: "Industrial Equipment & Machinery",
      desc: "Equipment purchases are big-ticket, long-cycle decisions involving multiple stakeholders. The sales process takes months. We build marketing programs that keep your brand visible and trusted throughout that entire buying journey — from first awareness to final decision.",
      items: [
        "Trade show and event marketing support",
        "Product launch campaigns",
        "Technical content for engineering audiences"
      ]
    },
    {
      title: "Automation & Robotics",
      desc: "The automation market is growing fast and getting competitive. Companies in robotics and industrial automation need to establish thought leadership and reach operations and engineering decision-makers before their competitors do. We build programs that put you ahead of the curve.",
      items: [
        "Thought leadership and education-first content",
        "LinkedIn and Google campaigns targeting operations leaders",
        "Case study development from successful deployments"
      ]
    },
    {
      title: "Specialty Chemicals",
      desc: "Specialty chemical companies sell technical products to technical buyers in highly regulated industries. Marketing in this space requires precise language, compliance awareness, and a deep understanding of application-specific use cases. We've worked in this world.",
      items: [
        "Application-specific content and landing pages",
        "Trade publication strategy",
        "SEO for technical chemical search terms"
      ]
    },
    {
      title: "Industrial Distribution",
      desc: "Distributors live or die by relationships — but in a world where buyers research online before ever picking up the phone, digital presence has become a critical growth lever. We help industrial distributors build digital programs that complement their existing sales relationships.",
      items: [
        "Supplier and product content strategy",
        "Local and regional SEO",
        "Email and nurture programs for existing customer bases"
      ]
    },
    {
      title: "Engineering Services",
      desc: "Engineering services firms sell expertise. The hardest thing to market is knowledge — but it's also the most powerful differentiator. We help engineering services companies turn their team's expertise into content that attracts ideal clients and builds undeniable credibility.",
      items: [
        "Subject matter expert content programs",
        "Case study and portfolio development",
        "LinkedIn thought leadership for key team members"
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
              We Know Your World
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl leading-relaxed">
              We've spent years studying how industrial manufacturers buy, sell, and grow. That depth of domain knowledge is why our clients see results that generic agencies can't deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, i) => (
        <section key={i} className={`py-32 ${i % 2 === 0 ? 'bg-pure-white' : 'bg-off-white'}`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl font-black mb-8">{industry.title}</h2>
                <p className="text-lg text-body-gray/80 leading-relaxed mb-12">
                  {industry.desc}
                </p>
                <Button to="/contact" variant="primary">Talk to an Industry Expert</Button>
              </div>
              <div className="bg-pure-white p-12 shadow-sm border border-navy/5 rounded-sm">
                <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-8 text-red-accent">How We Help</h4>
                <ul className="space-y-4">
                  {industry.items.map((item, j) => (
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
      <section className="bg-red-accent py-32 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-12">
            Ready to work with an agency that speaks your language?
          </h2>
          <Button to="/contact" variant="secondary">Let's Talk</Button>
        </div>
      </section>
    </div>
  );
}
