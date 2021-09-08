const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import example from "./example";

registerBlockType("accordion-toggle/accordion", {
	title: __("Accordion", "block"),
	description: __("", "block"),
	category: "widgets",
	icon,
	attributes,
	keywords: [
		__("accordion", "essential-blocks"),
		__("toggle", "essential-blocks"),
		__("essential", "essential-blocks"),
	],
	edit: Edit,
	save,
	example,
});
