import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '077 491 5458',
      href: 'tel:+94774915458'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'buwanekamadushan2001@gmail.com',
      href: 'mailto:buwanekamadushan2001@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/buwaneka-madushan',
      href: 'https://www.linkedin.com/in/buwaneka-madushan-37044b280/'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wider text-gray-800 mb-8">
            GET IN <span className="text-olive-300">TOUCH</span>
          </h2>
          <p className="text-lg font-light text-gray-600 tracking-wide max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center">
                    <Icon size={24} className="text-olive-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">{item.label}</h3>
                    <p className="text-gray-600 font-light">{item.value}</p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={index} className="hover:transform hover:-translate-y-1 transition-transform duration-300">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-olive-100 to-olive-200 rounded-lg p-8">
              <h3 className="text-2xl font-light text-olive-400 mb-4">Let's Create Something Beautiful</h3>
              <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">
                Whether you need a stunning logo, engaging social media content, or a complete brand identity, 
                I'm here to help transform your ideas into compelling visual experiences.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+94774915458"
                  className="px-8 py-3 bg-olive-300 text-white font-light tracking-wider text-sm hover:bg-olive-400 transition-colors duration-300 rounded"
                >
                  CALL NOW
                </a>
                <a
                  href="mailto:buwanekamadushan2001@gmail.com"
                  className="px-8 py-3 border border-olive-300 text-olive-300 font-light tracking-wider text-sm hover:bg-olive-300 hover:text-white transition-all duration-300 rounded"
                >
                  SEND EMAIL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;