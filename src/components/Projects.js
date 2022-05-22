import React from 'react';
import styled from 'styled-components';
import projects from '../projectInfo.json';
import FeaturedProject from './FeaturedProject';

const ProjectsSection = styled.section`
    width: 100%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 5rem;
  `

const ProjectsWrapper = styled.div`
    width: 85vw;
    margin: auto;

    h2 {
      font-size: 2.5rem;
    }
`

export default function Projects({ mobile }) {

  return(
    <ProjectsSection id='projects'>
      <ProjectsWrapper>
        <h2>Featured Projects.</h2>

        <div>
          {projects.featuredProjects.map((project, i) => (
            <FeaturedProject key={i} project={project} mobile={mobile} />
          ))}
        </div>
      </ProjectsWrapper>
    </ProjectsSection>
  )
}