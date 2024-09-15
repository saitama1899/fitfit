import { MainTheme } from "@/theme/MainTheme";
import {
	type DefaultTheme,
	type GlobalStyleComponent,
	createGlobalStyle,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<object, DefaultTheme> =
	createGlobalStyle`

  @font-face {
    font-family: 'wildWolf';
    src: url('/fonts/Wild-Wolf.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    user-select: none;
    overflow: hidden;
    background-image: ${MainTheme.colors.background};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    font-family: 'wildWolf', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  p {
    margin: 0;
  }

  h1 {
    font-size: 80px;
    font-weight: 400;
    text-shadow: 3px 3px 0px ${MainTheme.colors.primary};
  }

  h2 {
    font-size: 70px;
    text-align: center;
    font-weight: 400;
    text-shadow: 3px 3px 0px #d8d8d8;
    margin-bottom: 35px;
    line-height: 1.2;
    font-size: 70px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 50px;
    color: ${MainTheme.colors.dark};
    z-index: 2;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:  ${MainTheme.colors.primary};
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${MainTheme.colors.secondary};
  }
`;

export default GlobalStyle;
