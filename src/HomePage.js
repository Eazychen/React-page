import React from "react";
import { useNavigate } from "react-router-dom";

const UlGroup = ({datas,className})=>{
	const navigate = useNavigate();
	return (<ul className={className.navUl}>
		{datas.map((data)=> (
			<li className={className.navLiGroup}key={data.id} onClick={()=>navigate(data.path)}>{data.title}</li>
		))}
</ul>)
}


const HomePage = () => {
	const datas = [
		{ id:1, title: "精選服務",path: "/services"},
		{ id:2, title: "品牌故事", path: "/about" },  
        { id:3, title: "聯繫我們", path: "/contact"}
	]
	return (
		<div>
			<div className="nav">
				<div className="p-4 text-4xl font-bold text-center">Title</div>
				<UlGroup datas={datas}  className={{navUl:"nav-ul",navLiGroup:"nav-li-group"}}/>
			</div>
			<footer>
				<div className="footer">
	        		<div className="pr-2">
						<h3 className="text-4xl font-bold text-center">Title</h3>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<UlGroup  datas={datas} className={{}}/>
					<div className="px-2"></div>
					<div className="pl-2"> 
						<h4>訂閱最新消息</h4>
						<input type="text" className=""/>
						<button type="button">訂閱</button>
					</div>
				</div>
				<p className="px-6 mx-20 text-center ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, iste.</p>
			</footer>
		</div>
	);
};

export default HomePage;
