import type { DefaultTheme } from "styled-components";

export const MainTheme: DefaultTheme = {
	colors: {
		primary: "#15c192",
		secondary: "#d8d8d8",
		dark: "#161617",
		primary_inverse: "#ea3e6d",
		background:
			"linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
	},
	layout: {
		header_height: 42,
	},
	breakpoints: {
		xs: "320px",
		sm: "576px",
		sd: "680px",
		md: "768px",
		lg: "992px",
		xl: "1200px",
		xxl: "1400px",
	},
};
