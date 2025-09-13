import { GraduationCap, Briefcase, Award, Code, BookUserIcon, Book, School } from 'lucide-react';
import { Reveal } from './reveal';

export function TimelineSection() {
  const timelineItems = [
    {
      id: 1,
      type: 'education',
      year: '2022-2026',
      title: 'B.Tech Electronics and Computer Engineering',
      description: 'Currently pursuing engineering with focus on software development and computer science fundamentals.',
      tags: ['CGPA: 6.63'],
      icon: GraduationCap,
      color: 'space-highlight'
    },
    {
      id: 2,
      type: 'Training',
      year: ' June 2024 - July 2024',
      title: 'Full Stack Web Development Training',
      company: 'GTB Computer Institute',
      description: 'Completed intensive full-stack development training with hands-on projects and industry best practices.',
      tags: ['A Grade'],
      icon: Book,
      color: 'space-nebula'
    },
    {
      id: 3,
      type: 'education',
      year: '2021-2022',
      title: '12th Grade (Non-Medical)',
      company: 'DAV Senior Secondary School',
      description: 'Completed higher secondary education with focus on mathematics and science.',
      tags: ['90.6%'],
      icon: School,
      color: 'space-highlight'
    },
    {
      id: 4,
      type: 'education',
      year: '2020',
      title: '10th Grade',
      company: 'Mount Carmel School, Kakkon',
      description: 'Completed secondary education with strong foundation in core subjects.',
      tags: ['85.8'],
      icon: School,
      color: 'space-nebula'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <Reveal as="div" className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-4 text-white">
            Journey Through Space & Code
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational and professional trajectory through the cosmos of technology
          </p>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line" />

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <Reveal key={item.id} delayMs={index * 150} className="flex items-center">
                {index % 2 === 0 ? (
                  <>
                    {/* Left side item */}
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-space-secondary border border-space-accent rounded-xl p-6 relative">
                        <div className={`absolute -right-4 top-8 w-8 h-8 bg-${item.color} rounded-full border-4 border-space-primary flex items-center justify-center`}>
                          <item.icon size={16} className="text-space-primary" />
                        </div>
                        <div className={`text-${item.color} font-spacemono text-sm mb-2`}>
                          {item.year}
                        </div>
                        <h3 className="font-orbitron text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        {item.company && (
                          <p className="text-muted-foreground mb-2 font-semibold">
                            {item.company}
                          </p>
                        )}
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {item.tags && item.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-3 py-1 bg-space-accent text-space-highlight text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    {/* Right side item */}
                    <div className="w-1/2" />
                    <div className="w-1/2 pl-8">
                      <div className="bg-space-secondary border border-space-accent rounded-xl p-6 relative">
                        <div className={`absolute -left-4 top-8 w-8 h-8 bg-${item.color} rounded-full border-4 border-space-primary flex items-center justify-center`}>
                          <item.icon size={16} className="text-space-primary" />
                        </div>
                        <div className={`text-${item.color} font-spacemono text-sm mb-2`}>
                          {item.year}
                        </div>
                        <h3 className="font-orbitron text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        {item.company && (
                          <p className="text-muted-foreground mb-2 font-semibold">
                            {item.company}
                          </p>
                        )}
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags && item.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-3 py-1 bg-space-accent text-space-highlight text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
