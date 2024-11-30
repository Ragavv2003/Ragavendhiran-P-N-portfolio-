import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "CCNA - Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "2023",
    link: "#",
    inProgress: false
  },
  {
    name: "Linux System Administration",
    issuer: "Red Hat",
    date: "2023",
    link: "#",
    inProgress: true
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    link: "#",
    inProgress: true
  }
];

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and ongoing learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6 relative overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 p-4">
                {cert.inProgress ? (
                  <span className="px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full">
                    In Progress
                  </span>
                ) : (
                  <Award className="h-6 w-6 text-green-400" />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
              
              {!cert.inProgress && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">View Certificate</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}