
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-all duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {projects.map((project) => (
          <div key={project.id} className="w-full flex-shrink-0">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-blue/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark-blue p-2 rounded-full shadow-md transition-all"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-dark-blue p-2 rounded-full shadow-md transition-all"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-brand-orange' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
