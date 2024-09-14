import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			dark: string;
			background: string;
		};
		layout: {
			header_height: string;
		};
		breakpoints: {
			xs: string;
			sm: string;
			sd: string;
			md: string;
			lg: string;
			xl: string;
			xxl: string;
		};
	}
}
