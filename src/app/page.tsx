import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { ClientResults } from "@/components/sections/ClientResults";
import { Skills } from "@/components/sections/Skills";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <ClientResults />
        <Skills />
        <Pricing />
        <Contact />
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
