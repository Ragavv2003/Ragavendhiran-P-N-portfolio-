import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Server, Network } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <Terminal className="h-10 w-10 text-green-400" />
            <Shield className="h-10 w-10 text-blue-400" />
            <Server className="h-10 w-10 text-purple-400" />
            <Network className="h-10 w-10 text-yellow-400" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Ragavendhiran P N
          </motion.h1>

          <div className="h-8 mb-6">
            <TypewriterEffect texts={[
              "Network Specialist",
              "Linux Administrator",
              "Security Enthusiast",
              "Problem Solver"
            ]} />
          </div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 text-center max-w-2xl mb-12"
          >
            Passionate about networking, Linux systems, and cybersecurity. 
            Building secure and reliable network infrastructures.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}