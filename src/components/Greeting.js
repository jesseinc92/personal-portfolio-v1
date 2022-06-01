import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 1000px;

    @media (min-width: 1001px) {
      width: 85vw;
      margin: auto;
      padding-top: unset;
    }
  `


const HeadlineWrapper = styled.div`
    width: 60%;
    margin: auto;

    .named-headline {
      font-size: ${({ mobile }) => mobile ? '10vw' : 'clamp(4rem, 5vw, 5.25rem)' };
      ${({ mobile }) => !mobile && 'font-weight: 900;'}
      margin-top: ${({ mobile }) => mobile ? '1rem' : '2rem' };
    }
    
    .subtitle {
      font-size: ${({ mobile }) => mobile ? '8vw' : 'clamp(3rem, 4vw, 4.25rem)' };
      margin-bottom: ${({ mobile }) => mobile ? '1rem' : '2rem' };
    }

    .hero-body {
      line-height: 1.5;
    }
  `


export default function Greeting({ mobile }) {
  return(
    <Hero id='greeting'>
      <HeadlineWrapper mobile={mobile}>
        <p className='salutation'>Hi, my name is</p>
        <h1 className='named-headline'>Jesse Hill</h1>
        <h1 className='subtitle'>I build things on the web.</h1>
        <p className='hero-body'>
          I'm a software engineer specializing in building clean and interactive web experiences. 
          JavaScript, CSS, and tenacity are my favorite tools to help bring websites to life.
        </p>
      </HeadlineWrapper>
    </Hero>
  );
}