import React from "react";

import Lottie from "react-lottie";

import animation from "./page-animation.json";

import { Container } from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Content() {
  return (
    <Container>
      <div className="App">
        <Lottie options={defaultOptions} height={240} width={400} />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
        Hello world!
        <br />
      </div>
    </Container>
  );
}
