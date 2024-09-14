import type { DefaultTheme } from "styled-components";

export const MainTheme: DefaultTheme = {
	colors: {
		primary: "#15c192",
		secondary: "#d8d8d8",
		dark: "#161617",
		background:
			"linear-gradient(to bottom, #f1f1f1, #f1f3f7, #edf7fc, #e9fbfd, #e8fff9)",
	},
	layout: {
		header_height: "84px",
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
