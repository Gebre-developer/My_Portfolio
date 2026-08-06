import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Instantly simulates a successful server response
    setTimeout(() => {
      setStatus({ type: 'success', message: '✅ Message successfully submitted!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      
      // Clears the success banner automatically after 5 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 800);
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
              <p><i className="bi bi-github text-primary"></i> github.com/Gebre-developer</p>
              <p><i className="bi bi-linkedin text-primary"></i> linkedin.com/in/gebreselassie-sisay-383b9b418</p>
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
              <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status.message && (
              <div className={`alert alert-${status.type} mt-3`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
