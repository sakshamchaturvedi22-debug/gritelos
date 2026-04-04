import { motion } from 'motion/react';
import { ArrowRight, Target, Users, BarChart3, Search, Megaphone, Globe, Linkedin } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Section 1: Hero - Lyfe Marketing Style */}
      <section className="relative bg-navy pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4F4F8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-pure-white text-4xl md:text-6xl font-black leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Award-Winning GTM Engineering Agency for Industrial Manufacturers
            </motion.h1>
            <motion.h2 
              className="text-red-accent text-3xl md:text-5xl font-black leading-[1.2] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A TOP GTM ENGINEERING COMPANY
            </motion.h2>
            <motion.p 
              className="text-pure-white/80 text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Saksham Chaturvedi
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/contact" variant="primary" className="mb-4 sm:mb-0">GET A CUSTOM PROPOSAL</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button to="/contact" variant="outline">GET A FREE PROPOSAL</Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button to="/services" variant="secondary">VIEW ALL OF OUR GTM ENGINEERING SERVICES</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: More Than Just Marketing */}
      <section className="bg-pure-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy text-3xl md:text-4xl font-black mb-6">
              MORE THAN JUST YOUR GTM ENGINEERING COMPANY
            </h2>
            <p className="text-body-gray text-lg leading-relaxed mb-8">
              We don't just provide marketing services—we engineer your entire go-to-market strategy. From understanding your industrial buyers to creating content that resonates with engineers, we build comprehensive marketing programs that actually close deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Results & Statistics - Lyfe Marketing Style */}
      <section className="bg-navy py-20 text-pure-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-pure-white text-3xl md:text-4xl font-black mb-6">
              We Help You Accelerate Growth with GTM Engineering
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "+284%",
                description: "Increase in qualified leads",
                case: "A leading industrial automation company needed to reach plant managers and VPs of Engineering. We engineered their GTM strategy and increased qualified leads by 284%."
              },
              {
                number: "+$750K", 
                description: "Increase in pipeline value",
                case: "A contract manufacturer was struggling with inconsistent lead flow. Our LinkedIn marketing and content strategy generated $750K in new pipeline."
              },
              {
                number: "15K",
                description: "Increase in website traffic", 
                case: "An industrial equipment manufacturer wanted to improve their online presence. We drove 15K new visitors through SEO and content marketing."
              },
              {
                number: "450%",
                description: "Increase in engagement rate",
                case: "A specialty chemicals company needed to build brand awareness. Our content strategy increased engagement by 450% across all platforms."
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <motion.div 
                  className="text-red-accent text-4xl md:text-5xl font-black mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-pure-white text-lg font-bold mb-4">
                  {stat.description}
                </h3>
                <p className="text-pure-white/70 text-sm leading-relaxed mb-6">
                  {stat.case}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button to="/contact" variant="secondary">VIEW MORE CASE STUDIES</Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: What We Do - Detailed Breakdown */}
      <section className="bg-pure-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy text-3xl md:text-4xl font-black mb-6">
              What does a GTM engineering agency do?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {[
              {
                title: "Understand Your Business, Target Audience & Competition",
                icon: <Target className="text-red-accent mb-4" size={32} />,
                content: "While posting content is straightforward, it's more important to consider what you post. We first complete an initial audit of your existing online presence, business, competitors, and target audience. We learn everything about your business, competitors, and target market. What sets you apart? What are your USPs? Why should customers choose you? We dig deep to answer these questions and develop a comprehensive GTM plan."
              },
              {
                title: "GTM Strategy & Content Creation", 
                icon: <Megaphone className="text-red-accent mb-4" size={32} />,
                content: "After extensive research and crafting a strategy specific to your business, we create content for your marketing platforms. We create copy and visuals for every campaign, tailored to each platform. The content is based on data from researching your business and designed to attract your target audience and stand out from competition."
              },
              {
                title: "LinkedIn Marketing & Lead Generation",
                icon: <Linkedin className="text-red-accent mb-4" size={32} />,
                content: "We manage your LinkedIn presence to reach plant managers, VPs of Engineering, and procurement heads. From optimized profiles to targeted campaigns, we help you connect with decision-makers in the industrial sector. Our approach focuses on building relationships that convert to qualified leads."
              },
              {
                title: "SEO & Paid Campaign Management",
                icon: <Search className="text-red-accent mb-4" size={32} />,
                content: "We ensure you get found when industrial buyers search for what you offer. Our SEO strategy focuses on technical keywords and long-tail phrases that your buyers actually use. We also manage paid campaigns on Google and LinkedIn, targeting your exact buyer profile with precision."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col"
              >
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-navy text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-body-gray leading-relaxed">{service.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: 5 Reasons to Choose Gritelos */}
      <section className="bg-off-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy text-3xl md:text-4xl font-black mb-6">
              5 Reasons to Choose Gritelos As Your GTM Engineering Agency
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "We Are Seasoned In GTM Engineering!",
                content: "Our team has extensive experience working with industrial manufacturers, from OEMs to contract manufacturers. We understand the complexity of your sales cycles and the technical nature of your products."
              },
              {
                title: "We Understand The Needs & Goals Of Industrial Companies",
                content: "We know that industrial buyers are different. They're technical, they care about specifications, and they make decisions based on data, not emotion. We speak their language."
              },
              {
                title: "We Are Well-Versed In Industrial Manufacturing",
                content: "From automation to specialty chemicals, we've worked across diverse industrial sectors. We understand your competitive landscape and what makes your buyers tick."
              },
              {
                title: "We Don't Mean to Brag, But We Are An Award-Winning Agency",
                content: "Our results speak for themselves. We've been recognized for our innovative approach to B2B industrial marketing and our ability to drive real pipeline."
              },
              {
                title: "Above All, Our Biggest Priority Is You",
                content: "We're not just another agency. We become an extension of your team, focused on your success and committed to helping you achieve your growth goals."
              }
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-8 bg-white border border-navy/5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-navy text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-body-gray leading-relaxed">{reason.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Important Benefits */}
      <section className="bg-pure-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-navy text-3xl md:text-4xl font-black mb-6">
              Important Benefits You Enjoy With The Right GTM Engineering Company
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Pipeline Generation",
                icon: <BarChart3 className="text-red-accent mb-4" size={32} />,
                content: "Consistent flow of qualified leads that actually convert to customers."
              },
              {
                title: "Brand Authority",
                icon: <Users className="text-red-accent mb-4" size={32} />,
                content: "Position your company as a trusted leader in your industrial sector."
              },
              {
                title: "Marketing Efficiency",
                icon: <Target className="text-red-accent mb-4" size={32} />,
                content: "Stop wasting money on tactics that don't work. Focus on what drives results."
              },
              {
                title: "Revenue Growth",
                icon: <ArrowRight className="text-red-accent mb-4" size={32} />,
                content: "Accelerate your sales cycle and close deals faster with better-qualified leads."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center p-6"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-navy text-lg font-bold mb-3">{benefit.title}</h3>
                <p className="text-body-gray text-sm leading-relaxed">{benefit.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Client Testimonials */}
      <section className="bg-navy py-20 text-pure-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-pure-white text-3xl md:text-4xl font-black mb-6">
              What Our Clients Have To Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Michael Thompson",
                company: "Industrial Automation Solutions",
                testimonial: "We've had fantastic results with Gritelos. They understand our technical buyers and create content that actually resonates with engineers. Our pipeline has never been stronger."
              },
              {
                name: "Sarah Chen",
                company: "Precision Manufacturing Co.",
                testimonial: "Gritelos transformed our marketing approach. They helped us reach decision-makers we couldn't get in front of before. The ROI has been incredible."
              },
              {
                name: "David Rodriguez",
                company: "Specialty Chemicals Inc.",
                testimonial: "Finally, a marketing agency that speaks our language. They understand the industrial space and don't try to apply B2C tactics to our B2B challenges."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-8 bg-pure-white/10 border border-pure-white/20 rounded-lg"
              >
                <p className="text-pure-white/90 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="text-pure-white">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-pure-white/70 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Contact Form & Final CTA */}
      <section className="bg-red-accent py-20 text-pure-white text-center">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-pure-white text-3xl md:text-4xl font-black mb-6">
              Ready to get started?
            </h2>
            <p className="text-pure-white/90 text-lg mb-8">
              Fill out our contact form to schedule a meeting and see how we can help accelerate your growth.
            </p>
            
            <div className="bg-pure-white/10 border border-pure-white/20 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-pure-white/20 border border-pure-white/30 rounded px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:border-pure-white"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-pure-white/20 border border-pure-white/30 rounded px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:border-pure-white"
                />
              </div>
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full bg-pure-white/20 border border-pure-white/30 rounded px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:border-pure-white mb-6"
              />
              <textarea 
                placeholder="Tell us about your marketing challenges..." 
                rows={4}
                className="w-full bg-pure-white/20 border border-pure-white/30 rounded px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:border-pure-white mb-6"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/contact" variant="secondary" className="w-full md:w-auto">SCHEDULE A MEETING</Button>
              </motion.div>
            </div>

            <div className="text-pure-white/80">
              <p className="mb-2">Or call us directly: <span className="font-bold text-pure-white">555-123-4567</span></p>
              <p>Ready to accelerate your industrial marketing? Contact us today!</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
