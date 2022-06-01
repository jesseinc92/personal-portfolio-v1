import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    width: ${({ mobile }) => mobile ? '100%' : '80%' };
    margin: auto;
`

const AboutWrapper = styled.div`
    position: relative;

    h2 {
      font-size: clamp(40px, 2.857vw, 48px);
      margin-bottom: 1rem;
    }
`

const BioWrapper = styled.div`
    max-width: ${({ mobile }) => mobile ? '1000px' : '800px' };
    padding: 1.25rem;
    background-color: lightgray;

    p {
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
`

const SkillsWrapper = styled.div`
    background-color: gray;
    padding: 1rem;
    margin-top: 2rem;
    max-width: fit-content;

    p {
      margin: 0rem auto 1rem;
    }

    ul {
      li {
        margin-left: 1rem;
        margin-bottom: 0.5rem;
      }
    }

    @media (min-width: 1001px) {
      margin-left: 25%;
    }
`

const HeadshotWrapper = styled.div`
    width: ${({ mobile }) => mobile ? '85%' : '33%' };
    max-width: 500px;
    margin: auto;
    margin-top: 2rem;

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      margin: auto;

      border: 1rem solid gray;
    }

    @media (min-width: 1001px) {
      margin-left: 60%;
    }
`

export default function About({ mobile }) {
  return(
    <AboutSection id='about' mobile={mobile}>
      <AboutWrapper>
        <h2>About Me</h2>
        <BioWrapper mobile={mobile}>
          <p>
            A graduate of The Ohio State University, I spent several years building valuable skills to enhance
            my professional life. From planning and logistics at a travel agency, to investigation and stakeholder communication at an insurance company,
            I've consistently honed the skills needed to become a valuable and productive member of any team.
          </p>

          <p>
            Most recently, I've completed an intensive software engineering bootcamp with Springboard, during which I 
            completed several in-depth capstone projects to showcase my mastery of front-end and back-end web development concepts. 
          </p>

          <p>
            Even though the bootcamp is over, I haven't slowed down, building personal projects to explore the web development space and create
            smooth and interactive user experiences while adhering to software engineering best practices.
          </p>
        </BioWrapper>
<HeadshotWrapper mobile={mobile}>
          <img src='/static/assets/headshot.jpg' alt='Me!' />
        </HeadshotWrapper>
        <SkillsWrapper mobile={mobile}>
          <p>Here are a few technologies I've been using recently.</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Three.js</li>
            <li>Node.js / Express</li>
            <li>Python / Flask</li>
            <li>PostgreSQL</li>
          </ul>
        </SkillsWrapper>
        
        
      </AboutWrapper>
    </AboutSection>
  )
}