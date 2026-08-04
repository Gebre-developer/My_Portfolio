import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Gebreselassie Sisay</h3>
            <p>Software Engineering Student passionate about web development and technology.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <a href="#" className="text-white fs-3 me-3"><i className="bi bi-github"></i></a>
            <a href="#" className="text-white fs-3 me-3"><i className="bi bi-linkedin"></i></a>
            <a href="mailto:gebreselassiesisay779@gmail.com" className="text-white fs-3 me-3"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">© 2026 Gebreselassie Sisay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;