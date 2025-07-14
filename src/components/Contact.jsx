import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Globe, FileText } from 'lucide-react'; // Added FileText

function Contact({ loaded }) {
  const [hovered, setHovered] = useState(null);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshvardhantharkar576@gmail.com',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/HarshvardhanTharkar',
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/harshvardhan-tharkar-6a75aa2b1/',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'https://www.instagram.com/_harshvardhan14_/',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Globe,
      label: 'LeetCode',
      value: 'https://leetcode.com/u/HarshvardhanTharkafr/',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: '/resume.pdf', // File must be in public/
      color: 'from-indigo-400 to-purple-600',
    },
  ];

  return (
    <div
      className={`transform transition-all duration-1000 delay-1200 ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <h3 className="text-4xl font-bold text-center mb-12 tracking-wide">
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.value.startsWith('http') || contact.value.endsWith('.pdf')
              ? contact.value
              : `mailto:${contact.value}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-700 hover:scale-105 block ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${1400 + index * 100}ms` }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="group relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors duration-300">
                    {contact.label}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 break-all">
                    {contact.value}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
