import { Card } from "./ui/card";
import { Database, Code, Server } from "lucide-react";

interface SkillsProps {
  t: any;
}

const skills = {
  databases: ["PostgreSQL", "MySQL", "Firebird"],
  frontend: ["HTML5", "JavaScript (ES6+)", "React", "Next.js", "React-Admin"],
  backend: ["Java / Spring Boot", "PHP / Symfony"],
};

export const Skills = ({ t }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.skills.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-scale-in" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Databases */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Database className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6">{t.skills.databases}</h3>
            <ul className="space-y-3">
              {skills.databases.map((skill, index) => (
                <li
                  key={index}
                  className="text-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          {/* Frontend */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6">{t.skills.frontend}</h3>
            <ul className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <li
                  key={index}
                  className="text-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          {/* Backend */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Server className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6">{t.skills.backend}</h3>
            <ul className="space-y-3">
              {skills.backend.map((skill, index) => (
                <li
                  key={index}
                  className="text-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
