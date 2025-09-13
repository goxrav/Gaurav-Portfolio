import { ExternalLink, Github, Plus } from 'lucide-react';
import { Reveal } from './reveal';


export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'The Big Store🛍️',
      description: 'A modern, feature-rich e-commerce web application. This platform provides a complete shopping experience with user authentication, product management, shopping cart, order processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/goxrav/The-big-store.git'
    },
    {
      id: 2,
      title: 'Sneakky Confessions❤️',
      description: 'A MERN stack based anonymous confession board with admin moderation, reactions, reporting system, and real-time feed. Features a Gen-Z themed UI with glassmorphism, animations, and dynamic layouts.',
      image: 'https://images.unsplash.com/photo-1655570313252-459f8fc57f11?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['HTML', 'TailwindCSS', 'React.js', 'Express.js', 'Node.js', 'MongoDB'],
      liveUrl: 'http://sneakky-confessionss-g439.vercel.app',
      githubUrl: 'https://github.com/goxrav/sneakky-confessionss.git'
    },
    {
      id: 3,
      title: 'Gasify⛽',
      description: 'A SaaS platform for gas booking with live tracking, comprehensive admin panel, and detailed analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1644217209694-5ca176114adb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Node.js', 'Express.js' ],
      liveUrl: 'https://stellar-chat.demo',
      githubUrl: 'https://github.com/alexnova/stellar-chat'
    },
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <Reveal as="div" className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the digital worlds I've created and the problems I've solved
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal 
              key={project.id}
              delayMs={index * 100}
              className="project-card rounded-xl p-6 group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-space-highlight rounded-full flex items-center justify-center text-space-primary hover:scale-110 transition-transform"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-space-secondary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      data-testid={`link-github-${project.id}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-3" data-testid={`text-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4" data-testid={`text-description-${project.id}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-space-accent text-space-highlight text-xs rounded-full"
                    data-testid={`tag-tech-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}

          {/* Coming Soon Card */}
          <Reveal 
            delayMs={projects.length * 100}
            className="project-card rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[400px] group"
          >
            <div className="w-20 h-20 border-2 border-dashed border-space-highlight rounded-full flex items-center justify-center mb-6 group-hover:border-space-nebula transition-colors">
              <Plus size={32} className="text-space-highlight group-hover:text-space-nebula rotating transition-colors" />
            </div>
            <h3 className="font-orbitron text-xl font-bold mb-3">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Exciting new projects are currently in development. Stay tuned for more innovative solutions!
            </p>
            <a 
              href="https://github.com/goxrav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-space-highlight rounded-lg hover:bg-space-highlight hover:text-space-primary transition-all duration-300 glow-effect"
              data-testid="link-github-profile"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
