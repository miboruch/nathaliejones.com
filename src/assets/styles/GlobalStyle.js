import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${'' /* @font-face{
    font-family: 'Raleway', sans-serif;
    src: url('../fonts/raleway-regular.woff2') format('woff2'),
         url('../fonts/raleway-regular.woff') format('woff');
    font-style: normal;
  } */}
  @font-face{
    font-family: 'Advent Pro', sans-serif;
    src: url('../fonts/advent-bold.woff2') format('woff2'),
         url('../fonts/advent-bold.woff') format('woff');
    font-style: normal;
  }
  
  *,*::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
    margin: 0;
    
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
