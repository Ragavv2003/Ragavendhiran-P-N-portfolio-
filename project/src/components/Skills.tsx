import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, Server, Shield, Terminal, Database, Cloud } from 'lucide-react';

const skills = [
  {
    category: "Networking",
    icon: Network,
    items: [
      { name: "TCP/IP", level: 90 },
      { name: "Routing & Switching", level: 85 },
      { name: "Network Security", level: 80 },
      { name: "VPNs & Tunneling", level: 75 }
    ]
  },
  {
    category: "Linux Administration",
    icon: Terminal,
    items: [
      { name: "System Administration", level: 85 },
      { name: "Shell Scripting", level: 80 },
      { name: "Service Management", level: 85 },
      { name: "Performance Tuning", level: 75 }
    ]
  },
  {
    category: "Security",
    icon: Shield,
    items: [
      { name: "Network Security", level: 80 },
      { name: "Firewall Configuration", level: 85 },
      { name: "Security Auditing", level: 75 },
      { name: "Incident Response", level: 70 }
    ]
  },
  {
    category: "Infrastructure",
    icon: Server,
    items: [
      { name: "Docker", level: 80 },
      { name: "Ansible", level: 75 },
      { name: "Load Balancing", level: 70 },
      { name: "High Availability", level: 75 }
    ]
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in networking, Linux systems, and security technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, categoryIndex) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-700 rounded-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <Icon className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                <div className="space-y-4">
                  {skill.items.map((item, index) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-gray-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          className="bg-blue-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}