import React from 'react';
import styled from 'styled-components';

export default function Nav() {

  const Nav = styled.nav`
    position: absolute;
    top: 0;
    right: 5rem;
  `

  const Link = styled.a`
  
  `

  return(
    <Nav>
      <Link href='#'>About</Link>
      <Link href='#'>Projects</Link>
      <Link href='#'>Contact</Link>
    </Nav>
  )
}