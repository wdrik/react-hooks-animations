import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />

      <GlobalStyle />
    </>
  );
}

export default App;
