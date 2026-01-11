import { Navigation } from "@/components/layout/Navigation";
import { HeroExpert } from "@/components/sections/HeroExpert";
import { AboutExpert } from "@/components/sections/AboutExpert";
import { ProjectsExpert } from "@/components/sections/ProjectsExpert";
import { ClientResultsExpert } from "@/components/sections/ClientResultsExpert";
import { SkillsExpert } from "@/components/sections/SkillsExpert";
import { ContactExpert } from "@/components/sections/ContactExpert";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <HeroExpert />
        <AboutExpert />
        <SkillsExpert />
        <ProjectsExpert />
        <ClientResultsExpert />
        <ContactExpert />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 René Kuhm. Built with Next.js 15, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Powered by Zero Defect Programming principles.
          </p>
        </div>
      </footer>
    </>
  );
}
