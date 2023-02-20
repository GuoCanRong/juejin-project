import React, { useEffect } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { cmsDomain } from "@/utils";

const PassageItem = (props) => {
	const {id, title, description, field, author, cover, view, like, comment} = props;
	const url = `${ cmsDomain }${ cover.data.attributes.url }`;

	return (<div className={ style.item }>
		<Link href={ {pathname: `/post/${ id }`} } target="_blank">
			<ul className={ style.meta }>
				<li>{ author }</li>
				<div className={ style.dividing }></div>
				<li>22小时前</li>
				<div className={ style.dividing }></div>
				<li>{ field }</li>
			</ul>
			<div className={ style["content-wrapper"] }>
				<div className={ style.left }>
					<p href="" className={ style.title }>{ title }</p>
					<div className={ style.description }>{ description }</div>
					<ul className={ style["action-list"] }>
						<li>
							<i className={ style.view } data-v-7fc52684=""></i>
							<span>{ view }</span>
						</li>
						<li>
							<i className={ style.like } data-v-7fc52684=""></i>
							<span>{ like }</span>
						</li>
						<li>
							<i className={ style.comment } data-v-7fc52684=""></i>
							<span>{ comment }</span>
						</li>
					</ul>
				</div>
				<div className={ style.right }>
					<img src={ url } width={ 120 } height={ 80 }></img>
				</div>
			</div>
		</Link>
	</div>);
};

export default PassageItem;