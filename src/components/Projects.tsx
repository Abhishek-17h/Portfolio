import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project1.png';


const Projects = () => {
  const projects = [
    {
      title: "NextRole - Job Portal Website",
      description: "A comprehensive full-stack platform for job posting, application tracking, and recruiter-candidate interaction with role-based access.",
      image: project1,
      technologies: ["React", "Tailwind", "Javascript", "Superbase", "Clerk", "ShadCN"],
      liveUrl: "https://next-role-xi.vercel.app/",
      githubUrl: "https://github.com/Abhishek-17h/NextRole",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass overflow-hidden hover-float animate-fade-in ${project.featured ? 'md:grid md:grid-cols-2' : ''
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${project.featured ? '' : 'h-48'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            size="lg"
            asChild
          >
            <a
              href="https://github.com/Abhishek-17h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />View All Projects GitHub
            </a>

          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;