
import { __ } from "@wordpress/i18n";
export const MEDIA_TYPES = [
    { label: __("image", "essential-blocks"), value: "image" },
    { label: __("icon", "essential-blocks"), value: "icon" },
    { label: __("Text", "essential-blocks"), value: "text" },
    { label: __("none", "essential-blocks"), value: "none" },
];

// Layout of .eb-accordion-title-content-wrap - the flex row holding the title
// prefix, the title and the suffix.
//
// Control names must be unique; they are used as the attribute-name prefix by
// generateResponsiveAlignAttributes / generateResponsiveAlignStyles.
export const titleContentDirection = "titleContentDirection_";
export const titleContentVAlign = "titleContentVAlign_";

export const TITLE_CONTENT_DIRECTION = [
    { label: __("Row", "essential-blocks"), value: "row" },
    { label: __("Column", "essential-blocks"), value: "column" },
];

export const TITLE_CONTENT_VERTICAL_ALIGN = [
    { label: __("Top", "essential-blocks"), value: "flex-start" },
    { label: __("Middle", "essential-blocks"), value: "center" },
    { label: __("Bottom", "essential-blocks"), value: "flex-end" },
];

// Same `align-items` values as above. `align-items` acts on the flex CROSS
// axis, so with flex-direction:row it reads as Top/Middle/Bottom and with
// flex-direction:column it reads as Left/Center/Right. Only the labels differ,
// which is why switching Row <-> Column never has to rewrite a stored value.
export const TITLE_CONTENT_HORIZONTAL_ALIGN = [
    { label: __("Left", "essential-blocks"), value: "flex-start" },
    { label: __("Center", "essential-blocks"), value: "center" },
    { label: __("Right", "essential-blocks"), value: "flex-end" },
];
