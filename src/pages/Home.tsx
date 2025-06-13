
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
        title="IRIS Junior Entreprise" 
        subtitle="To The Next Level"
      />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <SectionTitle 
                title="Who Are We ?" 
                subtitle="We Don’t Just Grow Businesses, We Take Them to the Next Level"
              />
              <p className="text-gray-600 mb-6">
              At IRIS Junior Entreprise, we specialize in digital marketing, branding, web and app development,
              and business consulting tailored to help start-ups and business owners grow with confidence.
              </p>
              <p className="text-gray-600">
              What sets us apart is our unwavering commitment to your values, identity, and satisfaction.
              Whether you're launching a brand or scaling your business, we bring a strategic blend of innovation,
              resourcefulness, inspiration, and precision to every project. 
              We don’t just deliver services—we build solutions that reflect who you are and where you want to go.

              </p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <img 
                src="src\images\who.png"
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
              At IRIS Junior Entreprise, our mission is to empower entrepreneurs and business leaders
              by delivering tailored digital marketing, development, and business consulting solutions
              that reflect their unique identity and drive measurable results. We aim to transform ideas 
              into impactful strategies through innovation, creativity, and a deep understanding of our 
              clients’ values and goals. Every project we take on is guided by a commitment to excellence, 
              strategic thinking, and client satisfaction.
              </p>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <SectionTitle title="Our Vision" light={true} />
              <p className="text-gray-300">
                We envision a future where every ambitious brand—no matter its size—has access to high-quality,
                 strategic support that propels it to the next level. At IRIS Junior Entreprise, 
                 we strive to become a trusted reference in digital transformation and business development, 
                 known for our ability to inspire growth, spark innovation, and deliver lasting impact 
                 through smart, value-driven solutions.

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
      <section id='contact'>
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
