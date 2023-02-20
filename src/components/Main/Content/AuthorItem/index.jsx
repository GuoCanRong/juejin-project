import React from "react";
import style from "./style.module.css";
import { cmsDomain } from "@/utils";

const AuthorItem = ({author, authorPhoto}) => {
	return (
		<div className={ style.author }>
			<a href="">
				<img src={ `${ cmsDomain }${ authorPhoto }` } alt="" width={ 46 } height={ 46 }/>
				<span>{ author }</span>
				<img className={ style.level }
				     src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-3.7938ebc.png" alt="" width={ 35 }
				     height={ 16 }/>
			</a>
		</div>
	);
};

export default AuthorItem;