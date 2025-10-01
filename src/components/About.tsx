import { MapPin, Languages, Heart } from "lucide-react";
import { Card } from "./ui/card";

interface AboutProps {
  t: any;
}

export const About = ({ t }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          {t.about.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 animate-scale-in" />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </Card>

          <div className="space-y-6 animate-fade-in-right">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.about.location}</h3>
                  <p className="text-muted-foreground">Nanisana, Madagascar</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{t.about.languages}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t.about.malagasy}</li>
                    <li>• {t.about.french}</li>
                    <li>• {t.about.english}</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{t.about.interests}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• {t.about.basketball}</li>
                    <li>• {t.about.gaming}</li>
                    <li>• {t.about.mechanics}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
