import React, { useEffect } from "react";

import { Container } from "./styles";

import anime from "animejs";

export default function Footer() {
  useEffect(() => {
    function handleAnime() {
      anime({
        targets: '#copy span',
        translateX: function() {
          return anime.random(-250, 250);
        },
        direction: 'alternate',
        backgroundColor: ['#FFF', '#333', 'rgb(205, 0, 0)', '#7159c1'],
        borderRadius: ['0%', '10%'],
        easing: 'steps(5)',
        duration: 1200,
        scale: function() {
          return anime.random(-1, 2);
        },
        complete: handleAnime
      });
    }

    handleAnime();
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

          <textarea rows="5" cols="33" value="">
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
