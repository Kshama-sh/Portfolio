import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (frontend only)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1827] border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build </span>
            <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message and let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#0F1827] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#1A2332] border-transparent text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500 transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#1A2332] border-transparent text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500 transition-all"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-[#1A2332] border-transparent text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500 transition-all resize-none"
                  placeholder=""
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-6 transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Direct Contact</h3>
              </div>
              <a
                href="mailto:hello@devteam.com"
                className="text-cyan-400 text-lg hover:text-cyan-300 transition-colors"
              >
                hello@devteam.com
              </a>
            </div>

            {/* Why Work With Us */}
            <div className="bg-[#0F1827] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Why Work With Us?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>11+ years of combined experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>Direct communication with developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>Agile development process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>100% client satisfaction rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;