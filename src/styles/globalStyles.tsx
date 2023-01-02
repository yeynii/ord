import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: rgb(246, 246, 246);
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  p,
  ul {
    margin: 0;
  }
`;
export default GlobalStyle;
