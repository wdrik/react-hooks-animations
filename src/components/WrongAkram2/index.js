import React, { useEffect, useRef, useState } from 'react';

import { Container } from './styles';

import { TweenMax, Power3 } from 'gsap';

export default function WrongAkram2() {
  let container = useRef(null);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 125,
      height: 125,
      ease: Power3.easeOut
    });

    setState(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 50,
      height: 50,
      ease: Power3.easeOut
    });

    setState(false);
  };

  useEffect(() => {
    TweenMax.to(container, 0, {
      css: {
        visibility: 'visible'
      }
    });

    TweenMax.from(circleYellow, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut
    });

    TweenMax.from(circleRed, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.3
    });

    TweenMax.from(circleBlue, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.6
    });

    // TweenMax.staggerFrom(
    //   {
    //     circleYellow,
    //     circleRed,
    //     circleBlue
    //   },
    //   0.8,
    //   {
    //     opacity: 0,
    //     x: 40,
    //     ease: Power3.easeOut
    //   },
    //   0.2
    // );
  }, []);

  return (
    <Container
      ref={el => {
        container = el;
      }}
    >
      <div
        ref={el => {
          circleYellow = el;
        }}
        class="circle yellow"
      ></div>

      <div
        onClick={state !== true ? handleExpand : handleShrink}
        ref={el => {
          circleRed = el;
        }}
        class="circle red"
      ></div>

      <div
        ref={el => {
          circleBlue = el;
        }}
        class="circle blue"
      ></div>
    </Container>
  );
}
