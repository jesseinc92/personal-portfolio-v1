import React from 'react';
import styled from 'styled-components';

export default function About() {

  const About = styled.section`
    width: 100vw;
    max-width: 1440px;
    margin: auto;
  `

  return(
    <About>
      <h1>About Me</h1>

      <p>
        A graduate of The Ohio State University, I spent my first several years in the workforce building valuable skills to enhance
        my professional life. From planning and logistics at a travel agency, to investigation and stakeholder communication at an insurance company,
        I've consistently honed the skills needed to become a valuable and productive member of any team.
      </p>

      <p>
        Most recently, I've completed an intensive software engineering bootcamp with Springboard where I completed over 700 hours of course material.
        Additionally, I completed several in-depth capstone projects to showcase my mastery of front-end and back-end web development concepts. 
      </p>

      <p>
        Even though the bootcamp is over, I haven't slowed down, completing several personal projects to explore the web development space and create
        smooth and interactive user experiences while adhering to software engineering best practices.
      </p>

      <p>Here are a few technologies I've been using recently.</p>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Three.js</li>
        <li>Node.js / Express</li>
        <li>Python / Flask</li>
        <li>PostgreSQL</li>
      </ul>
    </About>
  )
}