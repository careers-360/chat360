import React from "react";
import "./ChatHead.css";
import { VerticalThreeDots,CloseIcon } from "../Icons";
import DropdownList from "../../InternalComponents/DropdownList/DropdownList";

const ChatHead = ({
	display,
	title,
	options,
}) => {

	return (
		<div className="chatHead">
			<div className="chathead_header">
				<div className="user_options">
					<div className="careers_logo">
						<img src="https://cache.careers360.mobi/images/frontend/desktop/logo.svg" alt="" />
					</div>
					<div className="user_name">{title}</div>
				</div>
				{/* <div className="options_dropdown_container">
					<DropdownList VerticalThreeDots={<VerticalThreeDots /> } CloseIcon={<CloseIcon />} />	
				</div> */}
			</div>
		</div>
	);
};

export default ChatHead;
