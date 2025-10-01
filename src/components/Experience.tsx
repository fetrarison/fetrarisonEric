import { Card } from "./ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

interface ExperienceProps {
  t: any;
}

export const Experience = ({ t }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.experience.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-scale-in" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              {t.experience.title}
            </h3>
            {t.experience.experiences.map((exp: any, index: number) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg text-primary">{exp.title}</h4>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              {t.education.title}
            </h3>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-right">
              <h4 className="font-semibold text-lg text-primary mb-2">{t.education.degree}</h4>
              <p className="text-muted-foreground mb-4">{t.education.school}</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold text-lg text-primary mb-2">{t.education.bac}</h4>
              <p className="text-muted-foreground mb-4">{t.education.highschool}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
