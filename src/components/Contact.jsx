import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Let's work together</p>
        </div>
        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card h-100 p-4">
              <h4 className="mb-4">Contact Information</h4>
              <p><i className="bi bi-geo-alt-fill text-primary"></i> Bahir Dar, Ethiopia</p>
              <p><i className="bi bi-envelope-fill text-primary"></i> gebreselassiesisay779@gmail.com</p>
              <p><i className="bi bi-github text-primary"></i> github.com/</p>
              <p><i className="bi bi-linkedin text-primary"></i> linkedin.com/in/</p>
              <p><i className="bi bi-telephone-fill text-primary"></i> +251 91 857 0922</p>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="6" name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
            </form>
            {submitted && <div className="alert alert-success mt-3">Message sent successfully!</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;