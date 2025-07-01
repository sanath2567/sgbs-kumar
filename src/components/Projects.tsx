import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Weather Forecast Web App",
      description: "Real-time weather application displaying current conditions and forecasts using OpenWeatherMap API with location-based services.",
      tech: ["React.js", "TypeScript", "OpenWeatherMap API", "Geolocation"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Image Search Engine",
      description: "Intelligent image search platform with keyword-based search capabilities powered by Unsplash API and advanced filtering options.",
      tech: ["React.js", "Unsplash API"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Email Reply Generator",
      description: "Smart email assistant that generates contextual replies using Gemini API and advanced prompt engineering techniques.",
      tech: ["Gemini API", "Node.js", "Prompt Engineering", "NLP"],
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Q&A Assistant",
      description: "Full-stack AI-based question answering system with context understanding and intelligent response generation capabilities.",
      tech: ["Spring Boot", "React.js", "AI/ML", "REST API"],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "QR Code Generator",
      description: "Dynamic QR code generator with customization options, batch processing, and downloadable formats for various use cases.",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work combining modern web development 
            with cutting-edge technology and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 flex-1">
                    {project.title}
                  </h3>
                  <button className="ml-3 p-2 text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;