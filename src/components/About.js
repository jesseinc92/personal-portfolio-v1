import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  width: 100%;
`

const AboutWrapper = styled.div`
    padding: 1.25rem;
    background-color: lightgray;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .bio-wrapper {
      p {
        margin-bottom: 1rem;
      }
    }
`

const SkillsWrapper = styled.div`
    p {
      margin: 3rem auto 1rem;
    }

    ul {
      li {
        margin-left: 1rem;
      }
    }
`

const HeadshotWrapper = styled.div`
    width: ${({ mobile }) => mobile ? '85%' : '25%' };
    margin: auto;
    margin-top: 2rem;

    img {
      width: 100%;
      height: auto;
    }
`


export default function About({ mobile }) {
  return(
    <AboutSection id='about'>
      <AboutWrapper>
        <div className='bio-wrapper'>
          <h2>About Me.</h2>

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
        </div>

        <SkillsWrapper>
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
        
        <HeadshotWrapper mobile={mobile}>
          <img src='/static/assets/headshot.jpg' alt='Me!' />
        </HeadshotWrapper>
      </AboutWrapper>
    </AboutSection>
  )
}