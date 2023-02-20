import React, { useState } from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const list = [ "首页", "沸点", "课程", "直播", "活动" ];

export default function NavBar() {
	const [ path ] = useState(useRouter().pathname);

	const [ show, setShow ] = useState(false);

	const showMenu = () => {
		setShow(!show);
	};

	return (
		<div className={ `style.navbar, ${ path.includes("/post") ? style["in-post"] : "" }` }>
			<div className={ style.container }>
				<div className={ style.logo }>
					<Link href="/">
						<img
							src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
							alt="稀土掘金"
							className="logo-img"
							data-v-96dfbeac=""
						/>
					</Link>
				</div>
				<ul className={ style.list }>
					{ list.map((item, key) => (
						<li className={ `${ style.item } ${ style.options }` } key={ key }>
							<Link href="">{ item }</Link>
						</li>
					)) }
					<li className={ style.item }>商城</li>
					<li className={ style.item }>
						APP
						<span>邀请有礼</span>
					</li>
					<li className={ style.item }>插件</li>
				</ul>
				<div className={ style["mobile-logo"] }>
					<Link href="/">
						<img
							src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
							alt="稀土掘金"
							data-v-96dfbeac=""
						/>
					</Link>
				</div>
				<div className={ style["mobile-list"] }>
					<button onClick={ showMenu } className={ style.button }>
						<span>首页</span>
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							data-v-96dfbeac=""
							className={ `${ style.svg } ${ show && style.rotate }` }
						>
							<path
								d="M2.45025 4.82431C2.17422 4.49957 2.40501 4.00049 2.83122 4.00049H9.16878C9.59498 4.00049 9.82578 4.49957 9.54975 4.82431L6.38097 8.55229C6.1813 8.78719 5.8187 8.78719 5.61903 8.55229L2.45025 4.82431Z"
								data-v-96dfbeac=""
							></path>
						</svg>
					</button>
					<ul
						className={ `${ style.menu } ${
							show ? style.showMenu : style.hideMenu
						}` }
					>
						{ list.map((item, key) => (
							<li className={ style["mobile-item"] } key={ key }>
								<Link href="">{ item }</Link>
							</li>
						)) }
					</ul>
				</div>
			</div>
		</div>
	);
}
