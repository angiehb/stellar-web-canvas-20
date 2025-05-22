
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Palette, Smartphone, Database, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
    { name: "Backend Development", icon: Database, level: 75 }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React", "TypeScript", "Socket.io", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with data visualization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "Chart.js", "API Integration", "CSS"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              John Smith
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Full-Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg mb-10 text-blue-50 max-w-2xl mx-auto">
              Crafting digital experiences that combine beautiful design with powerful functionality. 
              I bring ideas to life through code and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Profile"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 5 years of experience in web development, I specialize in creating 
                  intuitive and engaging digital experiences. My passion lies in the intersection 
                  of design and technology.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I believe in writing clean, maintainable code and designing user interfaces 
                  that not only look great but also provide exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-3 py-1">5+ Years Experience</Badge>
                  <Badge variant="secondary" className="px-3 py-1">50+ Projects Completed</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Remote Friendly</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <skill.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
                  <p className="text-blue-100 mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Let's discuss how we can bring your ideas to life.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-300" />
                    <span>john.smith@email.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-300" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-300" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
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
                    <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 John Smith. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
