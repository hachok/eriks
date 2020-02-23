// global styles with types
import { createGlobalStyle } from 'src/styles';
import fontURL from 'src/styles/fonts/geomanist-regular-webfont.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Geomanist';
    src: url(${fontURL}) format('woff2');
    font-style: normal;
  }
  
  html, body, #root, #root>div {
  height: 100%;
  margin: 0;
}

body {
  margin: 0;
  font-family: "Geomanist", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
