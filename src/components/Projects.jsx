import React from 'react';
import { ExternalLink, Github, Code, Database, Brain, Hand } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Thyroid Diagnosis System",
      description: "Deep learning-based diagnostic system for thyroid disease prediction using patient lab results. Implements multiple ML algorithms with high accuracy rates for early detection.",
      tech: ["React.js", "Node.js", "MongoDB", "Python", "Flask", "CNN", "RNN", "DCS"],
      github: "https://github.com/Allanagari-Renuka/Thyroid-Diagnosis",
      demo: "https://diagnosis-of-a-thyroid-using-cnn-and-rnn-f7ku.onrender.com/",
      icon: <Brain className="h-6 w-6" />,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "SignSpeak AI - Sign Language Recognition",
      description: "Real-time American Sign Language recognition system using CNN-LSTM deep learning architecture. Processes video at 30 FPS with instant gesture translation to text and speech, promoting accessibility and inclusion for the Deaf community.",
      tech: ["React.js", "Python", "CNN", "LSTM", "OpenCV", "Computer Vision", "Flask", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Allanagari-Renuka/Sign-Language-Recognition",
      demo: "https://sign-language-recognition-1-ncse.onrender.com/",
      icon: <Hand className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Restaurant Menu Page",
      description: "Interactive restaurant menu application with modern UI/UX design. Features dynamic menu filtering, item search, responsive design, and smooth animations for enhanced user experience.",
      tech: ["HTML", "CSS3", "JavaScript", "Responsive Design",],
      github: "https://github.com/Allanagari-Renuka/Restaurant-Menu-Pagep",
      demo: "https://recipie-gold.vercel.app/",
      icon: <Database className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work in full-stack development and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 group/btn"
                    >
                      <Github className="h-5 w-5 text-gray-300 group-hover/btn:text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="h-5 w-5 text-gray-300 group-hover/btn:text-blue-400" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-full text-sm font-medium hover:bg-slate-600/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Allanagari-Renuka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="h-6 w-6" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;