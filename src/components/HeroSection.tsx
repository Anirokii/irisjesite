
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={scrollToAbout}
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark-blue transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-80" onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
