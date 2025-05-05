
import { useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ContactSection from '@/components/ContactSection';
import { itServicesData, marketingServicesData, hrServicesData } from '@/data/mockData';
import { setupRevealAnimations } from '@/utils/reveal';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-dark-blue to-brand-dark-blue/90 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Our Expertise
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            Comprehensive business solutions designed to empower your organization at every stage of growth.
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-8"></div>
        </div>
      </section>
      
      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="IT Services" 
                className="rounded-lg shadow-xl w-full h-auto object-cover reveal" 
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="lg:col-span-7 reveal" style={{ animationDelay: '0.2s' }}>
              <SectionTitle 
                title="IT Services" 
                subtitle="Cutting-edge technology solutions to drive your digital transformation."
              />
              <p className="text-gray-600 mb-6">
                Our IT department delivers comprehensive technology solutions that help businesses streamline operations, 
                enhance security, and leverage the latest innovations. From custom software development to complete 
                infrastructure management, our team of experts will help you navigate the digital landscape with confidence.
              </p>
            </div>
          </div>
          
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 order-2 lg:order-1 reveal" style={{ animationDelay: '0.2s' }}>
              <SectionTitle 
                title="Marketing Services" 
                subtitle="Strategic marketing solutions to boost your brand presence and drive growth."
              />
              <p className="text-gray-600 mb-6">
                Our marketing experts help businesses build strong brands, reach target audiences, and achieve sustainable growth. 
                We combine data-driven insights with creative strategies to deliver campaigns that resonate with your audience 
                and generate measurable results across digital and traditional channels.
              </p>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Marketing Services" 
                className="rounded-lg shadow-xl w-full h-auto object-cover reveal" 
                style={{ animationDelay: '0.1s' }}
              />
            </div>
          </div>
          
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="HR Services" 
                className="rounded-lg shadow-xl w-full h-auto object-cover reveal" 
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="lg:col-span-7 reveal" style={{ animationDelay: '0.2s' }}>
              <SectionTitle 
                title="HR Services" 
                subtitle="Comprehensive human resource solutions to optimize your talent management."
              />
              <p className="text-gray-600 mb-6">
                Our HR services help organizations attract, develop, and retain top talent. From recruitment and 
                onboarding to performance management and succession planning, we provide strategic support to 
                build strong teams and cultivate positive workplace cultures that drive business success.
              </p>
            </div>
          </div>
          
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
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IRISJE Entreprise</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto mt-4 mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine industry expertise, innovative thinking, and personalized service 
              to deliver solutions that drive real business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-0 hover:bg-white/15 transition-colors reveal" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl text-brand-orange mb-6">🏆</div>
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <p className="text-gray-300">
                  Our team brings years of specialized experience across industries and disciplines.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-0 hover:bg-white/15 transition-colors reveal" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl text-brand-orange mb-6">💡</div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We stay at the forefront of industry trends to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-0 hover:bg-white/15 transition-colors reveal" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl text-brand-orange mb-6">🤝</div>
                <h3 className="text-xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-300">
                  We work alongside you as partners committed to your long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Services;
