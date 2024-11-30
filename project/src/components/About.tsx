import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Shield, Terminal } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Server,
      title: "Network Infrastructure",
      description: "Experienced in designing and maintaining robust network architectures"
    },
    {
      icon: Terminal,
      title: "Linux Administration",
      description: "Proficient in managing and optimizing Linux systems and services"
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Dedicated to implementing strong security practices and protocols"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about networking and system administration, with a growing interest in cybersecurity.
            I focus on building reliable and secure infrastructure solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-700 p-8 rounded-lg"
        >
          <div className="prose prose-lg text-gray-400 max-w-none">
            <p className="mb-4">
              With a strong foundation in networking and Linux systems, I'm constantly expanding my knowledge
              in cybersecurity and modern infrastructure technologies. My journey involves hands-on experience
              with various networking protocols, system administration tasks, and security implementations.
            </p>
            <p>
              I believe in the power of continuous learning and staying updated with the latest developments
              in technology. Currently focusing on advanced networking concepts, security certifications,
              and expanding my expertise in cloud infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}