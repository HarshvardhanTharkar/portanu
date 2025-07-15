import { useState } from 'react';
import {
  Mail, Github, Linkedin, Instagram, Globe, FileText
} from 'lucide-react';

function Contact({ loaded }) {
  const [hovered, setHovered] = useState(null);

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anushkaasode@gmail.com',
      href: 'mailto:anushkaasode@gmail.com',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Anushkaasode123',
      href: 'https://github.com/Anushkaasode123?tab=overview&from=2025-07-01&to=2025-07-15',
      color: 'from-zinc-500 to-zinc-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anushka-asode',
      href: 'https://www.linkedin.com/in/anushka-asode-6b055225b/',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@anushka_asode20',
      href: 'https://www.instagram.com/anushka_asode20?igsh=MTB3MDlzYTF4ZGVpMw==',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: Globe,
      label: 'LeetCode',
      value: 'leetcode.com/u/08an',
      href: 'https://leetcode.com/u/08an/',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
      color: 'from-indigo-500 to-purple-700',
    },
  ];

  return (
    <section
      className={`transition-all duration-1000 ease-in-out ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-14 tracking-tight">
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let’s Connect
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
        {contacts.map((contact, index) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-500 ease-in-out transform ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } hover:scale-[1.02]`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="group relative p-5 bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-white/20 cursor-pointer">
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon and content */}
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm">
                  <h4 className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                    {contact.label}
                  </h4>
                  <p className="text-gray-300 break-all group-hover:text-white transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
