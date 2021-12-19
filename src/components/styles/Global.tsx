import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: #FFF;
    color: #3d2529;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.7;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
