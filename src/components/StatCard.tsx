
import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, suffix = '', delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now() + delay;
    
    const timer = setInterval(() => {
      const now = Date.now();
      if (now < startTime) return;
      
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      start = Math.floor(progress * end);
      setCount(start);
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={cardRef} 
      className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="text-brand-orange text-4xl mb-4">{icon}</div>
      <div className="flex items-center justify-center">
        <span className="text-4xl font-bold text-brand-dark-blue">
          {count}
        </span>
        <span className="text-4xl font-bold text-brand-dark-blue">{suffix}</span>
      </div>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

export default StatCard;
