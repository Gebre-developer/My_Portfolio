import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'filetype-html', color: 'text-danger' },
    { name: 'CSS3', icon: 'filetype-css', color: 'text-primary' },
    { name: 'Bootstrap', icon: 'bootstrap-fill', color: 'text-purple' },
    { name: 'JavaScript', icon: 'filetype-js', color: 'text-warning' },
    { name: 'Git & GitHub', icon: 'git', color: 'text-danger' },
    { name: 'Responsive Design', icon: 'phone', color: 'text-success' },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Skills</h2>
          <p className="text-muted">Technologies I use</p>
        </div>
        <div className="row text-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-4">
              <i className={`bi bi-${skill.icon} display-4 ${skill.color}`}></i>
              <h4>{skill.name}</h4>
              <p>Expertise in {skill.name.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
