import { motion } from 'motion/react';
import Button from '../components/Button';

export default function ProcessPricing() {
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
              Here's Exactly How We Work — and What It Costs
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl leading-relaxed">
              We believe in full transparency. No mystery pricing, no bait-and-switch retainers. Here is our methodology and what you can expect to invest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step 01: Audit */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-7xl font-black text-red-accent opacity-20">01</span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-black mb-8">The Gritelos Audit</h2>
              <p className="text-xl font-bold text-navy mb-6">Price: $2,500 — one-time, no further commitment required</p>
              <p className="text-lg text-body-gray/80 leading-relaxed mb-12">
                Before we recommend a single tactic, we do the work to understand your business completely. The Gritelos Audit is a paid diagnostic engagement that leaves you with a documented marketing strategy and action plan — regardless of whether you hire us to implement it.
              </p>
              
              <div className="bg-off-white p-10 rounded-sm mb-12">
                <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-6 text-red-accent">What's Included</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "90-minute discovery call with your leadership and sales team",
                    "Analysis of your current digital presence, competitors, and buyer landscape",
                    "Identification of your highest-priority growth opportunities",
                    "Documented strategy deck with specific recommendations",
                    "Implementation options at multiple investment levels"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-accent mr-3">•</span>
                      <span className="text-body-gray/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-red-accent pl-8 py-2">
                <h4 className="text-lg font-bold mb-4">Why we charge for this</h4>
                <p className="text-body-gray/80">
                  A free proposal is a sales pitch. A paid audit is a real deliverable. Our clients who go through the Audit walk away with clarity and a plan they can act on immediately — with us or on their own.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 bg-navy p-10 text-pure-white rounded-sm">
              <h3 className="text-2xl font-bold mb-6">Ready to start?</h3>
              <p className="text-pure-white/60 mb-8">The Audit is the first step for every Gritelos client. It ensures we're building on strategy, not guesswork.</p>
              <Button to="/contact" variant="primary" className="w-full">Book Your Audit</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step 02: Implementation */}
      <section className="py-32 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-7xl font-black text-red-accent opacity-20">02</span>
            </div>
            <div className="lg:col-span-11">
              <h2 className="text-4xl font-black mb-8">Program Implementation</h2>
              <p className="text-xl font-bold text-navy mb-12">Starting at $3,000/month</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Starter Program",
                    price: "$3,000–$5,000/month",
                    items: [
                      "LinkedIn organic content (3 posts/week)",
                      "One case study or white paper per quarter",
                      "Monthly strategy call and reporting"
                    ],
                    bestFor: "Companies beginning to build their marketing foundation"
                  },
                  {
                    title: "Growth Program",
                    price: "$5,000–$8,000/month",
                    items: [
                      "Everything in Starter, plus:",
                      "LinkedIn paid campaigns",
                      "SEO program (on-page + content)",
                      "Quarterly website updates and landing pages"
                    ],
                    bestFor: "Companies ready to actively generate pipeline"
                  },
                  {
                    title: "Full Program",
                    price: "$8,000–$15,000/month",
                    items: [
                      "Everything in Growth, plus:",
                      "Google Search campaigns",
                      "Full content calendar execution",
                      "Trade show and event support",
                      "HubSpot setup and reporting"
                    ],
                    bestFor: "Companies with serious growth targets and competitive markets"
                  }
                ].map((plan, i) => (
                  <div key={i} className="bg-pure-white p-10 border border-navy/5 rounded-sm flex flex-col">
                    <h3 className="text-xl font-black mb-2">{plan.title}</h3>
                    <p className="text-red-accent font-bold mb-8">{plan.price}</p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.items.map((item, j) => (
                        <li key={j} className="text-sm text-body-gray/80 flex items-start">
                          <span className="text-red-accent mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-navy/5">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-navy mb-2">Best For</p>
                      <p className="text-sm text-body-gray/70">{plan.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 03: Optimization */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-7xl font-black text-red-accent opacity-20">03</span>
            </div>
            <div className="lg:col-span-11">
              <h2 className="text-4xl font-black mb-8">Ongoing Optimization</h2>
              <p className="text-lg text-body-gray/80 leading-relaxed max-w-3xl">
                Every month we report on what's working, what isn't, and what we're changing. We measure success by pipeline and revenue impact — not impressions or follower counts. Strategy calls keep your team and ours aligned. We optimize constantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-accent py-24 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-12">
            Ready to start with the Audit?
          </h2>
          <Button to="/contact" variant="secondary">Start the Conversation</Button>
        </div>
      </section>
    </div>
  );
}
