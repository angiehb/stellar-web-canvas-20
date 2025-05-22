
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large circle */}
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 backdrop-blur-sm"
          style={{ transform: "rotate(-15deg)" }}
        ></div>
        
        {/* Rectangle */}
        <div 
          className="absolute top-1/4 right-10 w-64 h-64 bg-white/3 rounded-lg"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        
        {/* Small circle */}
        <div 
          className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-white/5"
        ></div>
        
        {/* Blurred dot */}
        <div 
          className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full bg-white/10 blur-xl"
        ></div>
        
        {/* Another rectangle */}
        <div 
          className="absolute -bottom-20 right-1/3 w-48 h-48 bg-white/3"
          style={{ transform: "rotate(30deg)" }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 z-10">
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
