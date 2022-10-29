import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyles;
