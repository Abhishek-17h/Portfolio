import { Card } from '@/components/ui/card';
import { GraduationCap, Code, Brain, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Major with focus on Software Engineering and AIML"
    },
    {
      icon: Code,
      title: "Development",
      description: "Hands on experience building web applications using modern frameworks"
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Passionate about machine learning and artificial intelligence"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science student who loves turning ideas into reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-slide-in-left">
            <Card className="glass p-8 hover-float">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my coding journey in high school with curiosity about how websites work. 
                  That curiosity quickly turned into a passion for creating digital experiences.
                </p>
                <p>
                  Throughout my university years, I've worked on various projects ranging from 
                  web applications to machine learning models, always eager to learn new technologies 
                  and tackle challenging problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to 
                  open source projects, or working on personal projects that solve real-world problems.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass p-6 hover-float text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;