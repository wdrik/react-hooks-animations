import React from 'react';

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Content from "./components/Content";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Loader />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
