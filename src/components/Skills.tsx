import { Card } from "./ui/card";
import { Database, Code, Server, Check } from "lucide-react";
import { useState } from "react";

interface SkillsProps {
  t: any;
}

const skillsData = {
  databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "Firebird", level: 75 },
  ],
  frontend: [
    { name: "HTML5", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React-Admin", level: 80 },
  ],
  backend: [
    { name: "Java / Spring Boot", level: 90 },
    { name: "PHP / Symfony", level: 85 },
  ],
};

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-sm font-semibold text-primary">
          {isHovered ? `${level}%` : ""}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-fade-in"
          style={{
            width: `${level}%`,
            animationDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export const Skills = ({ t }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.skills.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-scale-in" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Databases */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] group animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Database className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8 group-hover:text-primary transition-colors">
              {t.skills.databases}
            </h3>
            
            <div className="space-y-6">
              {skillsData.databases.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100}
                />
              ))}
            </div>

            {/* Tech badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {skillsData.databases.map((skill) => (
                <div
                  key={skill.name}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  <Check className="inline h-3 w-3 mr-1" />
                  {skill.name.split(" ")[0]}
                </div>
              ))}
            </div>
          </Card>

          {/* Frontend */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] group animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Code className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8 group-hover:text-primary transition-colors">
              {t.skills.frontend}
            </h3>
            
            <div className="space-y-6">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100 + 100}
                />
              ))}
            </div>

            {/* Tech badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {["HTML5", "React", "Next.js"].map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  <Check className="inline h-3 w-3 mr-1" />
                  {tech}
                </div>
              ))}
            </div>
          </Card>

          {/* Backend */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Server className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-8 group-hover:text-primary transition-colors">
              {t.skills.backend}
            </h3>
            
            <div className="space-y-6">
              {skillsData.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 100 + 200}
                />
              ))}
            </div>

            {/* Tech badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              {["Spring", "Symfony", "Java", "PHP"].map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  <Check className="inline h-3 w-3 mr-1" />
                  {tech}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-sm text-muted-foreground">Databases</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-sm text-muted-foreground">Frontend</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-sm text-muted-foreground">Backend</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
