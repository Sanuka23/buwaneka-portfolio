import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-light tracking-wider text-gray-800 mb-4">
              BUWANEKA
              <br />
              <span className="text-olive-300">MADUSHAN</span>
            </h1>
            <p className="text-lg font-light text-gray-600 tracking-wide leading-relaxed max-w-lg">
              Graphic Designer & Digital Marketing Specialist creating meaningful visual experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-olive-300 text-white font-light tracking-wider text-sm hover:bg-olive-400 transition-colors duration-300"
            >
              VIEW WORK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-olive-300 text-olive-300 font-light tracking-wider text-sm hover:bg-olive-300 hover:text-white transition-all duration-300"
            >
              CONTACT
            </button>
          </div>

          <div className="space-y-3 text-sm font-light text-gray-600">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-olive-300" />
              <span>077 491 5458</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-olive-300" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/About/Me.jpg"
              alt="Buwaneka Madushan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;