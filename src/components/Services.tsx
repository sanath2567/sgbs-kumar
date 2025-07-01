import React from 'react';
import { Palette, Code, Brain } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive, clean interfaces focused on user experience and modern design principles.",
      features: ["Responsive Design", "User Research", "Prototyping"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack applications using React.js for frontend and Spring Boot for backend development.",
      features: ["React.js & TypeScript", "Spring Boot", "Database Design"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Prompt Engineering & AI Solutions",
      description: "Enhancing applications with smart features using LLMs and NLP techniques for intelligent user interactions.",
      features: ["OpenAI Integration", "NLP Solutions", "Smart Automation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive development services combining modern web technologies 
            with artificial intelligence to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-200 dark:hover:border-yellow-800"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl text-yellow-600 dark:text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss how I can help bring your ideas to life with modern technology and AI integration.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;