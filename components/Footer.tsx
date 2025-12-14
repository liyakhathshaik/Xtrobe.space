'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: '#' },
];

const footerLinks = [
  {
    title: 'Platform',
    links: ['News', 'Events', 'Hackathons', 'Careers', 'Community'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API', 'Tutorials', 'Blog', 'FAQs'],
  },
  {
    title: 'Company',
    links: ['About', 'Team', 'Press', 'Partners', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-black/40 backdrop-blur-xl border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-cyan-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl"></span>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Xtrobe
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              
              Exploring the cosmos together. Your gateway to space exploration, community, and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 CosmoSphere. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for space enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
