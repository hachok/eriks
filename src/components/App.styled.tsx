// global styles with types
import { createGlobalStyle } from 'src/styles';

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
  height: 100%;
  margin: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

// Node

.node svg section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
