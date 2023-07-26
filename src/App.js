import React, { useState, useEffect } from "react";
import {
	ChatBody,
	ChatFooter,
	ChatHead,
	FloatingChat,
	FloatingChatIcon,
} from "./lib";
import { MicIcon, VerticalThreeDots } from "./lib";
import "./App.css";

function App() {
	const [open, setOpen] = useState(true);
	const [serverIndex, setServerIndex] = useState(0)
	const [responseList, setResponseList] = useState([])

	useEffect(() => {
		if(responseList?.length > 0) {
			if(responseList[responseList?.length - 1]?.class === "from_right") {
				setServerIndex(serverIndex + 1)
			}
		}
	}, [responseList])

	return (
		<div className="App">
			{/* Floating chat component body */}
			<FloatingChat state={open}>
				{/* Floating chat component head */}
				<ChatHead
					display={<MicIcon />}
					title=""
					options={<VerticalThreeDots />}
				/>

				{/* TODO Add the body */}
				<ChatBody responseList={responseList} />

				{/* FIXME Add the files functionality */}
				{/* Floating chat footer */}
				<ChatFooter input={true} placeholder="" responseList={responseList} setResponseList={setResponseList} />
			</FloatingChat>

			{/* Chat Float Icon to open the floating chat component */}
			{/* <FloatingChatIcon
				text="Chat"
				className="text"
				onClick={() => {
					setOpen(!open);
				}}
			/> */}
		</div>
	);
}

export default App;
