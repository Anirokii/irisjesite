
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real scenario, this would send data to the server
    console.log('Form data submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions or want to discuss how we can help your business? 
              Reach out to us through any of the following channels:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light-blue/10 p-3 rounded-full">
                  <MapPin className="text-brand-light-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Business Street, City, Country</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light-blue/10 p-3 rounded-full">
                  <Phone className="text-brand-light-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-light-blue/10 p-3 rounded-full">
                  <Mail className="text-brand-light-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">info@irisje-entreprise.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-brand-dark-blue mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-dark-blue hover:bg-brand-dark-blue/90 text-white transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
