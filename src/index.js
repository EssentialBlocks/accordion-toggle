/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import { AccordionIcon } from "../util/icons";
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import "./style.scss";

const { name, category } = metadata;

registerBlockType(name, {
	title: __("Accordion", "essential-blocks"),
	description: __(
		"Display your FAQs & improve user experience with Accordion/Toggle block"
	),
	icon: AccordionIcon,
	category,
	attributes,
	supports: {
		// inserter: false,
		// reusable: false,
		// html: false,
		// anchor: true,
		// Declare support for specific alignment options.
		// align: ["wide", "full"],
		align: ["wide", "full"],
	},
	keywords: [
		__("accordion", "essential-blocks"),
		__("toggle", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
});
