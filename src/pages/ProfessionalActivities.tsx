import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Users, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProfessionalActivities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Activities - Angie Hanna-Bugueiro | Product Leadership & Thought Leadership</title>
        <meta 
          name="description" 
          content="Explore Angie Hanna-Bugueiro's thought leadership, publications, guest lectures at Columbia Business School, and mentorship work with Founders Institute. Learn from a seasoned product leader." 
        />
        <meta 
          name="keywords" 
          content="Angie Hanna-Bugueiro, product management, thought leadership, Columbia Business School, Forbes publication, digital strategy, DTC brands, startup mentorship, Founders Institute, product strategy" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Activities - Angie Hanna-Bugueiro" />
        <meta 
          property="og:description" 
          content="Thought leadership, publications, and mentorship from SVP/VP Digital Product & Design Leader Angie Hanna-Bugueiro." 
        />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Activities - Angie Hanna-Bugueiro" />
        <meta 
          name="twitter:description" 
          content="Thought leadership, publications, and mentorship from SVP/VP Digital Product & Design Leader Angie Hanna-Bugueiro." 
        />
        
        {/* Additional SEO */}
        <meta name="author" content="Angie Hanna-Bugueiro" />
        <link rel="canonical" href="https://yoursite.com/professional-activities" />
      </Helmet>
      
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container py-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-serif">Professional Activities</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Thought leadership, mentorship, and contributions to the product management community
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Publications Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold font-serif">Publications</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    <a 
                      href="https://www.forbes.com/sites/columbiabusinessschool/2022/03/29/why-the-right-digital-strategy-leads-to-successful-direct-to-consumer-brands/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      "Why the Right Digital Strategy Leads To Successful Direct-To-Consumer Brands"
                    </a>
                  </CardTitle>
                  <CardDescription className="text-base">Forbes, March 29, 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    An exploration of how digital-first brands can build sustainable competitive advantages through strategic product and technology decisions. This article examines the critical intersection of digital strategy, customer experience, and business outcomes in the DTC landscape.
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://www.forbes.com/sites/columbiabusinessschool/2022/03/29/why-the-right-digital-strategy-leads-to-successful-direct-to-consumer-brands/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    <a 
                      href="https://medium.com/@angiehb/what-i-learned-from-my-year-at-an-early-stage-startup-4fa1568802d6" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      "What I Learned From My Year at an Early-Stage Startup"
                    </a>
                  </CardTitle>
                  <CardDescription className="text-base">Medium</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Key lessons and insights from navigating the challenges and opportunities of working at an early-stage startup, exploring the unique dynamics of building products in a fast-paced, resource-constrained environment.
                  </p>
                  <Button asChild variant="outline">
                    <a 
                      href="https://medium.com/@angiehb/what-i-learned-from-my-year-at-an-early-stage-startup-4fa1568802d6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Lecturing Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold font-serif">Lecturing</h2>
            </div>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Columbia Business School</CardTitle>
                <CardDescription className="text-base">Guest Lecturer | 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Guest lecturer on Product Management & Innovation, sharing real-world insights and case studies from building digital products at scale across various industries including retail, food-tech, and beauty.
                </p>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Topics Covered:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Product strategy and roadmap prioritization</li>
                    <li>• User research and customer insights</li>
                    <li>• Building and scaling digital platforms</li>
                    <li>• Marketplace dynamics and growth strategies</li>
                    <li>• Innovation in retail and e-commerce</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Mentorship Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold font-serif">Mentorship</h2>
            </div>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Founders Institute</CardTitle>
                <CardDescription className="text-base">Product Strategy Mentor | 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Providing product strategy and execution mentorship to early-stage startups, helping founders navigate product-market fit, build scalable platforms, and create customer-centric roadmaps.
                </p>
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mentorship Focus Areas:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Product-market fit validation</li>
                    <li>• User research and customer discovery</li>
                    <li>• MVP definition and prioritization</li>
                    <li>• Growth strategy and metrics</li>
                    <li>• Building product teams and processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProfessionalActivities;
