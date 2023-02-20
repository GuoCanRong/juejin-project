import Head from "next/head";
import Main from "@/components/Main";
import axios from "axios";
import { localDomain, PostContext } from "@/utils";

export default function Home({data}) {
	return (
		<>
			<Head>
				<title>仿稀土掘金</title>
				<meta data-n-head="ssr" charset="utf-8"></meta>
				<meta data-n-head="ssr" name="viewport"
				      content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"></meta>
				<meta data-n-head="ssr" name="theme-color" content="#ffffff"></meta>
				<meta data-n-head="ssr" name="msapplication-TileColor" content="#da532c"></meta>
				<meta data-n-head="ssr" vmid="description" name="description"
				      content="掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"></meta>
				<meta data-n-head="ssr" vmid="keywords" name="keywords"
				      content="掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python"></meta>
			</Head>
			<PostContext.Provider value={ data }>
				<Main/>
			</PostContext.Provider>
		</>
	);
}

export async function getStaticProps(context) {
	const {data} = await axios.get(`${ localDomain }/api/home`);
	return {
		props: {data},
	};
}