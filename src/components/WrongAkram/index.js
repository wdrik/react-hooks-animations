import React, { useEffect, useRef } from 'react';

import { TweenMax, Power3 } from 'gsap';

export default function WrongAkram() {
  let logoItem = useRef(null);

  console.log('logoItem', logoItem);

  useEffect(() => {
    console.log('logoItem', logoItem);
  });

  return (
    <div>
      <h1
        ref={el => {
          logoItem = el;
        }}
      >
        kkkk
      </h1>
    </div>
  );
}
