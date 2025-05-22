
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

const ExperiencePage = () => {
  const experiences: Experience[] = [
    {
      company: "AHB CONSULTING, LLC",
      title: "Founder, Product & Design",
      period: "2023 – Present",
      location: "New York, NY",
      description: "Providing product and design consulting to both early-stage startups and established businesses. Leading the definition and delivery of new product lines, while advising on and executing strategies for growth, customer research and insights, roadmap prioritization, and go-to-market planning, developing product strategies that align user needs with business goals.",
      achievements: [
        "Founder of an AI-enabled product focused on improving the success rates of start-ups",
        "Established KPIs and led performance tracking that drove actionable insights and product enhancements",
        "Provided product coaching, created product documentation and design oversight to the marketing and ecommerce teams",
        "Assessed and recommended new search vendor to optimize site search experience for users and to achieve business goals",
        "Partnered with engineering to integrate AI into creative processes to increase available content and marketing assets",
        "Defined and delivered a new subscription product with 89% retention and 2.7% conversion rate",
        "Designed and executed a campaign targeting churned customers resulting in a 8.04% reactivation rate",
        "Increased site engagement by 30% with a complete site redesign based on user studies and market insights",
        "Increased social engagement by creating strategic content and delivered marketing strategies to acquire new clients"
      ],
      tags: ["Product Strategy", "User Research", "AI Integration", "Subscription Models", "Design Consulting", "Roadmap Prioritization"]
    },
    {
      company: "WOODSPOON, INC.",
      title: "SVP/Head of Product & Design",
      period: "2021 – 2023",
      location: "New York, NY",
      description: "First product hire for this 2-sided marketplace, Series A food-tech start-up. Hired to provide visionary product and strategy leadership. Ownership over the entire chef and diner experience. Managed a team of 6 including PMs, Designers, and QA.",
      achievements: [
        "Grew and led a team responsible for product development of 4 mobile apps, a transactional website, and internal tools",
        "Led demand-side P&L ownership and growth initiatives, driving revenue and optimizing product-market fit strategies",
        "Drove 78% GMV growth by creating customer-centric product solutions and frictionless experiences",
        "Boosted conversion rates from 3.90% to 5.93% and 2nd order rates from 29.4% to 40.7% quarter over quarter",
        "Delivered strong network effects on the chef (supply) side by creating a roadmap that delivered strong network effects resulting in a near 100% retention of chefs",
        "Introduced a weekly business review process to ensure OKRs were met and KPIs were monitored by all teams",
        "Integrated AI-driven support features to streamline user interactions and improve and scale service efficiency",
        "Explored partnership strategies with DoorDash and CookUnity for marketplace scale and growth"
      ],
      tags: ["Marketplace", "Mobile Apps", "Growth Strategy", "Product Analytics", "Team Leadership", "Series A Startup"]
    },
    {
      company: "FOOD52, INC.",
      title: "VP Product & Design",
      period: "2020 – 2021",
      location: "New York, NY",
      description: "Led, mentored, and grew a team of Product Managers, Product Analysts, and Product Designers to deliver digital products across all business lines including community, media, commerce, retail, advertising, and e-commerce with a multi-million dollar budget.",
      achievements: [
        "Delivered a 9% lift in revenue, 6% increase in PDP views, and 169% increase in AOV through new features and optimizations",
        "Increased team velocity by 300% by reorganizing product, engineering, and design teams into focused squads",
        "Delivered 2.6M additional organic search sessions via SEO improvements & implementing SEO tools",
        "Launched live commerce experiments to engage users in real-time, resulting in a company-wide initiative",
        "Implemented a new product roadmap process that incorporated stakeholder collaboration to gain alignment on prioritization with a focus on speed and agility"
      ],
      tags: ["E-commerce", "Team Leadership", "SEO Optimization", "Live Commerce", "Product Roadmapping", "Media"]
    },
    {
      company: "GLOSSIER, INC.",
      title: "Director, Product Management",
      period: "2019 – 2020",
      location: "New York, NY",
      description: "Led the product vision and strategy to support revenue growth targets and to scale the company's enterprise products by owning customer service experience, retention goals, retail systems, enterprise tools, and product platform.",
      achievements: [
        "Reduced customer service expenses by $10K and increased replacement orders from 19% to 74%",
        "Defined product strategy and roadmaps to onboard new 3PLs and open additional shipping nodes to improve customer delivery times and operational efficiency, improving average order delivery from 4 to 3 days",
        "Owned all point-of-sale and in-store technology feature roadmap development",
        "Led the development of a clienteling experiment to monetize interactions with customer service team",
        "Defined Product Management and Engineering best practices to develop a world-class product team and to efficiently and effectively deliver new features and capabilities while reducing the number of defects"
      ],
      tags: ["Customer Service", "Retail Systems", "Product Strategy", "Enterprise Tools", "Operational Efficiency"]
    },
    {
      company: "GAP, INC.",
      title: "Director, Product Management & Design",
      period: "2014 – 2019",
      location: "New York, NY",
      description: "Head of Product for Gap Inc.'s International Franchise business, leading both B2B and B2B2C product strategies including goal and success criteria definition to grow this $800M business with 400+ locations in 45 countries.",
      achievements: [
        "Led product teams to create and deliver digital B2B SaaS platforms resulting in near 100% adoption and 90% monthly active users achieving a 75% increase in productivity, eventually scaling to all Gap brands internationally and domestically",
        "Achieved growth through an international loyalty program and delivered a mobile app resulting in a 51% customer return visits and an average of 6K new acquisitions monthly",
        "Delivered a fitting room tablet experience designed to grow category sales, resulting in an 85% engagement rate",
        "Developed business cases and financial models to secure project funding",
        "Led product management for performance marketing, content management systems (CMS), customer relationship management (CRM), and data analytics products"
      ],
      tags: ["B2B", "SaaS Platforms", "Loyalty Programs", "International Business", "Mobile Apps", "Financial Modeling"]
    },
    {
      company: "MACYS, INC.",
      title: "Senior Product Manager, E-Commerce & Marketing",
      period: "2011 – 2014",
      location: "New York, NY",
      description: "Directed a group of 15-20 team members to modernize marketing, creative processes, and systems that manage budgets, campaigns, content, metadata, and image rights to support a projected $100M sale increase with an Omnichannel project budget of $20M.",
      achievements: [
        "Defined the driving strategy and roadmap for product photography, increasing purchase confidence and reducing returns by increasing the amount of available product images and silhouettes",
        "Improved studio and photography work in process through a SaaS Photo selection tool saving 70% on process time and achieving a 100% return on investment",
        "Worked with Deloitte and other consulting firms to deliver scalable product solutions"
      ],
      tags: ["E-Commerce", "Marketing", "Omnichannel", "Process Optimization", "Photography", "Content Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:underline mb-2">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 font-serif">Complete Professional Experience</h1>
            <p className="text-lg text-gray-700 mt-2">A comprehensive overview of my career journey and accomplishments.</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="border-l-4 border-primary/70">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-2xl font-serif">{exp.company}</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">
                          {exp.title} | {exp.period} | {exp.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-4 text-gray-700">{exp.description}</p>
                    <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/70 mt-2 mr-2"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-accent/50 border-primary/10 text-primary/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
