import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import { theme } from '../assets/styles/theme';

import '../assets/styles/index.css';
import MobileMenu from '../components/MobileMenu/MobileMenu';

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <MobileMenu isOpen={isMenuOpen} />
          <Header isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
