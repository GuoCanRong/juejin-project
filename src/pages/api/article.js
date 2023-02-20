import { cmsDomain } from "@/utils";

const axios = require("axios");

export default async function getPosts(req, res) {
	const {id} = req.query;
	const {data} = await axios.get(`${ cmsDomain }/api/posts/${ id }?populate=*`);
	res.status(200).json(data);
}