
import { useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ContactSection from '@/components/ContactSection';
import { itServicesData, marketingServicesData, hrServicesData } from '@/data/mockData';
import { setupRevealAnimations } from '@/utils/reveal';

const Services = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-brand-dark-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive solutions designed to empower your business at every stage of growth.
          </p>
        </div>
      </section>
      
      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="IT Services" 
            subtitle="Cutting-edge technology solutions to drive your digital transformation."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServicesData.map((service, index) => (
              <div key={service.id} className="reveal" style={{ animationDelay: `${0.1 * index}s` }}>
                <ServiceCard
                  icon={<span className="text-4xl">{service.icon}</span>}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Marketing Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Marketing Services" 
            subtitle="Strategic marketing solutions to boost your brand presence and drive growth."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServicesData.map((service, index) => (
              <div key={service.id} className="reveal" style={{ animationDelay: `${0.1 * index}s` }}>
                <ServiceCard
                  icon={<span className="text-4xl">{service.icon}</span>}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* HR Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="HR Services" 
            subtitle="Comprehensive human resource solutions to optimize your talent management."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrServicesData.map((service, index) => (
              <div key={service.id} className="reveal" style={{ animationDelay: `${0.1 * index}s` }}>
                <ServiceCard
                  icon={<span className="text-4xl">{service.icon}</span>}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonial Section (could be added here) */}
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Services;
