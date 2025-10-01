import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageToggle } from "./LanguageToggle";

interface NavbarProps {
  t: any;
  language: "fr" | "en";
  onLanguageToggle: () => void;
}

export const Navbar = ({ t, language, onLanguageToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            FE
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left px-2 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
