import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import passport from '../passport.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          {/* <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-teal-400">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                {/* <span className="text-3xl font-bold text-white">AR</span> */}
                {/* <img
                  src={passport}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"></img>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div> */} 
        <div className="relative inline-block">
  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-teal-400">
    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
      <img
        src={passport}
        alt="Profile"
        className="w-full h-full object-cover aspect-square"
        style={{ aspectRatio: "1 / 1" }}
      />
    </div>
  </div>
  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
</div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Allanagari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Renuka</span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-gray-300">Full Stack Developer</p>
              <p className="text-lg md:text-xl text-gray-400">& Data Scientist</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and leveraging data science to solve complex problems. 
            Proficient in MERN stack, Python, and Machine Learning technologies.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Allanagari-Renuka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/allanagari-renuka-8a9346263/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400" />
            </a>
            <a
              href="mailto:allanagarirenuka28@gmail.com"
              className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-gray-300 group-hover:text-teal-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;