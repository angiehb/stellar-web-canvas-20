
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  focus: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: "MBA",
      institution: "Columbia University",
      location: "New York, NY",
      focus: "Entrepreneurship, Strategic Frameworks, Financial Modeling"
    }, 
    {
      degree: "B.S.",
      institution: "New Jersey Institute of Technology",
      location: "Newark, NJ",
      focus: "Management Information Systems"
    }, 
    {
      degree: "Design Thinking Bootcamp",
      institution: "Stanford d.School",
      location: "Stanford, CA",
      focus: "Human-centered design techniques"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 font-serif">Education & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white border-none hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-3 flex justify-center">
                    <GraduationCap className="h-10 w-10 text-primary/70" />
                  </div>
                  <CardTitle className="text-xl text-center font-serif">{edu.degree}</CardTitle>
                  <CardDescription className="text-center text-base">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-700">
                    <span className="block font-medium">{edu.location}</span>
                    <span className="text-sm text-gray-600 mt-1 block">{edu.focus}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-serif mb-6 text-center">Professional Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="text-lg font-medium">Lecturing</h4>
                <p className="text-gray-700">Columbia Business School | 2023 - Present</p>
                <p className="text-gray-600 text-sm">Guest lecturer on Product Management & Innovation</p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h4 className="text-lg font-medium">Mentorship</h4>
                <p className="text-gray-700">Founders Institute | 2023 - Present</p>
                <p className="text-gray-600 text-sm">Providing product strategy and execution mentorship to start-ups</p>
              </div>
            </div>
            <div className="mt-6 border-l-2 border-primary/20 pl-4">
              <h4 className="text-lg font-medium">Publication</h4>
              <p className="text-gray-700">"Why the Right Digital Strategy Leads To Successful Direct-To-Consumer Brands"</p>
              <p className="text-gray-600 text-sm">Forbes, March 29, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
