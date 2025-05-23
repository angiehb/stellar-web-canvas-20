
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  logoUrl: string;
  logoAlt: string;
}

const ExperienceSection = () => {
  const projects: Project[] = [
    {
      title: "AHB Consulting",
      role: "Founder, Product & Design",
      period: "2023 - Present",
      description: "Providing product and design consulting to both early-stage startups and established businesses. Leading definition and delivery of new product lines, while advising on and executing strategies for growth.",
      achievements: ["Defined and delivered a subscription product with 89% retention and 2.7% conversion rate", "Increased site engagement by 30% with a complete site redesign based on user studies", "Established KPIs and led performance tracking that drove actionable insights"],
      tags: ["Product Strategy", "User Research", "AI Integration", "Subscription Models"],
      logoUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      logoAlt: "AHB Consulting Logo"
    }, 
    {
      title: "WoodSpoon, Inc.",
      role: "SVP/Head of Product & Design",
      period: "2021 - 2023",
      description: "First product hire for a Series A food-tech startup, providing visionary product and strategy leadership for a two-sided marketplace. Led a team of 6 with ownership over chef and diner experiences.",
      achievements: ["Boosted conversion rates from 3.90% to 5.93% and 2nd order rates from 29.4% to 40.7%", "Drove 78% GMV growth by creating customer-centric product solutions", "Integrated AI-driven support features to streamline user interactions"],
      tags: ["Marketplace", "Mobile Apps", "Growth Strategy", "Product Analytics", "P&L Ownership"],
      logoUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&crop=center",
      logoAlt: "WoodSpoon Logo"
    }, 
    {
      title: "Food52, Inc.",
      role: "VP Product & Design",
      period: "2020 - 2021",
      description: "Led, mentored, and grew a team of Product Managers, Product Analysts, and Product Designers to deliver digital products across community, media, commerce, retail, advertising, and e-commerce with a multi-million dollar budget.",
      achievements: ["Delivered a 9% lift in revenue, 6% increase in PDP views, and 169% increase in AOV", "Increased team velocity by 300% by reorganizing product, engineering, and design teams", "Delivered 2.6M additional organic search sessions via SEO improvements"],
      tags: ["E-commerce", "Team Leadership", "SEO Optimization", "Live Commerce"],
      logoUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop&crop=center",
      logoAlt: "Food52 Logo"
    }
  ];

  return (
    <section id="professional-experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">Professional Experience</h2>
          <div className="space-y-12">
            {projects.map((project, index) => {
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="border-l-4 border-primary/70">
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <CardTitle className="text-2xl font-serif flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={project.logoUrl} alt={project.logoAlt} />
                              <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">
                                {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            {project.title}
                          </CardTitle>
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
              );
            })}
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5" asChild>
                <Link to="/experience">View More Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
