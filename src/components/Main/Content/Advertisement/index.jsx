import React from "react";
import style from "./style.module.css";

let bannnerUrl = "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef37fc97beae4bed83a9fd28d6faffb6~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?";
let appUrl = "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png";
const Advertisement = () => {
	return (
		<div className={ style.container }>
			<div className={ style.banner }>
				<a href="">
					<img src={ bannnerUrl }/>
				</a>
			</div>
			<div className={style.app}>
				<div className={style.img}>
					<img src={ appUrl } width={50} height={50}/>
				</div>
				<div className={style.info}>
					<p>下载稀土掘金APP</p>
					<p>一个帮助开发者成长的社区</p>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;