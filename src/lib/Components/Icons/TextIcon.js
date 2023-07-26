import React from "react";

const TextIcon = ({ height, width, fill }) => {
	return (
		<svg
			fill={fill ? fill : "#000"}
			height={height ? height : "20"}
			width={width ? width : "20"}
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 75.333 75.333"
		>
			<g>
				<path
					d="M37.667,75.318l-9.414-16.303H17c-9.374,0-17-7.626-17-17v-25c0-9.374,7.626-17,17-17h41.333c9.374,0,17,7.626,17,17v25
		c0,9.374-7.626,17-17,17H47.078L37.667,75.318z M17,4.015c-7.168,0-13,5.832-13,13v25c0,7.168,5.832,13,13,13h13.563l7.104,12.303
		l7.1-12.303h13.565c7.168,0,13-5.832,13-13v-25c0-7.168-5.832-13-13-13H17z"
				/>
			</g>
		</svg>
	);
};

export default TextIcon;
