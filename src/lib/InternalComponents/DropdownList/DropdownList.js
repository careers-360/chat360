import React, { useEffect, useRef, useState } from "react";
import "./DrowdownList.css";

const DropdownList = ({ VerticalThreeDots, CloseIcon }) => {
	const triggerRef = useRef(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	//function to close popup on clicking outside
	const useHandleClickOutside = (ref) => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				return setDropdownOpen(false);
			}
		};
		useEffect(() => {
			document.addEventListener("click", handleClickOutside, true);
			return () => {
				document.removeEventListener("click", handleClickOutside, true);
			};
		});
	};
	useHandleClickOutside(triggerRef);

	return (
		<div className="dropdown">
			{dropdownOpen ? (
				<button className="option_btn" onClick={() => setDropdownOpen(false)}>
					{CloseIcon}
				</button>
			) : (
				<button className="option_btn" onClick={() => setDropdownOpen(true)}>
					{VerticalThreeDots}
				</button>
			)}
			<div
				ref={triggerRef}
				className={`${dropdownOpen ? "dropdown-options" : "dropdown_close"}`}
			>
				<a href="/">Dashboard</a>
				<a href="/">Setting</a>
				<a href="/">Logout</a>
			</div>
		</div>
	);
};

export default DropdownList;
