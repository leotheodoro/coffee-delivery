import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${(props) => props.theme.fonts.family.roboto};
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  body {
    height: 100vh;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.colors.background}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.family.baloo};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }
`
