// import React, { useRef, useEffect } from "react";
// import { TweenMax } from "gsap";

// const Loader = () => {
//   const blue = useRef(null);
//   const red = useRef(null);
//   const yellow = useRef(null);
//   const green = useRef(null);

//   useEffect(() => {
//     TweenMax.fromTo(
//       [blue.current, yellow.current],
//       0.5,
//       { y: 18 },
//       { y: -18, yoyo: true, repeat: -1 }
//     );

//     TweenMax.fromTo(
//       [red.current, green.current],
//       0.5,
//       { y: -18 },
//       { y: 18, repeat: -1, yoyo: true }
//     );
//   }, []);

//   return (
//     <svg viewBox="0 0 150 33.2" width="180" height="150">
//       <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
//       <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
//       <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
//       <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
//     </svg>
//   );
// };

// export default Loader;


import React, { useEffect, useRef } from "react";
import { TweenLite } from "gsap";

const animatedCompStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "100%",
  backgroundColor: "#2AB7CA",
};

const animatedCompStyle2 = {
  zIndex: 99,
  display: 'block',
  width: "100%",
  height: "300px",
  backgroundColor: "#EBEBEB",
};

const AnimatedComponent = props => {
  const compRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    /* 
      On state changes we can update the target position for GSAP.
      Use redux-subscribe in real world use cases 
      for better performance
    */
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  const onMouseMove = e => {
    console.log(e);

    // TweenLite.to(compRef.current, 1, {
    //   width: `${e.clientX}px`, height:`${e.clientY}px`
    // });

    TweenLite.to(compRef.current, 3, {
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div style={animatedCompStyle2}>
      <div style={animatedCompStyle} ref={compRef} />;
    </div>
  ) 
};

export default AnimatedComponent;