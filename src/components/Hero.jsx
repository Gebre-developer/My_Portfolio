import React, { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ['Software Engineering Student', 'Frontend Developer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  
  // Safe internal state tracker to catch system variations in asset delivery
  const [imagePath, setImagePath] = useState('/image.png');

  // Completely fixed typing logic: uses a singular effect to handle clean delays
  useEffect(() => {
    let speed = isDeleting ? 40 : 80; // Smooth character speed

    if (!isDeleting && charIndex === roles[roleIndex].length) {
      speed = 2000; // Pauses on the full phrase for 2 seconds so recruiters can read it!
    } else if (isDeleting && charIndex === 0) {
      speed = 400; // Quick pause before jumping to typing the next title
    }

    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <header id="home" className="bg-dark text-white py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 className="text-primary">Hello, I'm</h5>
            <h1 className="display-4 fw-bold">Gebreselassie Sisay</h1>
            
            {/* Added an inline block style to anchor the text frame and stop layout shifting */}
            <h3 className="mb-3 text-info fw-semibold" style={{ minHeight: '40px', display: 'inline-block' }}>
              {currentText}
              <span className="text-white border-end border-2 ms-1 animate-blink" style={{ animation: 'blink 0.7s infinite' }}></span>
            </h3>
            
            <p className="lead text-light-500">
            I build modern, responsive web solutions using HTML, CSS, Bootstrap, and JavaScript. As a developer learning React, I combine clean code with a passion for turning complex, real-world problems into elegant software applications.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg me-2 shadow-sm">View Projects</a>
            <a href="/assets/Gebreselassie-CV.pdf" className="btn btn-outline-light btn-lg" download>Download CV</a>
            <div className="mt-4">
              <a href="#" className="text-white me-3 fs-3"><i className="bi bi-github"></i></a>
              <a href="#" className="text-white me-3 fs-3"><i className="bi bi-linkedin"></i></a>
              <a href="mailto:gebreselassiesisay779@gmail.com" className="text-white fs-3"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </div>
          
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            {/* Fail-safe profile photo setup connected to your public/image.png path */}
            <img 
              src={imagePath} 
              alt="Gebreselassie Sisay" 
              className="rounded-circle img-thumbnail shadow-lg object-fit-cover"
              style={{ width: '320px', height: '320px', backgroundColor: '#343a40' }}
              onError={() => {
                if (imagePath === '/image.png') {
                  setImagePath('/image.PNG');
                } else if (imagePath === '/image.PNG') {
                  setImagePath('./image.png');
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
