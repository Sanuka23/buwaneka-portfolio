import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Function to get random images from all categories
  const getRandomImages = (count: number = 12) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(project => project.image);
  };

  // Initialize and rotate images
  useEffect(() => {
    // Set initial random images
    setCurrentImages(getRandomImages(12));

    // Rotate images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImages(getRandomImages(12));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider text-gray-800 mb-8">
            MY <span className="text-olive-300">PORTFOLIO</span>
          </h2>
          <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
            A dynamic showcase of my creative work spanning logo design, digital marketing content, and vector art
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        <div className="text-center mt-16">
          <p className="text-gray-500 font-light text-sm">
            Images refresh automatically • Showcasing logos, posts, and vector designs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;