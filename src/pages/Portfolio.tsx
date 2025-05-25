import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  images: string[];
}

const projectCases: ProjectCase[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    company: "Gap Inc.",
    period: "2014-2019",
    tags: ["B2B SaaS", "Product Management", "International Business"],
    problem: "Gap Inc.'s $800M International Franchise business with 400+ locations across 45 countries lacked digital infrastructure to support franchisees effectively. Manual processes were limiting productivity and growth potential for this critical business segment.",
    solution: "Led cross-functional product teams to design and deliver comprehensive B2B SaaS platforms specifically for international franchise operations. Developed user-centric solutions addressing franchisee workflow pain points, scalability requirements, and multi-market needs across all Gap brands.",
    impact: [
      "Achieved near 100% platform adoption across all franchise locations",
      "Maintained 90% monthly active users consistently",
      "Delivered 75% increase in franchisee productivity",
      "Successfully scaled platform to all Gap brands internationally and domestically from hundreds of users to thousands",
      "Supported $800M business growth across 45 countries"
    ],
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2712"]
  },
  {
    id: "marketplace-optimization",
    title: "Marketplace Growth Strategy",
    company: "WoodSpoon",
    period: "2021-2022",
    tags: ["Marketplace", "Growth", "Analytics"],
    problem: "After securing a $14M Series A round of funding, this 2-sided food-tech marketplace was struggling to retain customers. Analysis showed that while Chef (supply side) retention was near 100%, only 29.4% of Diners (demand side) were placing second orders. Customer acquisition costs were extremely high signaling a product-market fit issue.",
    solution: "Conducted deep user behavior and customer insights research and analysis to understand why customers were not converting and/or not returning. Defined a customer-centric roadmap that prioritized articulating value and uniqueness of the product while removing user friction. Worked with marketing to improve messaging and targeting.",
    impact: [
      "Improved 2nd order rates from 29.4% to 40.7%",
      "Achieved 78% GMV growth year-over-year",
      "Boosted conversion rates from 3.90% to 5.93%"
    ],
    images: ["/lovable-uploads/9691595a-5744-4475-812d-d6f435e09fae.png"]
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
    images: ["/lovable-uploads/572e7860-20e4-4229-a8f8-eeca327e8932.png", "/lovable-uploads/8cb9a976-14d7-49bb-8b8d-04d1382f3e9b.png"]
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
                <div className="relative w-full min-h-[400px] rounded-lg overflow-hidden bg-muted flex items-start justify-center">
                  {project.images.length === 1 ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  ) : (
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index} className="flex items-start justify-center">
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${index + 1}`}
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  )}
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
