
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false 
}: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-brand-dark-blue'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'bg-white' : 'bg-brand-orange'}`}></div>
    </div>
  );
};

export default SectionTitle;
