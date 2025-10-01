import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { translations } from "@/data/translations";

const Index = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar t={t} language={language} onLanguageToggle={toggleLanguage} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Contact t={t} />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 FETRARISON ERIC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
