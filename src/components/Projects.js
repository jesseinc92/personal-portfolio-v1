import React from 'react';
import styled from 'styled-components';
import projects from '../projectInfo.json';

export default function Projects() {

  const Projects = styled.section`
    width: 100vw;
    max-width: 1440px;
    margin: auto;
  `

  console.log(projects);

  return(
    <Projects>
      <h1>Projects</h1>
    </Projects>
  )
}