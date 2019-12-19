import React, { useEffect } from "react";

import { Container } from "./styles";

export default function Footer() {
  useEffect(() => {
    console.log('component footer did mount!')
  }, []);

  function teste(e) {
    e.preventDefault();

    console.log('teste sbmited');
  }

  return (
    <Container>
      <section id="contact">
        <form onSubmit={teste}>
          <input type="text" placeholder="Fullname" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Company" />

          <textarea rows="5" cols="33">
            It was a dark and stormy night...
          </textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <section id="copy">
        <span>Made with <span role="img" aria-label="sheep">❤️</span> by IWSS &copy; {new Date().getFullYear()} </span>
      </section>
    </Container>
  );
}
