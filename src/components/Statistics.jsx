import React from 'react';

const Statistics = () => {
  const stats = [
    { count: '10+', label: 'Projects' },
    { count: '7+', label: 'Skills' },
    { count: '1+', label: 'Years Learning' },
    { count: '100%', label: 'Dedication' },
  ];

  return (
    <section id="stats" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3">
              <h2>{stat.count}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;