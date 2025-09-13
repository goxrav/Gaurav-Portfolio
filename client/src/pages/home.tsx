import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { TimelineSection } from '@/components/timeline-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-space-primary border-t border-space-accent">
        <div className="container mx-auto px-6 text-center">
          <div className="font-orbitron text-lg font-bold mb-2 text-space-highlight">
            Gaurav Mehan
          </div>
          <div className="text-muted-foreground font-spacemono text-sm mb-4">
            Crafting digital experiences across the universe
          </div>
          <div className="text-xs text-muted-foreground">
            © 2024 Gaurav Mehan. All rights reserved. Built with ❤️ and cosmic energy.
          </div>
        </div>
      </footer>
    </div>
  );
}
