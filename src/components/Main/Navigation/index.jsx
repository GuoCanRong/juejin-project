import React from "react";
import style from "./style.module.css";

const list = [
	"综合",
	"关注",
	"后端",
	"前端",
	"Android",
	"IOS",
	"人工智能",
	"开发工具",
	"代码人生",
	"阅读",
];

export default function Navigation() {
	return (
		<div className={ style.navigation }>
			<ul className={ style.list }>
				{ list.map((item, key) => (
					<a href="" className={ style.item } key={ key }>
						{ item }
					</a>
				)) }
			</ul>
		</div>
	);
}
