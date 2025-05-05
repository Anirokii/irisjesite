
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="text-brand-orange text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
