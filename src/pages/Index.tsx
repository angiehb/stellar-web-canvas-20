
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download, Send, BarChart, Users, Lightbulb, Target, Briefcase, GraduationCap } from "lucide-react";
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
    { 
      name: "Product Leadership", 
      icon: Briefcase, 
      items: ["Product Lifecycle Management", "Data-driven Roadmapping", "A/B Testing & Experimentation"] 
    },
    { 
      name: "Digital Experience", 
      icon: Target, 
      items: ["UX/UI Optimization", "User Empathy", "Full Funnel Optimization"] 
    },
    { 
      name: "Strategic Growth", 
      icon: BarChart, 
      items: ["Digital Transformation", "Market & Customer Research", "Personalization"] 
    },
    { 
      name: "Team Leadership", 
      icon: Users, 
      items: ["Cross-Functional Collaboration", "Stakeholder Communication", "Team Coaching"] 
    },
  ];

  const projects = [
    {
      title: "AHB Consulting",
      role: "Founder, Product & Design",
      period: "2023 - Present",
      description: "Providing product and design consulting to both early-stage startups and established businesses. Leading definition and delivery of new product lines, while advising on and executing strategies for growth.",
      achievements: [
        "Defined and delivered a subscription product with 89% retention and 2.7% conversion rate",
        "Increased site engagement by 30% with a complete site redesign based on user studies",
        "Established KPIs and led performance tracking that drove actionable insights"
      ],
      tags: ["Product Strategy", "User Research", "AI Integration", "Subscription Models"]
    },
    {
      title: "WoodSpoon, Inc.",
      role: "SVP/Head of Product & Design",
      period: "2021 - 2023",
      description: "First product hire for a Series A food-tech startup, providing visionary product and strategy leadership for a two-sided marketplace. Led a team of 6 with ownership over chef and diner experiences.",
      achievements: [
        "Boosted conversion rates from 3.90% to 5.93% and 2nd order rates from 29.4% to 40.7%",
        "Drove 78% GMV growth by creating customer-centric product solutions",
        "Integrated AI-driven support features to streamline user interactions"
      ],
      tags: ["Marketplace", "Mobile Apps", "Growth Strategy", "Product Analytics"]
    },
    {
      title: "Food52, Inc.",
      role: "VP Product & Design",
      period: "2020 - 2021",
      description: "Led, mentored, and grew a team of Product Managers, Product Analysts, and Product Designers to deliver digital products across community, media, commerce, retail, advertising, and e-commerce with a multi-million dollar budget.",
      achievements: [
        "Delivered a 9% lift in revenue, 6% increase in PDP views, and 169% increase in AOV",
        "Increased team velocity by 300% by reorganizing product, engineering, and design teams",
        "Delivered 2.6M additional organic search sessions via SEO improvements"
      ],
      tags: ["E-commerce", "Team Leadership", "SEO Optimization", "Live Commerce"]
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

  const education = [
    {
      degree: "MBA",
      institution: "Columbia University",
      location: "New York, NY",
      focus: "Entrepreneurship, Strategic Frameworks, Financial Modeling"
    },
    {
      degree: "B.S.",
      institution: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      focus: "Management Information Systems"
    },
    {
      degree: "Design Thinking Bootcamp",
      institution: "Stanford d.School",
      location: "Stanford, CA",
      focus: "Human-centered design techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=1974')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif">
              Angie Hanna-Bugueiro
            </h1>
            <p className="text-xl lg:text-2xl mb-8 font-light">
              SVP/VP Digital Product & Design Leader
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Product leader with deep expertise in building user-centric digital platforms that improve engagement, retention, and business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Professional woman"
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover h-96"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With experience across early-stage startups, scaled companies, and international environments, I bring both startup grit and enterprise discipline to digital product leadership. I specialize in creating user-centric digital platforms that deliver tangible business results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My approach combines data-informed decision-making, user empathy, and cross-functional collaboration to deliver digital experiences that improve engagement, retention, and conversion.
                </p>
                <div className="flex flex-wrap gap-3 pt-3">
                  <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">B2C & D2C Experience</Badge>
                  <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">P&L Ownership</Badge>
                  <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">International Business</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">Core Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-none">
                  <CardHeader className="pb-4 text-center">
                    <div className="bg-primary/5 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary/70 mt-2 mr-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">Professional Experience</h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="border-l-4 border-primary/70">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                          <CardDescription className="text-base font-medium mt-1">{project.role} | {project.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="mb-4 text-gray-700">{project.description}</p>
                      <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mt-2 mr-2"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="bg-accent/50 border-primary/10 text-primary/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                  View More Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">Education & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex justify-center">
                      <GraduationCap className="h-10 w-10 text-primary/70" />
                    </div>
                    <CardTitle className="text-xl text-center font-serif">{edu.degree}</CardTitle>
                    <CardDescription className="text-center text-base">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-700">
                      <span className="block font-medium">{edu.location}</span>
                      <span className="text-sm text-gray-600 mt-1 block">{edu.focus}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-serif mb-6 text-center">Professional Activities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="text-lg font-medium">Lecturing</h4>
                  <p className="text-gray-700">Columbia Business School | 2023 - Present</p>
                  <p className="text-gray-600 text-sm">Guest lecturer on Product Management & Innovation</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="text-lg font-medium">Mentorship</h4>
                  <p className="text-gray-700">Founders Institute | 2023 - Present</p>
                  <p className="text-gray-600 text-sm">Providing product strategy and execution mentorship to start-ups</p>
                </div>
              </div>
              <div className="mt-6 border-l-2 border-primary/20 pl-4">
                <h4 className="text-lg font-medium">Publication</h4>
                <p className="text-gray-700">"Why the Right Digital Strategy Leads To Successful Direct-To-Consumer Brands"</p>
                <p className="text-gray-600 text-sm">Forbes, March 29, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
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
                    <Mail className="h-6 w-6 text-accent" />
                    <span>angiehb@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent" />
                    <span>973.280-3665</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <span>New Jersey</span>
                  </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Angie Hanna-Bugueiro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
