import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1320] border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">DevTeam</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building exceptional software solutions with cutting-edge technology and creative innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Tech Stack', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', ''));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@devteam.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@devteam.com</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F1827] border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F1827] border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F1827] border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DevTeam. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-gray-500 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-500 hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;