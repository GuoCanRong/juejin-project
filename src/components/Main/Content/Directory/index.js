import React from "react";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

const Directory = ({article}) => {
	return (
		<div>
			<MarkdownNavbar className="markdown_nav" source={ article } ordered={ false } />
		</div>
	);
};

export default Directory;