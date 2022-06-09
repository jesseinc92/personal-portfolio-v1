import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
  `

export default function Starfield() {
  const canvas = useRef();

  const drawStarfield = () => {
    console.log('I drew')
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const makeStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        let x = Math.random() * canvas.current.width;
        let y = Math.random() * canvas.current.height;

        const s = {
          x: x,
          y: y
        }

        stars.push(s);
      }

      return stars;
    }

    const stars = makeStars(1000);

    const c = canvas.current.getContext('2d');

    c.fillStyle = '#1d2234';
    c.fillRect(0, 0, canvas.current.width, canvas.current.height);

    for (let star of stars) {
      const intensity = Math.random() * 255;

      c.fillStyle = `rgb(
        ${ intensity },
        ${ intensity },
        ${ intensity }
      )`;
      c.fillRect(star.x, star.y, 1, 1);
    }
  }

  useEffect(() => {
    drawStarfield();
    window.addEventListener('resize', drawStarfield);
    return () => {
       window.removeEventListener('resize', drawStarfield);
    }
  }, []);

  return(
    <Canvas ref={canvas}>
      {/* Starfield will be generated here with JS */}
    </Canvas>
  )
}