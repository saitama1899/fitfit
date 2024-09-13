import Document, {
	type DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const App = () => (
	<Html>
		<link rel="icon" href="/images/icons/favicon.ico" />{" "}
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link
			rel="icon"
			type="image/png"
			sizes="192x192"
			href="/android-chrome-192x192.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="512x512"
			href="/android-chrome-512x512.png"
		/>
		<Head />
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

App.getInitialProps = async (
	ctx: DocumentContext,
): Promise<Record<string | number, unknown>> => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			),
		};
	} finally {
		sheet.seal();
	}
};

export default App;
