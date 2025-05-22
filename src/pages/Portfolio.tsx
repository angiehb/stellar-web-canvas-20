
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCase {
  id: string;
  title: string;
  company: string;
  period: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  imageUrl: string;
}

const projectCases: ProjectCase[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Initiative",
    company: "Enterprise Financial Services",
    period: "2022-2023",
    tags: ["Digital Strategy", "UX Design", "Product Management"],
    problem: "The client's legacy financial platform was experiencing high bounce rates (68%) and low conversion (1.2%). Customer feedback indicated frustration with complex workflows and outdated UI, directly impacting revenue.",
    solution: "Led end-to-end redesign of the customer journey with a focus on simplification. Implemented a modular design system, reduced steps to complete key tasks by 40%, and introduced personalized dashboards based on user research.",
    impact: [
      "Reduced bounce rate from 68% to 29%",
      "Increased conversion rate by 145%",
      "Improved customer satisfaction score from 3.2/5 to 4.6/5",
      "Decreased support tickets by 37%"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2712"
  },
  {
    id: "marketplace-optimization",
    title: "Marketplace Growth Strategy",
    company: "WoodSpoon",
    period: "2021-2022",
    tags: ["Marketplace", "Growth", "Analytics"],
    problem: "The food delivery marketplace was struggling with chef retention and low re-order rates. Analysis showed 40% of chefs churned within 3 months, and only 29.4% of customers placed a second order.",
    solution: "Designed and implemented a comprehensive chef success program with better onboarding tools, performance analytics dashboard, and simplified menu management. For customers, introduced personalized recommendations and loyalty features.",
    impact: [
      "Increased chef retention by 65%",
      "Improved 2nd order rates from 29.4% to 40.7%",
      "Achieved 78% GMV growth year-over-year",
      "Expanded marketplace to 3 new cities with optimized model"
    ],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2584"
  },
  {
    id: "subscription-model",
    title: "Subscription Product Launch",
    company: "AHB Consulting",
    period: "2023-Present",
    tags: ["Subscription Model", "Product Strategy", "Retention"],
    problem: "Client needed to transform their one-time purchase business model to a recurring revenue stream. Market research indicated willingness to pay for premium features, but uncertainty about execution strategy.",
    solution: "Led cross-functional team to define tiered subscription model with clear value proposition at each level. Designed seamless upgrade paths, implemented cohort analysis framework, and created engagement-triggered retention campaigns.",
    impact: [
      "Achieved 89% retention rate after 6 months",
      "2.7% conversion rate from free to paid (industry average: 1.5%)",
      "Increased customer lifetime value by 230%",
      "Established predictable revenue forecasting model"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1728"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container py-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-serif">Project Portfolio</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Selected case studies highlighting problems solved, solutions implemented, and measurable results delivered
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="container py-12">
        <Tabs defaultValue={projectCases[0].id} className="w-full">
          <TabsList className="mb-8 flex flex-wrap h-auto gap-2 bg-transparent">
            {projectCases.map((project) => (
              <TabsTrigger 
                key={project.id} 
                value={project.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectCases.map((project) => (
            <TabsContent key={project.id} value={project.id} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {project.company} | {project.period}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 my-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-accent/50 border-primary/10 text-primary/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">The Problem</h3>
                        <p className="text-muted-foreground">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-2">The Solution</h3>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-2">Measurable Impact</h3>
                        <ul className="space-y-2">
                          {project.impact.map((item, index) => (
                            <li key={index} className="flex items-start text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mt-2 mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
