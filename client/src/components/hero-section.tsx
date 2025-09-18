import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTypingEffect } from '@/hooks/use-typing-effect';
import { ThreeScene } from './three-scene';
import { Reveal } from './reveal';
import profileImg from '../assets/1000196847[1].jpg';
import resumePdf from '../assets/GauravMehanResume (1).pdf';

export function HeroSection() {
  const roles = ["Software Developer", "Web Developer"];
  const currentRole = useTypingEffect(roles);

  const handleDownloadResume = () => {
    // In a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center stars-bg relative overflow-hidden">
      <ThreeScene />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-6">
              <Reveal delayMs={100}>
                <div className="text-space-highlight font-spacemono text-lg">
                  
                </div>
              </Reveal>
              <Reveal delayMs={200}>
                <h1 className="font-orbitron text-5xl lg:text-7xl font-bold text-white">
                  Gaurav Mehan
                </h1>
              </Reveal>
              <Reveal delayMs={300}>
                <div className="text-2xl lg:text-3xl text-muted-foreground">
                  <span className="typing-cursor" data-testid="typing-text">
                    {currentRole}
                  </span>
                </div>
              </Reveal>
              <Reveal delayMs={400}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  I craft digital experiences that push the boundaries of web technology. 
                  Passionate about creating immersive, performant applications that solve real-world problems.
                </p>
              </Reveal>
              <Reveal delayMs={500}>
                <div className="flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={handleDownloadResume}
                    className="bg-space-highlight text-space-primary px-8 py-3 rounded-lg font-semibold hover:bg-space-highlight/90 transition-all duration-300 glow-effect"
                    data-testid="button-download-resume"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download Resume
                  </button>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/goxrav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-space-secondary border border-space-accent rounded-full flex items-center justify-center hover:border-space-highlight hover:text-space-highlight transition-all duration-300"
                      data-testid="link-github"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/gauravmehan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-space-secondary border border-space-accent rounded-full flex items-center justify-center hover:border-space-highlight hover:text-space-highlight transition-all duration-300"
                      data-testid="link-linkedin"
                    >
                      <Linkedin size={20} />
                    </a>

                    <a 
                      href="mailto:gauarvjh0827@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-space-secondary border border-space-accent rounded-full flex items-center justify-center hover:border-space-highlight hover:text-space-highlight transition-all duration-300"
                      data-testid="link-gmail"
                    >
                      <Mail size={20} />
                    </a>
                    
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Reveal delayMs={500}>
              <div className="relative" data-testid="profile-picture-container">
                <img 
                  src={profileImg} 
                  alt="Gaurav Mehan - Software Developer" 
                  className="w-80 h-80 rounded-full object-cover border-4 border-space-highlight pulse-glow"
                  data-testid="img-profile"
                />
                {/* Orbital rings */}
                <div className="absolute inset-0 rounded-full border border-space-highlight/30 scale-110 rotating" />
                <div className="absolute inset-0 rounded-full border border-space-nebula/20 scale-125 rotating" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
