import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --normal: #a4acaf;
    --fighting: #d56723;
    --flying: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    --poison: #b97fc9;
    --ground: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    --rock: #a38c21;
    --bug: #729f3f;
    --ghost: #7b62a3;
    --steel: #9eb7b8;
    --fire: #fd7d24;
    --water: #4592c4;
    --grass: #9bcc50;
    --electric: #eed535;
    --psychic: #f366b9;
    --ice: #51c4e7;
    --dragon: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    --dark: #707070;
    --fairy: #fdb9e9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
  }

  input {
    font-family: 'Roboto', sans-serif;
  }
`;
