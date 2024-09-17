import { MainTheme } from "@/theme/MainTheme";
import {
	type DefaultTheme,
	type GlobalStyleComponent,
	createGlobalStyle,
} from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle: GlobalStyleComponent<object, DefaultTheme> =
	createGlobalStyle`

  @font-face {
    font-family: 'wildWolf';
    src: url('/fonts/Wild-Wolf.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'dsDigi';
    src: url('/fonts/DS-DIGI.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    user-select: none;
    overflow: hidden;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgMyAzIg0KICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBzdHlsZT0iZmlsbDpyZ2JhKDAsMCwwLC4yKSIvPjwvc3ZnPg==");
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
    text-shadow: 3px 3px 0px #d8d8d8;
  }

  h2 {
    font-size: 46px;
    text-align: center;
    font-weight: 400;
    text-shadow: 3px 3px 0px ${MainTheme.colors.secondary};
    margin-bottom: 14px;
    line-height: 1.2;
  }

  h3 {
    font-size: 38px;
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

  .screen-content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    flex-grow: 1;
    margin: 0px 14px;
  }

  /* Slick slider overrides */
  .slick-slider, .slick-list, .slick-track, .slick-slide, .slick-slide > div {
    height: 100%;
  }
  .slick-dots {
    bottom: 20px;
  }
  .slick-active {
    button::before {
      background-color: ${MainTheme.colors.primary};
      border-radius: 50%;
      color: white;
    }
  }
`;

export default GlobalStyle;
