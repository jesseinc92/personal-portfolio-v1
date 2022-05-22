import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 900px;

    @media (min-width: 767px) {
      width: 85vw;
      padding-top: unset;
    }
  `


const HeadlineWrapper = styled.div`
    width: 60%;
    margin: auto;

    .named-headline {
      font-size: ${({ mobile }) => mobile ? '10vw' : 'clamp(4rem, 5vw, 5.25rem)' };
      ${({ mobile }) => !mobile && 'font-weight: 900;'}
      ${({ mobile }) => !mobile && 'margin-top: 2rem;' }
    }
    
    .subtitle {
        font-size: ${({ mobile }) => mobile ? '8vw' : 'clamp(3rem, 4vw, 4.25rem)' };
        ${({ mobile }) => !mobile && 'margin-bottom: 2rem;' }
      }
  `


export default function Greeting({ mobile }) {
  return(
    <Hero id='greeting'>
      <HeadlineWrapper mobile={mobile}>
        <p className='salutation'>Hi, my name is</p>
        <h1 className='named-headline'>Jesse Hill.</h1>
        <h2 className='subtitle'>I build things on the web.</h2>
        <p>
          I'm a software engineer specializing in building interactive web experiences. 
          JavaScript, CSS, and tenacity are my favorite tools to help bring engaging websites to life.
        </p>
      </HeadlineWrapper>
    </Hero>
  );
}