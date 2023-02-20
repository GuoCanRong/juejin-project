import React, from "react";
import Navigation from "./Navigation";
import Content from "./Content";
import style from "./style.module.css";

export default function Main() {
	return (
		<div className={ style.main }>
			<Navigation/>
			<Content/>
		</div>
	);
}
