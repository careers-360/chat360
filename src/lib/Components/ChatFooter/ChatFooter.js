import React, { useState } from "react";
import "./ChatFooter.css";
import { MessageInput } from "../../InternalComponents";
import { SubmitIcon } from "../Icons";

const ChatFooter = ({ className, input, placeholder, setResponseList, responseList }) => {
	const [text, setText] = useState("");
	const [chat, setChat] = useState([]);
	let timestamp = new Date();

	let responseItem = [
		{
		  id: 1,
		  msg_left: "hello how are you?",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "Great, please tell me how can I help you today?",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "Sure here is a list of top 10 colleges for pursuing B.tech:- \n Indian Institute of Technology, Madras \n Indian Institute of Technology, Delhi.\n IIT Bombay.\n Indian Institute of Technology, Kanpur.\n Indian Institute of Technology, Roorkee.\n Indian Institute of Technology, Kharagpur.\n Indian Institute of Technology, Guwahati.\n Indian Institute of Technology, Hyderabad.",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "ok",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "What do you want from me?",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "ok",
		  class: "from_left",
		  timestamp: timestamp
		},
		{
		  id: 1,
		  msg_left: "What do you want from me?",
		  class: "from_left",
		  timestamp: timestamp
		},
	  ]

	const setChatItems = () => {
		let chatItems = JSON.parse(localStorage.getItem('chatItems')) || [];
		let n = chatItems?.length || 0;
		let addChatItem = {
			id: 1,
			msg_right: text,
			class: "from_right",
			timestamp: timestamp
		}
		chatItems.push(addChatItem);
		setTimeout(() => {
			chatItems.push(responseItem[n - n/2]);
			setResponseList(chatItems);
			setText("")
			localStorage.setItem('chatItems', JSON.stringify(chatItems));
		}, 800)
		
	}

	return (
		<div className={`chat_footer ${className ? className : ""}`}>
			{input && (
				<MessageInput
					placeholder={placeholder ? placeholder : ""}
					text={text}
					setText={setText}
				/>
			)}
			<div className="footer_submit" onClick={() => setChatItems()}>
				<SubmitIcon fill="#fff" />
			</div>
		</div>
	);
};

export default ChatFooter;
