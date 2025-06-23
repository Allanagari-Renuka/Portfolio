import React from 'react';
import { GraduationCap, Award, Calendar,BrainCircuit,BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "G.Pullaiah College of Engineering and Technology",
      year: "2021 - 2025",
      grade: "CGPA: 8.82/10",
      description: "Specialized in Artificial Engineering, data structures, algorithms, and Machine Learning fundamentals."
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College",
      year: "2019 - 2021",
      grade: "Percentage: 89%",
      description: "Mathematics, Physics, Chemistry with focus on analytical and problem-solving skills."
    },
    {
      degree: "Higher Secondary Education",
      institution: "A.P.Model School",
      year: "2019",
      grade: "Percentage: 95%",
      description: "Completed with a strong foundation in Mathematics and Science, excelling in analytical thinking and problem-solving."
    }
  ];

  const certifications = [
    {
      title: "Smart Coder",
      issuer: "Smart Interviews",
      year: "2024",
      icon: <BrainCircuit className="h-6 w-6 text-yellow-400" />
    },
    {
      title: "Full Stack Web Development",
      issuer: "Make Skilled",
      year: "2023",
      icon: "🌐"
    },
    {
      title: "Big Data Analytics, IOT, Management Information Systems ",
      issuer: "NPTEL",
      year: "2024",
      icon: <BookOpen className="h-6 w-6 text-orange-400" />
    },
     {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      year: "2024",
      icon: "🤖"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      year: "2023",
      icon: "🐍"
    },
    // {
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   year: "2023",
    //   icon: "☁️"
    // },
    // {
    //   title: "React.js Certification",
    //   issuer: "Meta",
    //   year: "2022",
    //   icon: "⚛️"
    // },
    // {
    //   title: "Data Structures & Algorithms",
    //   issuer: "LeetCode",
    //   year: "2022",
    //   icon: "📊"
    // }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic background and professional certifications that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-gray-300 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <span className="text-teal-400 font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Award className="h-8 w-8 text-teal-400" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-300 text-sm">{cert.issuer}</p>
                        <span className="text-teal-400 text-sm font-medium">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;