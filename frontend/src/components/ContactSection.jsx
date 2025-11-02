import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b1320] via-[#0b1320] to-[#0a0f1d]"
    >
      {/* Background glow and vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[95vmin] h-[95vmin] rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1100px_420px_at_50%_110%,rgba(0,0,0,0.55),transparent_60%)]"></div>
        <div className="absolute -bottom-40 -right-32 w-[55vmin] h-[55vmin] rounded-full bg-cyan-400/10 blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0F1827]/70 border border-cyan-500/30 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-saturate-125 mb-4 chip-glow">
            <span className="text-cyan-300 text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white title-glow-white">Let’s Build </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent title-glow-cyan">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto soft-shadow">
            Have a project in mind? We’d love to hear about it. Drop us a
            message and let’s start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative rounded-2xl p-8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden backdrop-saturate-125">
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0f1626]/70 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/40 transition-all rounded-xl h-12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0f1626]/70 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/40 transition-all rounded-xl h-12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-[#0f1626]/70 border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/40 transition-all resize-none rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                  placeholder=""
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-500 text-slate-900 font-semibold py-6 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.35)] ring-1 ring-cyan-300/40"
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
          <div className="relative rounded-2xl p-8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden backdrop-saturate-125 space-y-8">
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
            {/* Direct Contact */}
            <div className="relative flex flex-col items-start md:items-center text-center space-y-3 p-6 bg-[rgba(15,24,39,0.6)] rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.08)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
              {/* Tag chip */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1827]/80 border border-cyan-400/30 shadow-[0_0_8px_rgba(6,182,212,0.2)]">
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 text-sm font-semibold tracking-wide">
                  Direct Contact
                </span>
              </div>

              {/* Email link */}
              <a
                href="mailto:kshama.sh0903@gmail.com"
                className="group text-lg md:text-xl font-medium text-cyan-300 hover:text-cyan-100 transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-400 after:transition-all after:duration-300 group-hover:after:w-full">
                  kshama.sh0903@gmail.com
                </span>
              </a>

              {/* Subtle glow accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm opacity-70"></div>
            </div>

            {/* Why Work With Us */}
            <div className="rounded-xl p-6 bg-[#0f1626]/50 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <h3 className="text-xl font-bold text-white mb-6 soft-shadow">
                Why Work With Us?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>2+ years of combined experience</span>
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

      <style jsx>{`
        .title-glow-white {
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.18),
            0 0 30px rgba(0, 0, 0, 0.35);
        }
        .title-glow-cyan {
          text-shadow: 0 3px 14px rgba(34, 211, 238, 0.45),
            0 0 30px rgba(34, 211, 238, 0.25);
        }
        .soft-shadow {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
        }
        .chip-glow {
          box-shadow: inset 0 0 0 1px rgba(34, 211, 238, 0.18),
            0 10px 30px rgba(34, 211, 238, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
