import React from "react";
import "./FloatingChatIcon.css";

const FloatingChatIcon = ({ text, image, className, onClick }) => {
	return (
		<div
			className={`floatingChatIcon ${className ? className : ""}`}
			onClick={onClick}
		>
			{text && <p>{text}</p>}
			{image && <img src={image} width={20} height={20} alt="Open Chat" />}
		</div>
	);
};

export default FloatingChatIcon;
