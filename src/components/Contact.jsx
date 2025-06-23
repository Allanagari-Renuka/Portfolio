import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // const response = await fetch('http://localhost:5000/api/contact', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(formData)
//     // });
//     const response = await fetch('https://your-backend.onrender.com/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });
//     const data = await response.json();
//     alert(data.message);
//   } catch (err) {
//     alert('Failed to send message.');
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://your-backend.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    alert(data.message);
  } catch (err) {
    alert('Failed to send message.');
  }
};

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "allanagarirenuka28@gmail.com",
      href: "mailto:allanagarirenuka28@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9392809600",
      href: "tel:+919392809600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/allanagari-renuka-8a9346263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-blue-600 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </a>
                <a
                  href="https://github.com/Allanagari-Renuka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;