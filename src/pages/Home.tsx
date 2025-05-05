
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCarousel from '@/components/ProjectCarousel';
import ContactSection from '@/components/ContactSection';
import { projectsData } from '@/data/mockData';
import { setupRevealAnimations } from '@/utils/reveal';

const Home = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="IRISJE Entreprise" 
        subtitle="Your Partner for Innovative Business Solutions"
      />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Who We Are" 
                subtitle="Your trusted partner for innovative solutions and exceptional service."
              />
              <p className="text-gray-600 mb-6">
                At IRISJE Entreprise, we are dedicated to helping businesses thrive through
                innovative strategies, cutting-edge technology, and expert consultation. Our
                team of professionals brings years of industry experience to deliver solutions
                that drive growth and success.
              </p>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients based on trust,
                transparency, and exceptional results. Whether you're looking to optimize your
                operations, expand your market reach, or transform your digital presence, we
                have the expertise to guide you every step of the way.
              </p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-brand-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal">
              <SectionTitle title="Our Mission" light={true} />
              <p className="text-gray-300">
                To empower businesses with innovative solutions that drive growth, efficiency,
                and competitive advantage in an ever-evolving market landscape. We are committed
                to delivering exceptional value through our expertise, integrity, and client-centered
                approach.
              </p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <SectionTitle title="Our Vision" light={true} />
              <p className="text-gray-300">
                To be the leading provider of transformative business solutions, recognized for
                our innovation, excellence, and the measurable impact we create for our clients.
                We aspire to set new standards in the industry and be the partner of choice for
                businesses seeking sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Key Milestones" 
            subtitle="A showcase of our proudest achievements and landmark projects."
            centered={true}
          />
          <div className="reveal">
            <ProjectCarousel projects={projectsData} />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
