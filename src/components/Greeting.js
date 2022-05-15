import React from 'react';
import styled from 'styled-components';

export default function Greeting() {

  const Greeting = styled.section`
    width: 100vw;
    max-width: 1440px;
    margin: auto;

    height: 100vh;
    max-height: 900px;
    
    
  `


  return(
    <Greeting>
      <h1>Hi, my name is Jesse!</h1>
      <p>
        I'm a software engineer specializing in building interactive web experiences. 
        JavaScript, CSS, and tenacity are my favorite tools to help bring engaging websites to life.
      </p>
    </Greeting>
  );
}