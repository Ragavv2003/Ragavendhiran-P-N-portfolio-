import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Server, Shield, Network } from 'lucide-react';

const projects = [
  {
    title: "Network Monitoring Dashboard",
    description: "A real-time network monitoring solution built with SNMP and Grafana",
    icon: Network,
    tags: ["Networking", "Python", "Grafana"],
    github: "#",
    demo: "#",
    inProgress: true
  },
  {
    title: "Linux Server Automation",
    description: "Ansible playbooks for automated Linux server configuration and management",
    icon: Server,
    tags: ["Linux", "Ansible", "Bash"],
    github: "#",
    demo: "#",
    inProgress: false
  },
  {
    title: "Security Audit Tool",
    description: "A tool for performing basic security audits on Linux systems",
    icon: Shield,
    tags: ["Security", "Python", "Linux"],
    github: "#",
    demo: "#",
    inProgress: true
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my ongoing and completed projects in networking, Linux administration, and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8 text-blue-400" />
                  {project.inProgress && (
                    <span className="px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}