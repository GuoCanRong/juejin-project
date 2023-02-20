import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Passage = ({passage}) => {
	const [ text ] = useState(passage);
	return (
		<div className={ style.passage }>
			<ReactMarkdown
				className={ "article-content markdown-body" }
				children={ text }
				skipHtml={ true }
				components={ {
					code({node, inline, className, children, ...props}) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<SyntaxHighlighter
								children={ String(children).replace(/\n$/, "") }
								style={ oneDark }
								language={ match[1] }
								PreTag="div"
								{ ...props }
							/>
						) : (
							<code className={ className } { ...props }>
								{ children }
							</code>
						);
					},
				} }
			></ReactMarkdown>
		</div>
	);
};

export default Passage;