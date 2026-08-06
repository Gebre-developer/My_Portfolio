import React from 'react';

const Experience = () => {
  const experiences = [
    { year: '2025', desc: 'Started learning HTML and CSS.' },
    { year: '2026', desc: 'Learned JavaScript, Bootstrap, Git, and GitHub.' },
    { year: 'Present', desc: 'Building projects and improving frontend development skills via React.' },
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Learning Journey</h2>
        </div>
        {experiences.map((exp, index) => (
          <div key={index} className="card p-4 mb-3">
            <h5>{exp.year}</h5>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;