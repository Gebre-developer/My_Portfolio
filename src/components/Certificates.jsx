import React from 'react';

const Certificates = () => {
  const certificates = [
    { name: 'Frontend Development', desc: 'Certificate of completion.' },
    { name: 'JavaScript', desc: 'Certificate of completion.' },
  ];

  return (
    <section id="certificates" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Certificates</h2>
        </div>
        <div className="row">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card p-4">
                <h4>{cert.name}</h4>
                <p>{cert.desc}</p>
                <a href="#" className="btn btn-primary">View Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;