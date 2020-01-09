import React from 'react';

import Lottie from 'react-lottie';

import animation from '../../assets/animations/animation.json';

import { Container, Banner } from './styles';

import Loader from '../Loader';
import Circle from '../Circle';
import WrongAkram from '../WrongAkram';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Content() {
  return (
    <Container>
      <Banner id="banner">
        <Lottie options={defaultOptions} width={400} height={400} />
      </Banner>

      <Banner>
        <Loader />
      </Banner>

      <Banner>
        <Circle />
      </Banner>

      <Banner>
        <WrongAkram />
      </Banner>
    </Container>
  );
}
