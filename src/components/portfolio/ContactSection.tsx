import { useState } from "react";
import { Linkedin, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-section" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif mb-6">Let's Connect</h3>
                <p className="text-primary-foreground/80 mb-8">
                  I'm always interested in new opportunities and connections. Let's discuss how my product leadership experience can help drive your business goals.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-accent" />
                  <a href="https://linkedin.com/in/angiehbugueiro" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/angiehbugueiro
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white font-serif">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70" 
                    required 
                  />
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70" 
                    required 
                  />
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    rows={4} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70" 
                    required 
                  />
                  <Button type="submit" className="w-full bg-white text-primary hover:bg-accent hover:text-primary">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
