import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
  
  a {
    color: ${(props) => props.theme['gray-900']};
    text-decoration: none;
  }

  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  :focus {
    outline: none;
  }
  
  :root {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    @media (max-width: 425px) {
      font-size: 81.25%;
    }

    @media (max-width: 375px) {
      font-size: 75%;
    }
  }


`
