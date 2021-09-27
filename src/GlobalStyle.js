import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  :root {
    --black: #151515;
    --darkgrey: #757575;
    --grey: #b7b7b7;
		--white : #ffffff;
    --point: #208be6;

    --xsMargin: 10px;
    --smMargin: 20px;
    --mdMargin: 30px;
    --lgMargin: 40px;

    --smRadius: 10px;
    --mdRadius: 20px;
    --lgRadius: 40px;

    --mbView: 375px;
    --tbView: 768px;
    --pcView: 1280px;
  };

  * {
  box-sizing : border-box;
  }
  html {
    margin : 0;
    padding: 0;
    font-size: 18px;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }
  a {
    color: var(--black);
    text-decoration:none;
  }
  input,
  textarea,
  button {
    color: var(--black);
    border: none;
    outline: none;
  }
  button {
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyles;
