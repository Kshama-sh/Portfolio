// Mock data for portfolio website - Frontend only implementation

export const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Full-Stack & AI Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "5+ years of experience building scalable web applications and AI-powered solutions. Specialized in React, Node.js, and machine learning integration.",
    expertise: ["Frontend Development", "AI/ML Integration", "React", "TensorFlow"]
  },
  {
    id: 2,
    name: "Jordan Chen",
    role: "Backend & Cloud Architect",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "6+ years crafting robust backend systems and cloud infrastructure. Expert in Python, PostgreSQL, AWS, and microservices architecture.",
    expertise: ["Backend Development", "Cloud Architecture", "Python", "AWS"]
  }
];

export const services = [
  {
    id: 1,
    icon: "Code",
    title: "Frontend Development",
    description: "Beautiful, responsive user interfaces built with React, Next.js, and modern CSS frameworks. Pixel-perfect designs that work flawlessly across all devices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    icon: "Database",
    title: "Backend Development",
    description: "Robust, scalable server-side applications using Node.js, Python, and modern databases. RESTful APIs and GraphQL endpoints built for performance.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    id: 3,
    icon: "Layers",
    title: "Full-Stack Solutions",
    description: "End-to-end application development from database design to deployment. Complete web applications with seamless frontend-backend integration.",
    technologies: ["MERN Stack", "Next.js", "FastAPI", "Docker"]
  },
  {
    id: 4,
    icon: "Brain",
    title: "AI/ML Integration",
    description: "Intelligent features powered by machine learning. From recommendation systems to natural language processing and computer vision solutions.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform with AI Recommendations",
    description: "Full-stack marketplace featuring personalized product recommendations using machine learning algorithms. Real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "Stripe"],
    category: ["Full-Stack", "AI/ML"],
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description: "Cloud-based workspace for teams with live document editing, video conferencing, and project management. Built for scale with WebSocket technology.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    technologies: ["React", "Socket.io", "PostgreSQL", "AWS", "WebRTC"],
    category: ["Full-Stack", "Frontend"],
    link: "#"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence platform with predictive analytics and automated insights. Interactive visualizations and custom reporting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Python", "FastAPI", "Scikit-learn", "D3.js"],
    category: ["AI/ML", "Full-Stack"],
    link: "#"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "HIPAA-compliant platform for patient records, appointment scheduling, and telemedicine consultations. Secure, scalable, and user-friendly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    category: ["Full-Stack", "Backend"],
    link: "#"
  },
  {
    id: 5,
    title: "Smart Content Management Platform",
    description: "AI-enhanced CMS with automated SEO optimization, content suggestions, and intelligent tagging. Multi-language support and headless architecture.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
    technologies: ["Next.js", "GraphQL", "MongoDB", "OpenAI", "AWS"],
    category: ["AI/ML", "Frontend"],
    link: "#"
  },
  {
    id: 6,
    title: "Financial Trading Platform",
    description: "High-frequency trading dashboard with real-time market data, advanced charting, and automated trading strategies. Enterprise-grade security.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    technologies: ["React", "Python", "WebSocket", "Redis", "PostgreSQL"],
    category: ["Backend", "Full-Stack"],
    link: "#"
  }
];

export const techStack = [
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "TensorFlow", icon: "tensorflow" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Next.js", icon: "nextjs" },
  { name: "FastAPI", icon: "fastapi" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    company: "TechStart",
    content: "Working with this team was exceptional. They delivered our AI-powered platform ahead of schedule and exceeded all expectations. Their technical expertise and communication skills are outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO, DataFlow Systems",
    company: "DataFlow",
    content: "The most professional development team we've worked with. They transformed our legacy system into a modern, scalable solution. Highly recommend for any complex project.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Product Manager, CloudVenture",
    company: "CloudVenture",
    content: "Incredible attention to detail and technical knowledge. They built our full-stack application with cutting-edge technologies and maintained excellent code quality throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  }
];

export const contactInfo = {
  email: "hello@devteam.com",
  availability: "Available for projects",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};