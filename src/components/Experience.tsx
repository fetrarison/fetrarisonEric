import { Card } from "./ui/card";
import { GraduationCap, Calendar, ExternalLink } from "lucide-react";
import projectLotus from "@/assets/project-lotus.jpg";
import projectTapakila from "@/assets/project-tapakila.jpg";
import projectGarage from "@/assets/project-garage.jpg";
import projectFootball from "@/assets/project-football.jpg";
import projectArc from "@/assets/project-arc.jpg";

interface ExperienceProps {
  t: any;
}

const projectImages = [
  projectLotus,
  projectTapakila,
  projectGarage,
  projectFootball,
  projectArc,
];

export const Experience = ({ t }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.experience.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-scale-in" />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.experience.experiences.map((exp: any, index: number) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary/50">
                <img
                  src={projectImages[index]}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ExternalLink className="h-12 w-12 text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Bottom gradient line */}
              <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            {t.education.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-left group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-primary mb-2">{t.education.degree}</h4>
                  <p className="text-muted-foreground">{t.education.school}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-right group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-primary mb-2">{t.education.bac}</h4>
                  <p className="text-muted-foreground">{t.education.highschool}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
