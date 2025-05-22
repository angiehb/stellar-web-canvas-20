
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Briefcase, Lightbulb, Target, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  items: string[];
}

const SkillsSection = () => {
  const skills: Skill[] = [
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
    }
  ];
  
  return (
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
  );
};

export default SkillsSection;
