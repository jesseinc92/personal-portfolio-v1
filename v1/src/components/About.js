import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    width: 100%;
    //width: ${({ mobile }) => mobile ? '100%' : '80%' };
    margin: auto;
    margin-top: 3rem;
    
    h2 {
      font-size: clamp(40px, 3.25vw, 54px);
      margin-bottom: 2rem;
      border-bottom: 5px solid var(--gray);
    }

    @media (min-width: 1001px) {
      h2 {
        margin-left: 10%;
      }
    }
`

const AboutWrapper = styled.div`
    position: relative;
    flex-wrap: wrap;
    align-items: center;

    @media (min-width: 1001px) {
      display: grid;
      grid-template-columns: 10% repeat(6, 1fr) 10%;
      grid-template-rows: repeat(4, fit-content(10rem));
    }
`

const BioWrapper = styled.div`
    //${({ mobile }) => !mobile && 'width: 65%;' }
    max-width: ${({ mobile }) => mobile ? '1000px' : '100%' };
    padding: 1.25rem;
    color: white;
    background-color: rgba(110, 120, 135, 0.25);

    p {
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    @media (min-width: 1001px) {
      grid-column: 2 / 6;
      padding-left: 2rem;
      padding-right: 2rem;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
`

const SkillsWrapper = styled.div`
    background-color: var(--red);
    padding: 1rem;
    margin-top: 2rem;
    //max-width: fit-content;
    color: white;
    //border-radius: 0.5rem;

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
      //padding-left: 5rem;
      //padding-right: 4rem;
      margin-top: 0;
      grid-column: 5 / 8;
      max-width: 100%;
      
      ul {
        display: flex;
        flex-wrap: wrap;
        max-width: inherit;

        li {
          width: 40%;
        }

        li::marker {
        }
      }
    }
`

const HeadshotWrapper = styled.div`
    width: ${({ mobile }) => mobile ? '85%' : '100%' };
    max-width: 500px;
    margin: auto;
    display: flex;
    ${({ mobile }) => mobile && 'margin-top: 2rem;' }

    img {
      width: 100%;
      //max-width: 500px;
      height: auto;
      margin: auto;
    }

    grid-column: 6 / 8;
`

export default function About({ mobile }) {
  return(
    <AboutSection id='about' mobile={mobile}>
        <h2>About Me</h2>
      <AboutWrapper mobile={mobile}>
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