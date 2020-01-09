import React from 'react';

import { Container, Navigation } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>IW</h1>

      <Navigation>
        <ul>
          <li>
            <a href="#banner">Works</a>
          </li>
          <li>
            <a href="#banner">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
