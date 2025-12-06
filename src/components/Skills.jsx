// import React from 'react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: "🎨",
//       skills: [
//         { name: "React.js", level: 95 },
//         { name: "JavaScript", level: 95 },
//         { name: "HTML/CSS", level: 98 },
//         { name: "Tailwind CSS", level: 95 },
//         { name: "Next.js", level: 80 },
//         { name: "React Native", level: 80 }
//       ]
//     },
//     {
//       title: "Backend Development",
//       icon: "⚙️",
//       skills: [
//         { name: "Node.js", level: 90 },
//         { name: "Express.js", level: 85 },
//         { name: "MongoDB", level: 80 },
//         { name: "REST APIs", level: 90 },
//         // { name: "GraphQL", level: 70 },
//         // { name: "PostgreSQL", level: 75 }
//       ]
//     },
//     {
//       title: "Data Science & ML",
//       icon: "🧠",
//       skills: [
//         { name: "Python", level: 95 },
//         { name: "Pandas", level: 90 },
//         { name: "NumPy", level: 85 },
//         { name: "Scikit-learn", level: 80 },
//         { name: "TensorFlow", level: 75 },
//         { name: "Matplotlib", level: 85 }
//       ]
//     },
//     {
//       title: "Tools & Technologies",
//       icon: "🛠️",
//       skills: [
//         { name: "Git/GitHub", level: 90 },
//         // { name: "Docker", level: 75 },
//         { name: "VS Code", level: 95 },
//         { name: "Postman", level: 90 },
//         { name: "AWS", level: 70 },
//         { name: "Jupyter", level: 85},
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             A comprehensive overview of my technical expertise and proficiency levels
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <div
//               key={category.title}
//               className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
//             >
//               <div className="flex items-center space-x-3 mb-6">
//                 <span className="text-2xl">{category.icon}</span>
//                 <h3 className="text-2xl font-bold text-white">{category.title}</h3>
//               </div>

//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skill.name} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-300 font-medium">{skill.name}</span>
//                       <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-slate-700 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                         style={{
//                           width: `${skill.level}%`,
//                           animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.1}s`
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Key Technologies Highlight */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-white mb-8">Core Technologies</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {['Java', 'Python', 'C', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
//               <span
//                 key={tech}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-400/30 rounded-full text-blue-300 font-semibold hover:from-blue-500/30 hover:to-teal-500/30 transition-all duration-300 cursor-default"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 98 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "Redux", level: 85 },
        { name: "React Native", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "Flask", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Fast API", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 88 },
        { name: "TensorFlow/Keras", level: 85 },
        { name: "CNN & RNN", level: 87 },
        { name: "Computer Vision", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Predictive Modeling", level: 88 },
        { name: "Data Visualization", level: 85 }
      ]
    },
    {
      title: "Programming & Tools",
      icon: "🛠️",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "Git/GitHub", level: 92 },
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 88 },
        { name: "AWS Cloud", level: 75 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Technologies Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Python', 'C', 'SQL', 'Machine Learning', 'Deep Learning', 'Data Science', 'React.js', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-400/30 rounded-full text-blue-300 font-semibold hover:from-blue-500/30 hover:to-teal-500/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;