import React, { useRef, useState } from 'react';
import { FaCode, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';

const skills = [
  {
    title: 'Languages & Frameworks',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'Flask', level: 88 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'Technologies',
    icon: <FaTools />,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'REST API', level: 82 },
      { name: 'Linux', level: 70 },
    ],
  },
  {
    title: 'Tools & Software',
    icon: <FaDatabase />,
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Jupyter Notebook', level: 88 },
      { name: 'Figma', level: 85 },
      { name: 'Excel', level: 80 },
      { name: 'Power BI', level: 75 },
    ],
  },
  {
    title: 'Concepts & Methods',
    icon: <FaPalette />,
    skills: [
      { name: 'CRUD Operations', level: 88 },
      { name: 'SDLC', level: 85 },
      { name: 'User Authentication', level: 90 },
      { name: 'OOP', level: 85 },
      { name: 'Version Control', level: 88 },
    ],
  },
];

const SkillCard = ({ title, icon, skills }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative cursor-crosshair overflow-hidden bg-gradient-to-br from-[#10131a] to-[#0f1115] p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-[1.015]"
    >
      {/* Mouse glow effect */}
      <div
        className={`pointer-events-none absolute md:w-50 md:h-50 w-40 h-40 rounded-full 
                    bg-[radial-gradient(circle,_#ffffffcc,_#00ffaa88,_#00000000)] 
                    blur-[100px] transition-opacity duration-300 ease-in-out
                    ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: position.y - 160,
          left: position.x - 160,
        }}
      />

      {/* Card content */}
      <div className="flex z-10 items-center gap-4 mb-4">
        <div className="text-3xl bg-gradient-to-br from-[#618101] to-green-700 text-white rounded-xl p-3 shadow-lg">
          {icon}
        </div>
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>
      {skills.map((item, i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between text-white text-sm mb-1">
            <span>{item.name}</span>
            <span>{item.level}%</span>
          </div>
          <div className="h-2 bg-black/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#618101] to-green-700 rounded-full transition-all duration-500"
              style={{ width: `${item.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="min-h-screen bg-[#0a0d14] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
