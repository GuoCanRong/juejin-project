import "./globals.css";
import Layout from "@/components/Layout";
import "@/components/Main/Content/Directory/directory.css";

export default function App({Component, pageProps}) {
	return (
		<Layout>
			<Component { ...pageProps } />
		</Layout>
	);
}