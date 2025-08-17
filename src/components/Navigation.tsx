import React from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-light tracking-wider transition-colors duration-300 hover:text-olive-300 ${
                  activeSection === item.id
                    ? 'text-olive-300 border-b-2 border-olive-300 pb-1'
                    : 'text-gray-600'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;