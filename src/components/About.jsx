import React from 'react';
import { Target, Code, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A dedicated professional passionate about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Career Objective */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Career Objective</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To leverage my expertise in full-stack development and data science to contribute to innovative 
              projects that drive business growth and technological advancement. I aim to work in a dynamic 
              environment where I can utilize my skills in MERN stack, Python, and Machine Learning to solve 
              complex problems and deliver impactful solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am committed to continuous learning and staying updated with the latest technologies to 
              remain at the forefront of software development and data science methodologies.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Full Stack Development</h4>
                  <p className="text-gray-300">Expert in MERN stack and modern web technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors duration-300">
                  <Database className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Data Science</h4>
                  <p className="text-gray-300">Proficient in Python, ML algorithms, and data analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Brain className="h-8 w-8 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Machine Learning</h4>
                  <p className="text-gray-300">Building intelligent systems with predictive capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;