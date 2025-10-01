import { Globe } from "lucide-react";
import { Button } from "./ui/button";

interface LanguageToggleProps {
  language: "fr" | "en";
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="gap-2 text-foreground hover:text-primary transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
};
