import React, { useState } from 'react';

const About = () => {
  // Safe internal state tracker to catch system variations in asset delivery
  const [imagePath, setImagePath] = useState('/image.png');

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">Who I am</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            {/* Fail-safe image container that automatically cycles paths on render error */}
            <img 
              src={imagePath} 
              alt="Gebreselassie Sisay" 
              className="rounded-circle img-thumbnail shadow object-fit-cover"
              style={{ width: '320px', height: '320px', backgroundColor: '#e9ecef' }}
              onError={() => {
                if (imagePath === '/image.png') {
                  // Fallback 1: Test capitalized system extensions (.PNG)
                  setImagePath('/image.PNG');
                } else if (imagePath === '/image.PNG') {
                  // Fallback 2: Test deep relative assets path in case public folder maps incorrectly
                  setImagePath('./image.png');
                }
              }}
            />
          </div>
          <div className="col-lg-6">
            <h3>Hello!</h3>
            <p>I'm Gebreselassie Sisay, a Software Engineering student at Bahir Dar Institute of Technology.</p>
            <p>I enjoy creating responsive websites and learning new technologies every day. My goal is to become a Full Stack Developer and build software that makes a positive impact.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🎓 Software Engineering Student</li>
              <li className="list-group-item">📍 Bahir Dar, Ethiopia</li>
              <li className="list-group-item">💻 Frontend Developer</li>
              <li className="list-group-item">🌐 HTML, CSS, Bootstrap, JavaScript, React</li>
              <li className="list-group-item">📧 gebreselassiesisay779@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
