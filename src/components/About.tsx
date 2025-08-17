import React from 'react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Graphic Design',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'Logo Design', 'Brand Identity', 'Typography', 'Color Theory', 'Layout Design', 'Print Design']
    },
    {
      category: 'Digital Marketing',
      items: ['Social Media Marketing', 'Content Creation', 'Campaign Management', 'Facebook Ads', 'Instagram Marketing', 'Google Analytics', 'SEO Basics', 'Email Marketing', 'Influencer Marketing', 'Brand Strategy']
    },
    {
      category: 'Creative Skills',
      items: ['Visual Storytelling', 'Creative Concept Development', 'Brand Positioning', 'Market Research', 'Target Audience Analysis', 'Trend Analysis', 'Photography Direction', 'Video Graphics']
    }
  ];

  const experience = [
    {
      company: 'Canbarra (Pvt) Ltd',
      position: 'Graphic Designer & Digital Marketing Manager',
      period: '01/2025 - Present',
      responsibilities: [
        'Designed creative and visually engaging marketing materials, including social media posts, banners, and promotional content',
        'Developed brand identity elements that increased brand recognition and engagement',
        'Planned, executed, and optimized digital marketing campaigns across social media platforms',
        'Managed paid ad campaigns, increasing online reach and sales conversions',
        'Engaged with online community to strengthen customer relationships and brand loyalty'
      ]
    },
    {
      company: 'Sri Lanka Port Authority, Colombo',
      position: 'Trainee at Information System Division',
      period: '11/2023 - 05/2024',
      responsibilities: []
    },
    {
      company: 'Courtaulds Clothing Lanka (Pvt) Ltd',
      position: 'Trainee at IT Division',
      period: '09/2023 - 11/2023',
      responsibilities: []
    }
  ];

  const projects = [
    {
      title: 'Graphic Design Portfolio',
      year: '2024',
      technologies: 'Adobe Illustrator, Photoshop, Design Principles'
    },
    {
      title: 'Digital Marketing Content Creation',
      year: '2024',
      technologies: 'Canva, Social Media Design, Visual Communication'
    },
    {
      title: 'Brand Identity Design Practice',
      year: '2023',
      technologies: 'Adobe Illustrator, Typography, Color Theory'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: 'url(/assets/About/Background.jpg)' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-4xl font-light tracking-wider text-gray-800 mb-8">
                ABOUT <span className="text-olive-300">ME</span>
              </h2>
              <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg mx-auto lg:mx-0">
                <img
                  src="/assets/About/Me.jpg"
                  alt="Buwaneka Madushan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-4">Professional Summary</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Creative graphic designer and digital marketing specialist with a passion for visual storytelling and brand development. 
                Experienced in creating compelling visual content that drives engagement and builds strong brand identities. 
                Dedicated to helping businesses communicate their unique value through innovative design and strategic marketing approaches.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-6">Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-olive-200 pl-6">
                    <h4 className="text-lg font-medium text-gray-800">{exp.position}</h4>
                    <p className="text-olive-300 font-light">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    {exp.responsibilities.length > 0 && (
                      <ul className="space-y-2 text-sm text-gray-600">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-olive-300 rounded-full mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-800">BSc (Hons) in Information Technology</h4>
                  <p className="text-olive-300 font-light">SLTC Research University, Padukka, Colombo</p>
                  <p className="text-sm text-gray-500">02/2020 - 01/2025 | CGPA: 3.0</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">G.C.E. Advance Level</h4>
                  <p className="text-olive-300 font-light">St/Thomas' College, Matale</p>
                  <p className="text-sm text-gray-500">2019</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">G.C.E. Ordinary Level</h4>
                  <p className="text-olive-300 font-light">Mt/Christ Church College, Matale</p>
                  <p className="text-sm text-gray-500">2016</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-gray-800 mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-olive-100 text-olive-400 text-sm font-light rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-6">Projects</h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-olive-200 pl-6">
                    <h4 className="text-lg font-medium text-gray-800">{project.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{project.year}</p>
                    <p className="text-sm text-olive-300">{project.technologies}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-olive-300 mb-6">Certifications & Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Certifications</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Applied Information Technology (2017) - Sri Lanka Telecom Training Center</li>
                    <li>• Foundations of User Experience (UX) Design (2022) - Coursera</li>
                    <li>• Cloud Computing Applications, Cloud Systems and Infrastructure (2023) - Coursera</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Activities</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Vice President of University Media Unit</li>
                    <li>• Committee Member of LETHALBOTS 2022 robot competition</li>
                    <li>• Member of University IT Society</li>
                    <li>• Member of University IEEE Club</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;