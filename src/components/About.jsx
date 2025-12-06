import React from 'react';
import { Target, Code, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer & AI Enthusiast passionate about building innovative solutions
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
              As a Computer Science Engineering graduate specializing in Artificial Intelligence, I am 
              passionate about leveraging cutting-edge technologies to create impactful solutions. With 
              hands-on experience in full-stack development across multiple internships, I've built 
              production-level applications using React.js, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I aim to contribute to innovative projects that combine my expertise in MERN stack development, 
              Machine Learning, and Deep Learning to solve real-world problems. With a strong foundation in 
              AI-driven systems and predictive modeling, I'm committed to continuous learning and delivering 
              scalable, user-centric solutions that drive technological advancement.
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
                  <p className="text-gray-300">Expert in MERN stack, React.js, Node.js with production-level experience</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Rocket className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">AI & Machine Learning</h4>
                  <p className="text-gray-300">Building intelligent systems with CNN, RNN, and predictive models</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Briefcase className="h-8 w-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="space-y-8">
            {/* Ango Digital Technologies */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Frontend Developer Intern</h4>
                  <p className="text-xl text-blue-400 font-semibold">Ango Digital Technologies</p>
                </div>
                <div className="text-gray-300 font-medium mt-2 md:mt-0">
                  July 2025 - Present
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▹</span>
                  <span>Developed three production-level web applications including an AI-Powered chatbot with dynamic responses and human agent handoff functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▹</span>
                  <span>Built a company services promotion platform and a fully responsive restaurant customer service system using React.js and JavaScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▹</span>
                  <span>Collaborated with cross-functional teams in an Agile environment to deliver optimized UI/UX implementations through code splitting, lazy loading and Git version control practices</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AI Chatbot</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Agile</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Git</span>
              </div>
            </div>

            {/* Elfinity Technologies */}
            <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-2xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Full Stack Developer Intern</h4>
                  <p className="text-xl text-teal-400 font-semibold">Elfinity Technologies</p>
                </div>
                <div className="text-gray-300 font-medium mt-2 md:mt-0">
                  November 2024 - May 2025
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">▹</span>
                  <span>Developed production-level corporate website using HTML5, CSS3 and Tailwind CSS with fully responsive design and cross-browser functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">▹</span>
                  <span>Implemented modern UI/UX principles, Mobile-first approach and SEO best practices resulting in enhanced user engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3 mt-1">▹</span>
                  <span>Delivered scalable frontend solutions with clean code architecture and version control using Git</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">HTML5</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">CSS3</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">SEO</span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;