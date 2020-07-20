import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import example from "./example";

registerBlockType("essential-blocks/accordion", {
	title: __("Accordion", "create-block"),

	description: __("", "essential-blocks"),

	category: "widgets",

	icon,

	attributes,

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: Edit,

	save,

	example,
});
