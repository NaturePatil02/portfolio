import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Github, Award, Code, Database, Palette } from "lucide-react";

const PortfolioTabs = () => {
  const experiences = [
    {
      title: "Internship",
      company: "Narola Infotech Solutions LLP",
      location: "Pal Gam, Surat, Gujarat 395009",
      period: "January 2025 to July 2025",
      description: " Receiving training in software development, focusing on clean code practices, version control, and structured development workflows. Gained practical experience in using modern programming languages, tools, and frameworks.",
      skills: ["Java", "Spring Boot", "Flutter", "MySQL","REST API"]
    }
  ];

  const projects = [
    {
      title: "URL Shortener",
      description: "A simple URL Shortener built using Node.js, Express, and MySQL. This project generates short codes for long URLs and stores them in a MySQL database. When a user visits a short URL, they are redirected to the original long URL. Features include generating unique short URLs using nanoid, storing original URL and click count in MySQL, and tracking the number of times a short URL has been clicked with REST API structure.",
      image: "/placeholder.svg",
      tech: ["Node.js", "Express", "MySQL", "nanoid"],
      liveUrl: "#",
      githubUrl: "https://github.com/NaturePatil02/URL-Shortener"
    },
    {
      title: "Jiggy Bank",
      description: "Built REST APIs for savings, transactions, and product purchase modules. Integrated Spring Boot services with MySQL for secure and scalable transactions. Applied OOP principles & JDBC/Hibernate concepts for efficient database operations. Optimized queries for performance and reliability in financial transactions. ",
      image: "/placeholder.svg",
      tech: ["Java", "Spring Boot", "Stripe", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Party Tonight",
      description: "Designed a social event-sharing app where users can create, manage, and explore events. Implemented ticketing and RSVP features with secure payment integration. Built Node.js backend APIs for event management, user authentication, and story posting. Integrated backend APIs with Flutter frontend for real-time updates and smooth interaction. Ensured optimized database structure in MySQL for event data and user profiles. ",
      image: "/placeholder.svg",
      tech: ["Flutter", "Node.js(Express)", "Socket.io", "Mysql", ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Room Finder",
      description: "Designed and implemented the relational database schema in MySQL to manage rental listings, user profiles, and booking details. Developed and integrated RESTful APIs using Java (Spring Boot) for room search, filtering, and user authentication. Optimized SQL queries, joins, and stored procedures for better performance and ensured database normalization for efficient data storage and retrieval. Built the mobile frontend using Flutter, connecting it seamlessly with backend APIs to provide real-time updates and a smooth user experience. Implemented indexing strategies to enhance search speed and reduce query execution time.",
      image: "/placeholder.svg",
      tech: ["Java", "Flutter", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"]
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6" />,
      items: ["Java", "Python", "Node.js", "Express", "MySQL"]
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6" />,
      items: ["Figma","Marval", "UI/UX Design", "Responsive Design", "Wireframing", "Pixel Perfect UI"]
    },
    {
      category: "Tools & Others",
      icon: <Award className="h-6 w-6" />,
      items: ["Git", "GitHub", "PostMan","CI/CD", "Testing", "Agile"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/50 backdrop-blur-sm">
            <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Projects
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300 group">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-secondary opacity-20 flex items-center justify-center">
                    <Code className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:shadow-glow-primary"
                      onClick={() => project.liveUrl !== "#" && window.open(project.liveUrl, '_blank')}
                      disabled={project.liveUrl === "#"}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => project.githubUrl !== "#" && window.open(project.githubUrl, '_blank')}
                      disabled={project.githubUrl === "#"}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skillGroup.icon}
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="p-3 bg-secondary/30 rounded-lg text-center hover:bg-primary/10 transition-colors">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioTabs;