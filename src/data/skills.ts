export interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    color: '#38bdf8',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    color: '#818cf8',
    skills: ['React', 'Next.js', 'Redux', 'React Native', 'Capacitor', 'Vite', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Backend',
    color: '#22d3ee',
    skills: ['Node', 'Express', 'Flask', 'FastAPI', 'REST', 'JWT', 'Socket.io', 'Redis'],
  },
  {
    category: 'Databases',
    color: '#34d399',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL'],
  },
  {
    category: 'AI / ML',
    color: '#e879f9',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'CNN',
      'RNN / LSTM',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'MCP',
      'AI Automation',
      'Agentic Workflows',
    ],
  },
  {
    category: 'Tools & DevOps',
    color: '#f59e0b',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Render',
      'Firebase',
      'Razorpay',
      'Google Maps API',
      'Postman',
    ],
  },
];

export const allSkillTokens = skillGroups.flatMap((g) =>
  g.skills.map((s) => ({
    name: s,
    category: g.category,
    color: g.color,
  }))
);
