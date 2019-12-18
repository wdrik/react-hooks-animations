import React from "react";

import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <span>Dev by IWSS - with ❤ &copy; {new Date().getFullYear()} </span>
    </Container>
  );
}
