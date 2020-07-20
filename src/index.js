import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("create-block/accordion", {
	title: __("Accordion", "create-block"),

	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"create-block"
	),

	category: "widgets",

	icon,

	attributes,

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: Edit,

	save,
});
