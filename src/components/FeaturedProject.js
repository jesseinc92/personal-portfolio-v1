import React from 'react';
import styled from 'styled-components';

const Feature = styled.article`
    margin-bottom: 3rem;
    background-color: lightgray;
    padding: 1.25rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
`

const Thumbnail = styled.div`
    display: ${({ mobile }) => mobile ? 'none' : 'block' };
    width: 85%;
    margin: auto;

    img {
      width: 100%;
      height: auto;
    }
`

const TechTag = styled.li`
    list-style: none;
    margin-right: 1rem;
    margin-bottom: 0.25rem;
`

export default function FeaturedProject({ project, mobile }) {

  

  return(
    <Feature>
      <h3>{ project.name }</h3>
      <Thumbnail mobile={mobile}>
        <img src={`/static/assets/project-thumbnails/${project.photo}`} alt='project thumbnail' />
      </Thumbnail>
      <p>{ project.description }</p>
      <ul>
        {project.techStack.map((tech, i) => (
          <TechTag key={i}>{tech}</TechTag>
        ))}
      </ul>
    </Feature>
  )
}