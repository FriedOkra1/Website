import { Github, Linkedin, Mail, Sun, Moon, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import exampleResume from 'figma:asset/f488aa99c9c9b6caa7dfa647d206a1a209387269.png';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
    },
  ];

  const interests = [
    "Machine Learning",
    "Cybersecurity", 
    "App/Web Development",
    "AI Research"
  ];

  const projects = [
    {
      title: "Project One",
      description: "A description of your first project and what technologies you used.",
      tags: ["React", "TypeScript", "Tailwind"],
      websiteUrl: "https://project-one.com",
      githubUrl: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "A description of your second project and what technologies you used.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      websiteUrl: "https://project-two.com",
      githubUrl: "https://github.com/yourusername/project-two"
    },
    {
      title: "Project Three",
      description: "A description of your third project and what technologies you used.",
      tags: ["Node.js", "MongoDB", "Express"],
      websiteUrl: "https://project-three.com",
      githubUrl: "https://github.com/yourusername/project-three"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Theme Toggle - Top Right */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">
            AYUSH MADHAV KUMAR
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Software Developer
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Left Column - About Me & Interests Stacked */}
          <div className="flex flex-col gap-6">
            
            {/* About Me Section */}
            <div className="bg-blue-600 text-white p-8 border-4 border-black dark:border-white">
              <div className="w-12 h-1 bg-white mb-6"></div>
              <h2 className="text-2xl md:text-3xl mb-6">About Me</h2>
              <div className="space-y-4">
                <p>
                  Passionate software developer with experience in modern web 
                  technologies and machine learning. I love building innovative 
                  solutions that solve real-world problems.
                </p>
                <p>
                  Currently focused on cybersecurity and exploring the intersection 
                  of AI and cybersecurity. Always eager to talk to people, learn new 
                  technologies and contribute to open source projects.
                </p>
              </div>
            </div>

            {/* My Interests Section */}
            <div className="bg-background p-8 border-4 border-black dark:border-white flex-1">
              <div className="w-12 h-1 bg-blue-600 mb-6"></div>
              <h2 className="text-2xl md:text-3xl mb-6">My Interests</h2>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="bg-background p-4 border-2 border-black dark:border-white"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Resume PDF */}
          <div className="bg-background border-4 border-black dark:border-white p-8">
            <div className="w-12 h-1 bg-blue-600 mb-6"></div>
            <h2 className="text-2xl md:text-3xl mb-6">Resume</h2>
            <div className="border-2 border-black dark:border-white bg-white p-4 min-h-[600px] flex items-center justify-center">
              {/* PDF Preview - Replace with actual PDF embed */}
              <img 
                src={exampleResume} 
                alt="Resume Preview" 
                className="w-full h-auto object-contain"
              />
              {/* Alternative: Use iframe for actual PDF */}
              {/* <iframe 
                src="/resume.pdf" 
                className="w-full h-full min-h-[600px]"
                title="Resume PDF"
              /> */}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="/resume.pdf"
                download
                className="flex-1 text-center p-4 border-2 border-black dark:border-white bg-background hover:bg-foreground hover:text-background transition-colors duration-200"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section - Full Width */}
        <div className="bg-background border-4 border-black dark:border-white p-8">
          <div className="w-12 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-2xl md:text-3xl mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border-2 border-black dark:border-white p-6 hover:border-blue-600 transition-colors duration-200 relative"
              >
                {/* Project Links - Top Right */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-black dark:border-white hover:bg-foreground hover:text-background transition-colors duration-200"
                    aria-label="Visit website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-black dark:border-white hover:bg-foreground hover:text-background transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl mb-3 pr-20">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm border border-black dark:border-white bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}