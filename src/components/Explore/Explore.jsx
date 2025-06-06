import React from 'react';
import './Explore.css';

const features = [
  {
    icon: '🚗',
    title: 'Electric Vehicles',
    subtitle: 'Drive into the future',
    desc: 'Choose from a wide range of cutting-edge electric vehicles designed for efficiency, sustainability, and style.',
    action: 'Discover Models →'
  },
  {
    icon: '🔌',
    title: 'Charging Stations',
    subtitle: 'Power where you need it',
    desc: 'Access a growing nationwide network of fast-charging stations for your convenience and peace of mind.',
    action: 'Find Stations →'
  },
  {
    icon: '🔋',
    title: 'Battery Technology',
    subtitle: 'Stay powered longer',
    desc: 'Explore our latest battery innovations offering greater range, faster charging, and longer lifespan.',
    action: 'Learn More →'
  }
];

const Explore = () => (
  <section className="explore section">
    <h2>Explore Our Features</h2>
    <p className="explore-subtext">
      From advanced electric vehicles to cutting-edge charging solutions, we empower your journey to be cleaner and smarter.
    </p>
    <div className="feature-container">
      {features.map((f, idx) => (
        <div key={idx} className="feature-card">
          <div className="feature-icon">{f.icon}</div>
          <h3 className="feature-title">{f.title}</h3>
          <h4 className="feature-subtitle">{f.subtitle}</h4>
          <p className="feature-desc">{f.desc}</p>
          <button className="feature-action">{f.action}</button>
        </div>
      ))}
    </div>
  </section>
);

export default Explore;
