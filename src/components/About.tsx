import React from 'react';
import { GraduationCap, Code, Brain, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Fresh Graduate",
      description: "B.Tech in Computer Science & Engineering from JNTUA, 2025"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Expertise in React.js, Spring Boot, and modern web technologies"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Integration",
      description: "Specializing in prompt engineering and intelligent application development"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission Driven",
      description: "Building scalable, user-focused applications that make a difference"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science graduate with a focus on building intelligent, 
            scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                As a recent B.Tech graduate in Computer Science & Engineering from JNTUA, 
                I've developed a strong foundation in software development, data structures, 
                algorithms, and artificial intelligence.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My interests lie in full-stack development with a special focus on backend 
                development and AI integration. I'm passionate about creating intelligent 
                applications that enhance user experiences through smart features and 
                seamless interactions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My goal is to build scalable, user-focused applications that leverage 
                the power of modern web technologies and artificial intelligence to 
                solve complex problems efficiently.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Key Highlights
            </h3>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology - Computer Science & Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Jawaharlal Nehru Technological University Anantapur (JNTUA), India
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Class of 2025
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Focused on Data Structures & Algorithms, Operating Systems, AI/ML, and Software Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;