import React from 'react';
import './About.css';

const About = () => (
  <section className="about section">
    <h2>About Us</h2>
    <p>
      We are at the forefront of the electric transportation revolution, committed to building a cleaner, smarter, and more connected future. Our company was founded on the belief that sustainable technology should be accessible, efficient, and designed to improve everyday life.
    </p>
    <p>
      Our mission is to empower individuals and communities by offering cutting-edge electric mobility solutions that reduce environmental impact without compromising on performance or style. Whether it’s urban commuting or long-distance travel, we aim to transform how the world moves.
    </p>
    <p>
      Since our inception in 2020, we have successfully deployed over 10,000 electric vehicles across 30+ countries. Our vehicles are recognized for their superior engineering, reliability, and innovative features, helping us set new benchmarks in the global EV landscape.
    </p>

    <h3>Our Core Values</h3>
    <ul className="about-list">
      <li>
        <strong>Innovation:</strong> We continuously push boundaries, investing in research and development to create smarter, safer, and more efficient mobility solutions.
      </li>
      <li>
        <strong>Quality:</strong> From materials to manufacturing, we hold ourselves to the highest standards to ensure excellence in every vehicle we produce.
      </li>
      <li>
        <strong>Sustainability:</strong> Every decision we make is guided by our responsibility to the planet. We strive to minimize our carbon footprint and promote clean energy use.
      </li>
      <li>
        <strong>Community:</strong> We believe in creating positive social impact by supporting local economies, fostering inclusivity, and making sustainable mobility a global movement.
      </li>
    </ul>
  </section>
);

export default About;
