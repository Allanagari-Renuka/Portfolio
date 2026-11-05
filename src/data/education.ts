import { EducationItem, CertificationItem } from '@/types';

export const educationList: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
    institution: 'G. Pullaiah College of Engineering & Technology',
    period: '2021 – 2025',
    score: '88%',
    scoreLabel: 'Aggregate Score',
    description:
      'Rigorous academic training specializing in Artificial Intelligence, Deep Learning, Data Structures & Algorithms, Database Management Systems, and Distributed Computing.',
  },
  {
    degree: 'Board of Intermediate Education (MPC)',
    institution: 'Narayana Junior College',
    period: '2019 – 2021',
    score: '89%',
    scoreLabel: 'Final Percentage',
    description:
      'Core coursework in Mathematics, Physics, and Chemistry emphasizing analytical problem-solving and quantitative reasoning.',
  },
  {
    degree: 'Board of Secondary Education',
    institution: 'A.P. Model School',
    period: '2019',
    score: '95%',
    scoreLabel: 'Final Percentage',
    description:
      'Graduated with honors, establishing an early foundation in scientific methodology, mathematics, and computer literacy.',
  },
];

export const certificationsList: CertificationItem[] = [
  {
    title: 'Smart Coder Certification',
    issuer: 'Smart Interviews',
    year: '2024',
    fileUrl: '/smartinterviews.pdf',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'Make Skilled',
    year: '2023',
    fileUrl: '/Makeskilled.pdf',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: '2023',
    fileUrl: '/Aws_cloud_practitioner_essentials.pdf',
  },
  {
    title: 'Data Science Certification',
    issuer: 'GeeksforGeeks',
    year: '2024',
  },
];
