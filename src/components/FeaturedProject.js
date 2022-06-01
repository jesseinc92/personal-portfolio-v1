import React from 'react';
import styled from 'styled-components';

const Feature = styled.article`
    position: relative;
    max-width: 1000px;
    min-height: 300px;
    margin: auto;
    margin-bottom: 3rem;
    background-color: lightgray;
    padding: 1.25rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .project-description {
      line-height: 1.5;
    }
    
    @media (min-width: 1001px) {
      margin-bottom: 6rem;

      .project-description {
        width: 35%;
        position: absolute;
        right: 1.5rem;
        top: 45%;
        transform: translateY(-50%);      
      }
    }
`

const Thumbnail = styled.div`
    display: ${({ mobile }) => mobile ? 'none' : 'block' };
    width: 60%;
    ${({ mobile }) => mobile && 'margin: auto;' }

    img {
      width: 100%;
      height: auto;
      border: 1rem solid gray;
    }
`

const TechWrapper = styled.ul`
    background-color: gray;
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    max-width: fit-content;

    @media (min-width: 1001px) {
      margin-left: auto;
    }
`

const TechTag = styled.li`
    list-style: none;
    margin-right: 1rem;
    ${({ mobile }) => mobile && 'margin-bottom: 0.25rem;' }
    ${({ mobile }) => !mobile && 'font-size: 1rem;' }
`

export default function FeaturedProject({ project, mobile }) {
  return(
    <Feature>
      <h3>{ project.name }</h3>
      <Thumbnail mobile={mobile}>
        { project.photo ? 
          <img src={`/static/assets/project-thumbnails/${project.photo}`} alt='project thumbnail' />
          :
          <>
          </>
        }
      </Thumbnail>
      <p className='project-description'>{ project.description }</p>
      <TechWrapper>
        {project.techStack.map((tech, i) => (
          <TechTag mobile={mobile} key={i}>{tech}</TechTag>
        ))}
      </TechWrapper>
    </Feature>
  )
}