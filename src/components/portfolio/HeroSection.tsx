
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
      
      {/* Abstract decorative shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Blob shape 1 */}
        <div 
          className="absolute -top-60 -left-40 w-[500px] h-[500px] opacity-10"
          style={{ 
            background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            transform: 'rotate(15deg)' 
          }}
        ></div>
        
        {/* Organic curve */}
        <div 
          className="absolute top-20 right-0 w-[400px] h-[600px] opacity-5"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%'
          }}
        ></div>
        
        {/* Wavy pattern */}
        <div 
          className="absolute bottom-10 left-1/4 w-[300px] h-[300px] opacity-10"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'
          }}
        ></div>
        
        {/* Nebula-like blob */}
        <div 
          className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-white/5 blur-2xl"
        ></div>
        
        {/* Abstract wing shape */}
        <div 
          className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] opacity-5"
          style={{ 
            background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.1) 0deg, rgba(255,255,255,0) 360deg)',
            borderRadius: '30% 70% 70% 30% / 30% 52% 48% 70%',
            transform: 'rotate(-10deg)'
          }}
        ></div>
        
        {/* Soft light spot */}
        <div
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif text-white">
            Angie Hanna-Bugueiro
          </h1>
          <p className="text-xl lg:text-2xl mb-8 font-light text-gray-400">
            SVP/VP Digital Product & Design Leader
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-400">
            Product leader with deep expertise in building user-centric digital platforms that improve engagement, retention, and business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white/30" 
              onClick={() => document.getElementById('professional-experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Professional Experience
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white/30" 
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white/30" 
              asChild
            >
              <a 
                href="https://www.forbes.com/sites/columbiabusinessschool/2022/03/29/why-the-right-digital-strategy-leads-to-successful-direct-to-consumer-brands/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText size={18} />
                Forbes Publication
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white hover:bg-accent hover:text-accent-foreground border border-white/30" 
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
