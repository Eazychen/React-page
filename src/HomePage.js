import React from "react";
import { useNavigate } from "react-router-dom";

const UlGroup = ()=>{
	const navigate = useNavigate();
	const listdata = [
		{ title: "精選服務",path: "/services"},
		{ title: "品牌故事", path: "/about" },  
        { title: "聯繫我們", path: "/contact"}
	]
	return (<ul className="flex items-center ml-auto">
		{listdata.map((data)=> (
			<li className="nav-li-group" onClick={()=>navigate(data.path)}>{data.title}</li>
		))}
</ul>)
}

const HomePage = () => {
	return (
		<div className="grid grid-cols-[20%_80%] p-6 bg-white-alpha-50 fixed top-0 left-0 right-0">
			<div className="p-4 text-4xl text-center">Title</div>
			<UlGroup />
		</div>
	);
};

export default HomePage;
