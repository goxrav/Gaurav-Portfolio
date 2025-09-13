import { Palette, Server, Wrench } from 'lucide-react';
import { Reveal } from './reveal';
import { useReveal } from '@/hooks/use-reveal';

export function SkillsSection() {
  const { ref, visible } = useReveal();

  const skillCategories = [

{
      id: 'languages',
      title: 'Languages',
      icon: Palette,
      color: 'space-highlight',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript', level: 100 },
        { name: 'HTML', level: 100 },
       
      ]
    },

    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      color: 'space-highlight',
      skills: [
        { name: 'Tailwind CSS', level: 100 },
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 100 },
        { name: 'CSS' , level: 100}
        
      ]
    },

    


    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'space-nebula',
      skills: [
        { name: 'Node.js', level: 100 },
        { name: 'Express.js', level: 100 },
        { name: 'RESTful APIs', level: 100 },
        {name: 'MongoDB', level: 100}
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'gradient-to-br from-space-highlight to-space-nebula',
      skills: [
        { name: 'Git', level: 100 },
        { name: 'GitHub', level: 100 },
        { name: 'Postman', level: 95 },
        { name: 'VS Code', level: 100 }
      ]
    }
  ];


  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-20 bg-gradient-to-b from-space-primary via-space-secondary to-space-primary"
    >
      <div className="container mx-auto px-6">
        <Reveal as="div" className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 text-white">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've mastered in my journey through the digital universe
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delayMs={index * 150}
              className="bg-space-secondary border border-space-accent rounded-xl p-8 hover:border-space-highlight transition-all duration-300"
              data-testid={`skill-category-${category.id}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color.includes('gradient') ? `bg-${category.color}` : `bg-${category.color}`} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon size={24} className={category.color.includes('gradient') ? 'text-white' : 'text-space-primary'} />
                </div>
                <h3 className="font-orbitron text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-spacemono text-sm">{skill.name}</span>
                      <span className="text-space-highlight font-spacemono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-space-accent rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${
                          category.color.includes('gradient') 
                            ? 'from-space-highlight via-space-nebula to-space-highlight'
                            : category.color === 'space-highlight'
                              ? 'from-space-highlight to-space-nebula'
                              : 'from-space-nebula to-space-highlight'
                        } skill-progress rounded-full h-2 transition-all duration-1000`}
                        style={{ 
                          width: visible ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
