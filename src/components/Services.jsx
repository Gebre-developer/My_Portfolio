import React from 'react';

const Services = () => {
  const services = [
    { name: 'Web Development', icon: 'laptop', color: 'text-primary', desc: 'I build responsive and modern websites using HTML, CSS, Bootstrap, and JavaScript.' },
    { name: 'Responsive Design', icon: 'phone', color: 'text-success', desc: 'Websites optimized for desktop, tablet, and mobile devices.' },
    { name: 'Frontend Development', icon: 'code-slash', color: 'text-danger', desc: 'Clean, interactive, and user-friendly web interfaces.' },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Services</h2>
          <p className="text-muted">What I Can Do</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <i className={`bi bi-${service.icon} display-4 ${service.color}`}></i>
                <h4 className="mt-3">{service.name}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
