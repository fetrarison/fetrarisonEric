import { ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

interface HeroProps {
  t: any;
}

export const Hero = ({ t }: HeroProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text content */}
        <div className="space-y-6 animate-fade-in-left">
          <p className="text-muted-foreground text-lg">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              FETRARISON ERIC
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            {t.hero.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all duration-300"
              onClick={() => scrollToSection("experience")}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              {t.hero.contact}
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/fetrarison"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:fetrarison5@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <img
              src={profileImage}
              alt="FETRARISON ERIC"
              className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
