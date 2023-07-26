import React from "react";
import "./MessageInput.css";

// Input field for all the chats 
const MessageInput = ({ placeholder, setText, text, className, name }) => {
	return (
		<div className="input_container">
			<input
				className={`message_input ${className ? className : ""}`}
				type="text"
				placeholder={placeholder ? placeholder : "Ask your queries on colleges, exams here..."}
				name={name ? name : "MessageBody"}
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
		</div>
	);
};

export default MessageInput;
