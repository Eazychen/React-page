import React from "react";
import HomePage from "./HomePage";

const DefaultComponent = () => {
	const listdata = [
		{ title: "精選服務",path: "/services"},
		{ title: "品牌故事", path: "/about" },  
        { title: "聯繫我們", path: "/contact"}
	]
	return (
		<div>
			<HomePage/>
		</div>
	);
};

export default DefaultComponent;
