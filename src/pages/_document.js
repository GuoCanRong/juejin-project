// 1.用来修改服务端渲染的文档内容，只有在服务端渲染的时候才会被调用，客户端渲染是不会起任何作用的
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon-32x32.png"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
