import { cmsDomain } from "@/utils";

const axios = require("axios");

export default async function getPosts(req, res) {
	const {data} = await axios.get(`${ cmsDomain }/api/posts?populate=*`);
	const posts = data.data;
	res.status(200).json(posts);
}