import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Timeline } from './components/Timeline';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="bottom-right" />
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="blog">
          <BlogPreview />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ragavendhiran P N. All rights reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;