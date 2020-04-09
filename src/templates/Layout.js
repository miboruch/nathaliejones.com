import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import { theme } from '../assets/styles/theme';

import '../assets/styles/index.css';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
