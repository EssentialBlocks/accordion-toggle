/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import AccordionIcon from "./icon";
import deprecated from "./deprecated";
import { LATEST_DESIGN_VERSION } from "./helpers";
const { ebConditionalRegisterBlockType } = EBAccordionControls;


ebConditionalRegisterBlockType(metadata, {
    icon: AccordionIcon,
    attributes,
    keywords: [
        __("accordion", "essential-blocks"),
        __("toggle", "essential-blocks"),
        __("eb essential", "essential-blocks"),
    ],
    edit: Edit,
    save: Save,
    example: example,
    deprecated,
    // Every accordion inserted from now on starts on the latest design. Blocks that
    // already exist in posts are untouched: a variation only applies on insertion.
    variations: [
        {
            name: "accordion-toggle-default",
            title: __("Accordion", "essential-blocks"),
            icon: AccordionIcon,
            isDefault: true,
            scope: ["inserter", "transform"],
            attributes: {
                designVersion: LATEST_DESIGN_VERSION,
            },
        },
    ],
});
