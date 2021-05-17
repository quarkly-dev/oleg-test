import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Box } from "@quarkly/widgets";
import { MdAssignment } from "react-icons/md";
const defaultProps = {
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"justify-content": "center",
	"width": "100%",
	"height": "auto",
	"margin": "0px 20px 0px 20px"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdAssignment,
			"color": "#fe4614",
			"size": "40px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "16px 0px 30px 0px",
			"letter-spacing": "0.08rem",
			"font": "28px Poppins, sans-serif",
			"children": "asdasd",
			"color": "--secondary"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "300 18px Poppins, sans-serif",
			"color": "#000000",
			"margin": "0px 0px 16px 0px",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "asdasd"
		}
	}
};

const CardTest = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Box>;
};

Object.assign(CardTest, { ...Box,
	defaultProps,
	overrides
});
export default CardTest;