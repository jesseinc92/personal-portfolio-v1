import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Greeting from './Greeting';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


export default function App() {
  const [mobile, setMobile] = useState(false);

  // set layout to appropriate view upon component mount
  useEffect(() => {
    if (window.innerWidth > 767) {
      setMobile(false);
    } else if (window.innerWidth < 766) {
      setMobile(true);
    } 
  }, []);

  // handle browswer resizing to make mobile/desktop view responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMobile(false);
      } else if (window.innerWidth < 766) {
        setMobile(true);
      } 
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return(
    <>
      <Nav mobile={mobile} />
      <div className='body-container'>
        <Greeting mobile={mobile} />
        <About mobile={mobile} />
        <Projects mobile={mobile} />
        <Contact mobile={mobile} />
      </div>
    </>
  )
}