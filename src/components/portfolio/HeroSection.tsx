
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=1974')] bg-cover bg-center opacity-10"></div>
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
            <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary" onClick={() => document.getElementById('professional-experience')?.scrollIntoView({ behavior: 'smooth' })}>
              Professional Experience
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border border-white" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
