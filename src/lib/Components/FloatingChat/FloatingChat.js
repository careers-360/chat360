import React from "react";
import "./FloatingChat.css";

const FloatingChat = ({ state, children, className }) => {
	return (
		<div>
			{state ? (
				<div className={`floatingChat ${className ? className : ""}`}>
					{children}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default FloatingChat;
