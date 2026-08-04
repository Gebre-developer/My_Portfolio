import React, { useState } from 'react';

const Projects = () => {
  const [likes, setLikes] = useState([0, 0, 0]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const projects = [
    { title: 'Portfolio Website', desc: 'Personal portfolio created with HTML, CSS, Bootstrap, and JavaScript.', demo: '#', github: '#' },
    { title: 'Calculator App', desc: 'A simple calculator built using JavaScript.', demo: '#', github: '#' },
    { title: 'To-Do List', desc: 'Task manager with Local Storage support.', demo: '#', github: '#' },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Projects</h2>
          <p className="text-muted">Some of My Recent Work</p>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <a href={project.demo} className="btn btn-primary">Live Demo</a>
                    <a href={project.github} className="btn btn-dark">GitHub</a>
                    <button className="btn btn-outline-danger" onClick={() => handleLike(index)}>
                      <i className="bi bi-heart"></i> {likes[index]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;