import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineEvents = [
  {
    year: "2024",
    title: "Network Security Specialist",
    company: "TechCorp Solutions",
    type: "work",
    description: "Leading network security initiatives and implementing robust security measures."
  },
  {
    year: "2023",
    title: "CCNA Certification",
    company: "Cisco",
    type: "certification",
    description: "Achieved Cisco Certified Network Associate certification."
  },
  {
    year: "2022",
    title: "Network Administrator",
    company: "DataNet Systems",
    type: "work",
    description: "Managed enterprise network infrastructure and implemented automation solutions."
  },
  {
    year: "2021",
    title: "B.Tech in Computer Science",
    company: "Tech University",
    type: "education",
    description: "Specialized in networking and security. Graduated with honors."
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return Briefcase;
    case 'education':
      return GraduationCap;
    case 'certification':
      return Award;
    default:
      return Briefcase;
  }
};

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience Timeline</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in networking and system administration
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = getIcon(event.type);
              return (
                <motion.div
                  key={event.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <span className="text-blue-400 text-sm font-semibold">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{event.company}</p>
                      <p className="text-gray-500 mt-2">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}