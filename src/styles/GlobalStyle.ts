import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  html, body {
    height: 100%;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', Arial, sans-serif;
    background: #fff;
    color: #222;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  ul, ol {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }
  input, textarea {
    font: inherit;
    outline: none;
  }
`;
