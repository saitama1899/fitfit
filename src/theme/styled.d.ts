import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			dark: string;
			background: string;
			primary_inverse: string;
		};
		layout: {
			header_height: number;
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
