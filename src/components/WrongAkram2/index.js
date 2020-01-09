import React, { useEffect, useRef, useState } from 'react';

import { Container } from './styles';

import { TweenMax, Power3 } from 'gsap';

export default function WrongAkram2() {
  let container = useRef(null);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let circleGreen = useRef(null);

  let pointYellow = useRef(null);
  let pointRed = useRef(null);
  let pointBlue = useRef(null);
  let pointGreen = useRef(null);

  const [stateYellow, setStateYellow] = useState(false);
  const [stateRed, setStateRed] = useState(false);
  const [stateBlue, setStateBlue] = useState(false);
  const [stateGreen, setStateGreen] = useState(false);

  function handleExpand(color) {
    if (color === 'yellow') {
      TweenMax.to(circleYellow, 0.8, {
        width: 100,
        height: 100,
        borderRadius: '10%',
        ease: Power3.easeOut
      });

      setStateYellow(true);
    }

    if (color === 'red') {
      TweenMax.to(circleRed, 0.8, {
        width: 100,
        height: 100,
        borderRadius: '10%',
        ease: Power3.easeOut
      });

      setStateRed(true);
    }

    if (color === 'blue') {
      TweenMax.to(circleBlue, 0.8, {
        width: 100,
        height: 100,
        borderRadius: '10%',
        ease: Power3.easeOut
      });

      setStateBlue(true);
    }

    if (color === 'green') {
      TweenMax.to(circleGreen, 0.8, {
        width: 100,
        height: 100,
        borderRadius: '10%',
        ease: Power3.easeOut
      });

      setStateGreen(true);
    }
  }

  function handleShrink(color) {
    if (color === 'yellow') {
      TweenMax.to(circleYellow, 0.8, {
        width: 50,
        height: 50,
        borderRadius: '100%',
        ease: Power3.easeOut
      });

      setStateYellow(false);
    }

    if (color === 'red') {
      TweenMax.to(circleRed, 0.8, {
        width: 50,
        height: 50,
        borderRadius: '100%',
        ease: Power3.easeOut
      });

      setStateRed(false);
    }

    if (color === 'blue') {
      TweenMax.to(circleBlue, 0.8, {
        width: 50,
        height: 50,
        borderRadius: '100%',
        ease: Power3.easeOut
      });

      setStateBlue(false);
    }

    if (color === 'green') {
      TweenMax.to(circleGreen, 0.8, {
        width: 50,
        height: 50,
        borderRadius: '100%',
        ease: Power3.easeOut
      });

      setStateGreen(false);
    }
  }

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

    TweenMax.from(circleGreen, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.9
    });

    TweenMax.fromTo([circleYellow, circleBlue], 0.8, { x: 10 }, { x: -10, yoyo: true, repeat: -1 });

    TweenMax.fromTo([circleRed, circleGreen], 0.8, { x: -10 }, { x: 10, yoyo: true, repeat: -1 });

    TweenMax.fromTo(
      pointYellow,
      0.8,
      { borderRadius: 0, width: '20px', height: '20px' },
      { borderRadius: '100%', width: '80%', height: '80%', border: '2px solid #FFF', yoyo: true, repeat: -1 }
    );

    TweenMax.fromTo(
      pointRed,
      0.8,
      { borderRadius: 0, width: '20px', height: '20px' },
      { borderRadius: '100%', width: '80%', height: '80%', border: '2px solid #FFF', yoyo: true, repeat: -1 }
    );

    TweenMax.fromTo(
      pointBlue,
      0.8,
      { borderRadius: 0, width: '20px', height: '20px' },
      { borderRadius: '100%', width: '80%', height: '80%', border: '2px solid #FFF', yoyo: true, repeat: -1 }
    );

    TweenMax.fromTo(
      pointGreen,
      0.8,
      { borderRadius: 0, width: '20px', height: '20px' },
      { borderRadius: '100%', width: '80%', height: '80%', border: '2px solid #FFF', yoyo: true, repeat: -1 }
    );
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
        onClick={stateYellow !== true ? () => handleExpand('yellow') : () => handleShrink('yellow')}
        className="circle yellow"
      >
        <div
          ref={el => {
            pointYellow = el;
          }}
          className="point"
        ></div>
      </div>

      <div
        ref={el => {
          circleRed = el;
        }}
        onClick={stateRed !== true ? () => handleExpand('red') : () => handleShrink('red')}
        className="circle red"
      >
        <div
          ref={el => {
            pointRed = el;
          }}
          className="point"
        ></div>
      </div>

      <div
        ref={el => {
          circleBlue = el;
        }}
        onClick={stateBlue !== true ? () => handleExpand('blue') : () => handleShrink('blue')}
        className="circle blue"
      >
        <div
          ref={el => {
            pointBlue = el;
          }}
          className="point"
        ></div>
      </div>

      <div
        ref={el => {
          circleGreen = el;
        }}
        onClick={stateGreen !== true ? () => handleExpand('green') : () => handleShrink('green')}
        className="circle green"
      >
        <div
          ref={el => {
            pointGreen = el;
          }}
          className="point"
        ></div>
      </div>
    </Container>
  );
}
