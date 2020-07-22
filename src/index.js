import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import example from "./example";

registerBlockType("block/accordion", {
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
