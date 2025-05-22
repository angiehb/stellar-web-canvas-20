
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img alt="Professional woman" src="/lovable-uploads/fdc9f316-7d94-40c6-9095-e40932bad95c.jpg" className="rounded-2xl shadow-xl w-full max-w-md mx-auto h-96 object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With experience across early-stage startups, scaled companies, and international environments, I bring both startup grit and enterprise discipline to digital product leadership. I specialize in creating user-centric digital platforms that deliver tangible business results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach combines data-informed decision-making, user empathy, and cross-functional collaboration to deliver digital experiences that improve engagement, retention, and conversion.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">B2C & D2C Experience</Badge>
                <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">P&L Ownership</Badge>
                <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-accent text-primary">International Business</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
