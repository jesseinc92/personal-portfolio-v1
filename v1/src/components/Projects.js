import React from 'react';
import styled from 'styled-components';
import projects from '../projectInfo.json';
import FeaturedProject from './FeaturedProject';

const ProjectsSection = styled.section`
    margin: auto;
    margin-top: ${({ mobile }) => mobile ? '2rem' : '10rem' };
    margin-bottom: 5rem;
  `

const ProjectsWrapper = styled.div`
    position: relative;
    width: ${({ mobile }) => mobile ? '100%' : '80%' };
    margin: auto;

    h2 {
      font-size: clamp(40px, 3.25vw, 54px);
      margin-bottom: ${({ mobile }) => mobile ? '2rem' : '5rem' };
      border-bottom: 5px solid var(--gray);
    }
`

export default function Projects({ mobile }) {

  return(
    <ProjectsSection id='projects' mobile={mobile}>
      <ProjectsWrapper mobile={mobile}>
        <h2>Featured Projects</h2>

        <div>
          {projects.featuredProjects.map((project, i) => (
            <FeaturedProject key={i} index={i} project={project} mobile={mobile} />
          ))}
        </div>
      </ProjectsWrapper>
    </ProjectsSection>
  )
}