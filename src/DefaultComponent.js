import React from "react";
import "./style/DefaultComponent.css";
import { useNavigate } from "react-router-dom";

const DefaultComponent = () => {
	const navigate = useNavigate();

	return (
		<div className='container'>
			<div className='header'>
				<div className='title'>title</div>
				<ul className='nav-group'>
					<li
						className='nav-group-li'
						onClick={() => {
							navigate("/");
						}}
					>
						精選服務
					</li>
					<li
						className='nav-group-li'
						onClick={() => {
							navigate("/");
						}}
					>
						精選服務
					</li>
					<li
						className='nav-group-li'
						onClick={() => {
							navigate("/");
						}}
					>
						精選服務
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DefaultComponent;
