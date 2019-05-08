import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import SEO from 'components/SEO/SEO';
import Header from 'components/Header/Header';

const MainTemplate = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header></Header>
        {children}
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
