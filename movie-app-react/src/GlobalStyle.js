import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --orange: #ff914d;
  }
  * {
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 400;
      color: #FDFBF9;
      letter-spacing: 0.1rem;
      font-family: 'Koulen', cursive;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.rem;
    }
    p {
      font-size: 1.3rem;
      color: var(--white);
      letter-spacing: 0.08rem;
    }
  }
`;
