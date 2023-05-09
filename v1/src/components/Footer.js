import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    margin: 2rem auto;
    ${({ mobile }) => !mobile && 'margin-top: 4rem;'}
    width: fit-content;
`

export default function Footer({ mobile }) {
  return(
    <FooterSection mobile={mobile}>
      <p>Designed and built by Jesse Hill &copy; 2022.</p>
    </FooterSection>
  )
}