import React from 'react';
import styled from 'styled-components';

const Feature = styled.article`
    position: relative;
    max-width: 1000px;
    min-height: 300px;
    margin: auto;
    margin-bottom: 3rem;
    ${({ mobile }) => mobile && 'padding: 1.25rem;' }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;

      grid-column: 1 / 6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    
    @media (min-width: 1001px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, fit-content(10rem));

      margin-bottom: 6rem;
      margin-left: ${({ index }) => index % 2 === 0 ? '0' : 'auto' };
    }
`

const ProjectDescription = styled.div`
    position: relative;
    line-height: 1.5;
    color: white;
    
    p {
      padding: 1rem;
    }

    @media (min-width: 1001px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 2rem;
      width: 100%;
      height: 100%;
    }

    grid-column: 4 / 6;
    grid-row: 2 / 3;

    background-color: rgba(110, 120, 135, 0.25);
`

const Thumbnail = styled.a`
    display: flex;
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }

    grid-column: 1 / 4;
    grid-row: 2 / 3;
`

const TechWrapper = styled.ul`
    padding: 1rem;
    ${({ mobile }) => mobile && 'margin-top: 1rem;' }
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1001px) {
      margin-left: auto;
    }

    grid-column: 3 / 6;
    grid-row: 3 / 4;
`

const TechTag = styled.li`
    list-style: none;
    margin-right: ${({ mobile }) => mobile ? '1rem' : '1.5rem' };
    ${({ mobile }) => mobile && 'margin-bottom: 0.25rem;' }
    ${({ mobile }) => !mobile && 'font-size: 1rem;' }
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--gold);
    //border-radius: 0.25rem;
    color: var(--gold);
    letter-spacing: 1px;
    background-color: rgba(251, 194, 13, 0.1);

    &:last-child {
      margin-right: 0;
    }
`

export default function FeaturedProject({ index, project, mobile }) {
  const imageSrc = `/static/assets/project-thumbnails/${project.photo}`;

  return(
    <Feature mobile={mobile}>
      <h3>
        <a href={`${ project.deployedUrl }`}>
          { project.name }
        </a>
      </h3>
      <Thumbnail mobile={mobile} href={`${ project.deployedUrl }`} target='_blank'>
        { project.photo ? 
          <img src={imageSrc} alt='project thumbnail' />
          :
          <>
          </>
        }
      </Thumbnail>
      <ProjectDescription mobile={mobile} mobileImage={imageSrc}>
        <p>{ project.description }</p>
      </ProjectDescription>
      <TechWrapper>
        {project.techStack.map((tech, i) => (
          <TechTag mobile={mobile} key={i}>{tech}</TechTag>
        ))}
      </TechWrapper>
    </Feature>
  )
}