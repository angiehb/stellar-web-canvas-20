
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/fdc9f316-7d94-40c6-9095-e40932bad95c.jpg')] bg-cover bg-center opacity-10"></div>
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
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white" 
              onClick={() => document.getElementById('professional-experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Professional Experience
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white" 
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white" 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
