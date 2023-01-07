import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0; 
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: '130%';
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Baloo 2', cursive;
    line-height: '130%';
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 { 
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1.125rem;
  }
`
