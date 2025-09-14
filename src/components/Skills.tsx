import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "JavaScript", "Python", "C", "SQL"],
    },
    {
      title: "Web Development",
      skills: [
        "HTML", "CSS", "React", "Next.js", "Tailwind", "Express.js", "Node.js",
        "TypeScript", "Prisma", "Zod", "Docker", "REST APIs", "Version Control (Git)", 
        "CI/CD", "GitHub Actions"
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "AWS", "Vercel", "Postman"
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Communication",
        "Adaptability", "Time Management"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies, tools, and professional skills I’ve been working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="glass p-6 hover-float animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 glass rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
