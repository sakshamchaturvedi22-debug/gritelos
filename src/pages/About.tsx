import { motion } from 'motion/react';
import Button from '../components/Button';

export default function About() {
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
              We Built This Agency to Fix a Specific Problem
            </h1>
            <p className="text-pure-white/70 text-xl md:text-2xl leading-relaxed">
              Industrial manufacturers keep getting burned by generic marketing agencies that don't understand their world — agencies that chase trendy tactics, miss the fundamentals, and disappear when results don't come fast enough. Gritelos was built specifically to be the opposite of that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Grit + Telos</h2>
              <p className="text-lg text-body-gray/80 leading-relaxed mb-8">
                Grit is the relentless work ethic to push through hard problems and deliver even when it's difficult. Telos — from the Greek, meaning "end goal" or "ultimate purpose" — is our obsession with outcomes over activity. 
              </p>
              <p className="text-xl font-bold text-navy mb-8">
                Every piece of content, every campaign, every strategy session exists to move the needle on one thing: your revenue.
              </p>
              <p className="text-2xl font-black text-red-accent">
                We don't celebrate posts. We celebrate pipeline.
              </p>
            </div>
            <div className="bg-off-white p-12 rounded-sm border border-navy/5">
              <div className="space-y-12">
                <div>
                  <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-4 text-red-accent">Grit</h4>
                  <p className="text-body-gray/80 italic">"The relentless work ethic and determination to push through difficult challenges. We don't disappear after the proposal."</p>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold uppercase tracking-[0.15em] mb-4 text-red-accent">Telos</h4>
                  <p className="text-body-gray/80 italic">"Greek for 'end goal' or 'ultimate purpose.' We are obsessed with outcomes — pipeline, revenue, and real business results."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industrial */}
      <section className="py-32 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">We chose this space deliberately</h2>
            <p className="text-lg text-body-gray/80 leading-relaxed mb-12">
              The industrial and manufacturing sector is one of the most underserved markets in B2B marketing. Most agencies find it unglamorous. We find it fascinating — the complexity of technical products, the depth of buyer relationships, the long sales cycles that reward patience and credibility over hype. This is where we've chosen to build deep expertise. And that expertise is what separates our results from what you'd get from a generalist agency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-32 bg-pure-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-navy rounded-sm flex items-center justify-center">
                <span className="text-pure-white/20 text-6xl font-black">GRITELOS</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-8">We finish what we start</h2>
              <p className="text-lg text-body-gray/80 leading-relaxed mb-8">
                Gritelos means we see things through. Not just the easy campaigns, but the hard strategic pivots, the slow-building SEO programs, the content that takes six months to show results. 
              </p>
              <p className="text-lg font-bold text-navy">
                We are a long-game agency for companies that want real, durable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-24 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-pure-white text-4xl md:text-5xl font-black mb-12">
            Ready to partner with an agency that has grit?
          </h2>
          <Button to="/contact" variant="primary">Let's Talk</Button>
        </div>
      </section>
    </div>
  );
}
