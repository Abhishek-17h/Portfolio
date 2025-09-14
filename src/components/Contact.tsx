import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhishekhegaje1702@gmail.com",
      link: "mailto:abhishekhegaje1702@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7507666983",
      link: "tel:+917507666983"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolhapur,Maharashtra, India",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/Abhishek-17h" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/bhanudas-hegaje/" },
    { icon: Twitter, name: "Twitter", url: "https://x.com/imveer4567" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="glass p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-medium mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary hover:bg-primary/20 transition-colors"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Project discussion"
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="bg-background/50 border-border/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;