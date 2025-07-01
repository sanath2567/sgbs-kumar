import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-yellow-600 dark:text-yellow-400">
                  Sriram Gnana Brahma Sanath Kumar
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full-Stack Developer | AI Enthusiast | Prompt Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                Building intelligent, scalable applications with modern technologies and AI integration.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <a
               href="./sriramsanath.pdf" 
               download="sriramsanath.pdf" 
               className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                   >
            <Download className="mr-2 h-5 w-5" />
             Download CV
                 </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-2">
                <img
                  src="https://i.postimg.cc/Prhdvx2Z/Whats-App-Image-2024-04-19-at-10-03-57-PM-1.jpg"
                  alt="Sriram Gnana Brahma Sanath Kumar - Full-Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-600 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;