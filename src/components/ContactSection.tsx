
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    // In a real scenario, this would send data to the server
    console.log('Form data submitted:', data);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-2">Get in Touch</h2>
              <div className="w-20 h-1 bg-brand-orange mb-6"></div>
              <p className="text-gray-600 mb-8">
                Ready to take your business to the next level? Contact IRIS Junior Entreprise for expert support. 
                Let’s turn your vision into action—reach out today to start building smarter, stronger strategies for your growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-brand-light-blue/10 p-4 rounded-full group-hover:bg-brand-light-blue/20 transition-colors">
                    <MapPin className="text-brand-light-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">Address</h4>
                    <p className="text-gray-600">Soukra km4 3052 - Sfax - Tunisia</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-brand-light-blue/10 p-4 rounded-full group-hover:bg-brand-light-blue/20 transition-colors">
                    <Phone className="text-brand-light-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">Phone</h4>
                    <p className="text-gray-600">+(216) 50 445 369</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-brand-light-blue/10 p-4 rounded-full group-hover:bg-brand-light-blue/20 transition-colors">
                    <Mail className="text-brand-light-blue h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">Email</h4>
                    <p className="text-gray-600">contact.irisje@gmail.com</p>
                  </div>
                </div>
              </div>
            
              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1710782579275!2d10.715168875547315!3d34.72608187291064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002ca4425ed6a1%3A0x1cb1842d2707fe25!2s%C3%89cole%20Nationale%20d&#39;Ing%C3%A9nieurs%20de%20Sfax%20-%20ENIS!5e0!3m2!1sfr!2stn!4v1746494120262!5m2!1sfr!2stn"
                  className="w-full h-[300px] border-0"
                      loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
            
            <div>
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-brand-dark-blue text-white">
                  <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                {...field} 
                                className="focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="How can we help you?" 
                                {...field} 
                                className="focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                {...field} 
                                rows={5}
                                className="resize-none focus:ring-2 focus:ring-brand-light-blue/50 focus:border-brand-light-blue"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full mt-2 bg-gradient-to-r from-brand-dark-blue to-brand-light-blue hover:from-brand-dark-blue/90 hover:to-brand-light-blue/90 text-white transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
