import { Mail, Phone, MapPin, Github } from "lucide-react";
import { Card } from "./ui/card";

interface ContactProps {
  t: any;
}

export const Contact = ({ t }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.contact.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 animate-scale-in" />
        <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
          {t.contact.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in-left">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.email}</p>
                <a
                  href="mailto:fetrarison5@gmail.com"
                  className="font-medium hover:text-primary transition-colors"
                >
                  fetrarison5@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in-right">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.phone}</p>
                <a
                  href="tel:0344319587"
                  className="font-medium hover:text-primary transition-colors"
                >
                  034 43 195 87
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.location}</p>
                <p className="font-medium">Nanisana, Madagascar</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.contact.github}</p>
                <a
                  href="https://github.com/fetrarison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  github.com/fetrarison
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
