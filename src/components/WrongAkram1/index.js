import React, { useEffect, useRef } from 'react';

import { TweenMax, Power3 } from 'gsap';

const animatedCompStyle = {
  width: '220px',
  height: '220px',
  opacity: 0,
  backgroundColor: 'lightgreen',
  boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)'
};

export default function WrongAkram1() {
  let logoItem = useRef(null);

  useEffect(() => {
    TweenMax.to(logoItem, 4, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 2
    });
  });

  return (
    <div
      style={animatedCompStyle}
      ref={el => {
        logoItem = el;
      }}
    ></div>
  );
}
