import React, { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import PassageItem from "./PassageItem";
import Advertisement from "./Advertisement";
import AuthorItem from "@/components/Main/Content/AuthorItem";
import { PostContext } from "@/utils";

const Content = () => {
	const [ posts ] = useState(useContext(PostContext));
	const author = posts?.[0].attributes.author;
	const authorPhoto = posts?.[0].attributes.authorPhoto.data.attributes.url;

	return (
		<div className={ style.container }>
			<div className={ style["passage-list"] }>
				<ul className={ style.header }>
					<li><a href="">推荐</a></li>
					<li><a href="">最新</a></li>
					<li><a href="">热榜</a></li>
				</ul>
				<ul>
					{
						posts?.map((item) => {
							return (
								<PassageItem
									key={ item.id }
									id={ item.id }
									title={ item.attributes.title }
									description={ item.attributes.description }
									field={ item.attributes.field }
									author={ item.attributes.author }
									cover={ item.attributes.cover }
									view={ item.attributes.view }
									like={ item.attributes.like }
									comment={ item.attributes.comment }
								/>
							);
						})
					}
				</ul>
			</div>
			<div className={ style["info-list"] }>
				<Advertisement/>
				<div className={ style["author-list"] }>
					<div className={ style["author-header"] }>
						🎖️作者榜
					</div>
					<ul className={ style.authors }>
						<li>
							<AuthorItem author={ author }
							            authorPhoto={ authorPhoto }>
							</AuthorItem>
						</li>
						<li>
							<AuthorItem author={ author }
							            authorPhoto={ authorPhoto }>
							</AuthorItem>
						</li>
						<li>
							<AuthorItem author={ author }
							            authorPhoto={ authorPhoto }>
							</AuthorItem>
						</li>
					</ul>
					<div className={ style.more }>{ `完整榜单 >` }</div>
				</div>
			</div>
		</div>
	);
};

export default Content;