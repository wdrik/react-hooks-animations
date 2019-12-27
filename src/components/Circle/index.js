import React, { useEffect, useRef } from "react";
import { TweenLite } from "gsap";

const animatedCompStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "#7159c1",
};

const animatedCompStyle2 = {
    width: "50px",
    height: "50px",
    backgroundColor: "lightblue",
  };

const animatedCompStyleWrapper = {
  zIndex: 99,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  height: "300px",
  backgroundColor: "#ebebeb",
};

export default function Circle(){
  const compRef = useRef(null);
  const compRef2 = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
  
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  const onMouseMove = e => {

    // TweenLite.to(compRef.current, 1, {
    //   width: `${e.clientX}px`, height:`${e.clientY}px`
    // });

    TweenLite.to(compRef.current, 0.2, {
      x: - ((e.clientX - window.innerWidth / 2) / 10),
      y: - ((e.clientY - window.innerHeight / 2) / 10)
    });

    TweenLite.to(compRef2.current, 0.2, {
    x: - ((e.clientX - window.innerWidth / 2) / -110),
    y: - ((e.clientY - window.innerHeight / 2) / -110)
    });
  };


  return (
    <div style={animatedCompStyleWrapper}>
      <div style={animatedCompStyle} ref={compRef} />
      <div style={animatedCompStyle2} ref={compRef2} />
    </div>
  ) 
};