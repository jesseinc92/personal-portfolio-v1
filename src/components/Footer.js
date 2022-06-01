import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
    margin: 2rem auto;
    width: fit-content;
`

export default function Footer() {
  return(
    <FooterSection>
      <p>Designed and built by Jesse Hill &copy; 2022.</p>
    </FooterSection>
  )
}