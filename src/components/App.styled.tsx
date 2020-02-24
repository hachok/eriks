// global styles with types
import { createGlobalStyle } from 'src/styles';
import fontURL from 'src/styles/fonts/geomanist-regular-webfont.woff2';
import styled from 'src/styles';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Geomanist';
    src: url(${fontURL}) format('woff2');
    font-style: normal;
  }
  
  html, body, #root, #root>div {
  height: 100%;
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

export const Layout = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-bottom: 3px solid ${(props) => props.theme.colors.blue};
  padding-bottom: ${(props) => props.theme.space[3]};
  justify-content: stretch;
`;

export const Separator = styled.hr`
  color: ${(props) => props.theme.colors.lightGrey};
  margin: ${(props) => props.theme.space[3]} 0;
`;
