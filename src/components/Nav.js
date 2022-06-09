import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs'

const Navbar = styled.nav`
    position: absolute;
    //position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    height: ${({ mobile }) => mobile ? '5rem' : '6rem' };
    display: grid;
    grid-template-columns: ${({ mobile }) => mobile ? 'repeat(5, 1fr)' : 'repeat(12, 1fr)' };
    //background-color: var(--space-black);
  `

const Icon = styled.h1`
    margin: auto;
    font-size: 3rem;
`

const MenuButton = styled.div`
    grid-column: 5 / 6;
    margin: auto;
    @media (min-width: 1001px) {
      display: none;
    }
`

const CloseButton = styled.div`
    position: absolute;
    margin: 1.75rem;
    top: 0;
    right: 0;
    @media (min-width: 1001px) {
      display: none;
    }
`

const LinkWrapper = styled.div`
    position: ${({ mobile }) => mobile ? 'fixed' : 'static' };
    top: 0;
    right: -100%;
    width: ${({ mobile }) => mobile ? '100vw' : '100%' };
    height: 100${({ mobile }) => mobile ? 'vh' : '%' };
    display: flex;
    flex-direction: ${({ mobile }) => mobile ? 'column' : 'row' };
    justify-content: ${({ mobile }) => mobile ? 'center' : 'space-around' };
    align-items: center;
    background-color: ${({ mobile }) => mobile ? 'var(--red)' : 'rgba(0, 0, 0, 0)' };

    ${({ mobile }) => !mobile && 'grid-column: 9 / 13;'}
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    margin: 1rem;
    font-size: ${({ mobile }) => mobile ? '1.75rem' : 'inherit' };
    padding: 0.25rem 0.75rem;
`

export default function Nav({ mobile }) {
  const menuOpenHandler = () => {
    anime({
      targets: '#mobile-menu',
      translateX: [0, '-100%'],
      easing: 'easeInOutSine',
      duration: 250
    })
  }

  const menuCloseHandler = () => {
    anime({
      targets: '#mobile-menu',
      translateX: ['-100%', 0],
      easing: 'linear',
      duration: 250
    })
  }

  const menuLinkHandler = () => {
    if (mobile) {
      menuCloseHandler();
    }
  }

  return(
    <Navbar mobile={mobile}>
      <Icon>JH</Icon>

      <MenuButton onClick={menuOpenHandler}>
        <FontAwesomeIcon icon={faBars} size='xl' />
      </MenuButton>

      <LinkWrapper id='mobile-menu' mobile={mobile}>
        <CloseButton onClick={menuCloseHandler}>
          <FontAwesomeIcon icon={faXmark} size='xl' />
        </CloseButton>

        <Link 
          href='#about' 
          onClick={menuLinkHandler}
          mobile={mobile}
        >About</Link>
        <Link 
          href='#projects' 
          onClick={menuLinkHandler}
          mobile={mobile}
        >Projects</Link>
        <Link 
          href='#contact' 
          onClick={menuLinkHandler}
          mobile={mobile}
        >Contact</Link>
        <Link mobile={mobile}>Resume</Link>
      </LinkWrapper>
    </Navbar>
  )
}