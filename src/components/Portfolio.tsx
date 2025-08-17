import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { projects } from '../data/projects';
import type { Category, Project } from '../types/portfolio';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const categories = [
    { id: 'all' as Category, label: 'Random' },
    { id: 'logo' as Category, label: 'Logo Design' },
    { id: 'poster' as Category, label: 'Post Designs' },
    { id: 'vector' as Category, label: 'Vector Art' }
  ];

  // Function to get random images from all categories (for "Random" view)
  const getRandomImages = (count: number = 8) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(project => project.image);
  };

  // Initialize and rotate images for "Random" category
  useEffect(() => {
    if (activeCategory === 'all') {
      // Set initial random images
      setCurrentImages(getRandomImages(8));

      // Rotate images every 4 seconds
      const interval = setInterval(() => {
        setCurrentImages(getRandomImages(8));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [activeCategory]);

  const filteredProjects = activeCategory === 'all' 
    ? [] // We'll show random slideshow instead of all projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider text-gray-800 mb-8">
            MY <span className="text-olive-300">PORTFOLIO</span>
          </h2>
          
          <div className="flex justify-center space-x-8 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`text-sm font-light tracking-wider transition-colors duration-300 hover:text-olive-300 ${
                  activeCategory === category.id
                    ? 'text-olive-300 border-b-2 border-olive-300 pb-1'
                    : 'text-gray-600'
                }`}
              >
                {category.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Show random slideshow for "Random" category */}
        {activeCategory === 'all' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {currentImages.map((image, index) => (
                <div 
                  key={`${image}-${index}`}
                  className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <img
                    src={image}
                    alt={`Portfolio piece ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-light text-sm">
                Images refresh automatically • Showcasing logos, posts, and vector designs
              </p>
            </div>
          </>
        )}

        {/* Show filtered projects for specific categories */}
        {activeCategory !== 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{project.description}</p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-olive-100 text-olive-400 text-xs font-light rounded-full">
                      {project.category === 'logo' ? 'Logo Design' : 
                       project.category === 'poster' ? 'Post Designs' : 'Vector Art'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory !== 'all' && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-light">No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-90vh overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-medium text-gray-800">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-block px-3 py-1 bg-olive-100 text-olive-400 text-sm font-light rounded-full">
                  {selectedProject.category === 'logo' ? 'Logo Design' : 
                   selectedProject.category === 'poster' ? 'Post Designs' : 'Vector Art'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;