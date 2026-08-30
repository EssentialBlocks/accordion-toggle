/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon";
import deprecated from "./deprecated";

import metadata from "../block.json";
import attributes from "./attributes";

const { ebConditionalRegisterBlockType } = window.EBAccordionControls;

ebConditionalRegisterBlockType(metadata, {
    icon: Icon,
    attributes,
    edit: Edit,
    save: Save,
    deprecated,
});
