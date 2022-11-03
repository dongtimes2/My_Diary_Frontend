import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  body {
    font-family: 'NotoSerifKR', sans-serif;
  }

  button {
    font-family: 'NotoSerifKR', sans-serif;
  }

  input {
    font-family: 'NotoSerifKR', sans-serif;
  }

  textarea {
    font-family: 'NotoSerifKR', sans-serif;
  }
`;

export default GlobalStyles;
