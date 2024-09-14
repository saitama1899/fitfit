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
  }

  h1 {
    font-family: 'wildWolf', sans-serif;
    margin: 0;
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
