import React from 'react';
import Nav from './Nav';
import Greeting from './Greeting';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


export default function App() {
  return(
    <>
      <Nav />
      <Greeting />
      <About />
      <Projects />
      <Contact />
    </>
  )
}