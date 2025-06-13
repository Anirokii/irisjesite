
import { useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import StatCard from '@/components/StatCard';
import ContactSection from '@/components/ContactSection';
import { statisticsData } from '@/data/mockData';
import { setupRevealAnimations } from '@/utils/reveal';

const Statistics = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);
const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-dark-blue to-brand-dark-blue/90 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Our Impact
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            The numbers that showcase our commitment to excellence and client success.
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>
      </section>
      
      {/* Key Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Key Metrics" 
            subtitle="A snapshot of our achievements and the impact we've made."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {statisticsData.map((stat, index) => (
              <div key={stat.id} className="reveal" style={{ animationDelay: `${0.1 * index}s` }}>
                <StatCard
                  icon={<span className="text-4xl">{stat.icon}</span>}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Growth Chart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Our Growth Story" 
                subtitle="A journey of continuous improvement and expansion."
              />
              <p className="text-gray-600 mb-6">
                Since our inception, IRISJE Entreprise has demonstrated consistent growth in 
                terms of client base, project portfolio, and market reach. Our commitment to 
                quality and client satisfaction has enabled us to achieve remarkable growth 
                year over year.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Client Growth</span>
                    <span className="text-brand-orange font-bold">150%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Project Success Rate</span>
                    <span className="text-brand-orange font-bold">96%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Market Expansion</span>
                    <span className="text-brand-orange font-bold">200%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Growth Chart" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Comparison */}
      <section className="py-20 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Industry Benchmark" 
            subtitle="How we compare to industry standards in key performance areas."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="reveal bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Client Retention</h3>
              <div className="text-5xl font-bold text-brand-orange mb-2">96%</div>
              <p className="text-gray-300">Industry average: 70%</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            
            <div className="reveal bg-white/10 p-6 rounded-lg backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4">Project Delivery</h3>
              <div className="text-5xl font-bold text-brand-orange mb-2">98%</div>
              <p className="text-gray-300">On-time delivery rate vs. 75% average</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            
            <div className="reveal bg-white/10 p-6 rounded-lg backdrop-blur-sm" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
              <div className="text-5xl font-bold text-brand-orange mb-2">4.7</div>
              <p className="text-gray-300">Average rating out of 5 vs. 4.1 industry average</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                <div className="bg-brand-orange h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Call to Action */}
      <section className="py-20 bg-brand-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Become Part of Our Success Story?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join the hundreds of businesses that have transformed their operations and achieved remarkable growth with IRISJE Entreprise.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-brand-orange px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact'>
        <ContactSection />
      </section>
      
    </div>
  );
};

export default Statistics;
