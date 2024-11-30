import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding Network Security Fundamentals",
    excerpt: "A comprehensive guide to network security basics and best practices...",
    author: "Ragavendhiran P N",
    date: "March 15, 2024",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Linux Server Hardening Tips",
    excerpt: "Essential security measures to protect your Linux servers from threats...",
    author: "Ragavendhiran P N",
    date: "March 10, 2024",
    readTime: "7 min read",
    link: "#"
  },
  {
    title: "Automating Network Tasks with Python",
    excerpt: "Learn how to automate common networking tasks using Python scripts...",
    author: "Ragavendhiran P N",
    date: "March 5, 2024",
    readTime: "6 min read",
    link: "#"
  }
];

export function BlogPreview() {
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
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and experiences in networking, Linux, and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}