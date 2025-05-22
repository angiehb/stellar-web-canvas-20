
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif text-white">
            Angie Hanna-Bugueiro
          </h1>
          <p className="text-xl lg:text-2xl mb-8 font-light text-gray-300">
            SVP/VP Digital Product & Design Leader
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-300">
            Product leader with deep expertise in building user-centric digital platforms that improve engagement, retention, and business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30" 
              onClick={() => document.getElementById('professional-experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Professional Experience
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30" 
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30" 
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
