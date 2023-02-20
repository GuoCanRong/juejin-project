import React, { useState } from "react";
import style from "./style.module.css";
import AuthorItem from "@/components/Main/Content/AuthorItem";
import Passage from "@/components/Passage";
import axios from "axios";
import Directory from "@/components/Main/Content/Directory";
import { localDomain } from "@/utils";

const Post = ({data}) => {
	const [ article ] = useState(data.data);

	return (
		<div className={ style["post-page"] }>
			<div className={ style.container }>
				<div className={ style.left }>
					<Passage passage={ article.attributes.passage }/>
				</div>
				<div className={ style.right }>
					<div className={ style["author-info"] }>
						<AuthorItem author={ article.attributes.author }
						            authorPhoto={ article.attributes.authorPhoto.data.attributes.url }/>
					</div>
					<div className={ style["other-article"] }>
						<p className={ style.title }>相关文章</p>
						<ul>
							<li>文章1</li>
							<li>文章2</li>
							<li>文章3</li>
						</ul>
					</div>
					<div className={ style.directory }>
						<p>目录</p>
						<Directory article={ article.attributes.passage }/>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const {id} = context.params;
	const {data} = await axios.get(`${ localDomain }/api/article`, {
		params: {
			id,
		},
	});
	return {
		props: {
			data,
		},
	};
}

export default Post;