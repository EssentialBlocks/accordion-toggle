const { __ } = wp.i18n;

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_BG = "titleBG";
export const TITLE_PADDING = "titlePadding";
export const CONTENT_BG = "contentBG";
export const CONTENT_PADDING = "contentPadding";
export const TITLE_BORDER = "titleBorder";
export const CONTENT_BORDER = "contentBorder";

export const ACCORDION_TYPES = [
	{ label: __("Accordion"), value: "accordion" },
	{ label: __("Toggle"), value: "toggle" },
];

export const ACCORDION_STYLES = [
	{ label: __("Material"), value: "material" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Dark"), value: "dark" },
	{ label: __("Royal"), value: "royal" },
	{ label: __("Custom"), value: "custom" },
];

export const HEADERS = [
	{ label: __("H1"), value: "h1" },
	{ label: __("H2"), value: "h2" },
	{ label: __("H3"), value: "h3" },
	{ label: __("H4"), value: "h4" },
	{ label: __("H5"), value: "h5" },
	{ label: __("H6"), value: "h6" },
];

export const ICON_POSITIONS = [
	{ label: __("Left"), value: "left" },
	{ label: __("Right"), value: "right" },
];

export const TRANSITION_TYPES = [
	{ label: __("Liner"), value: "linear" },
	{ label: __("Ease"), value: "ease" },
	{ label: __("Ease In"), value: "ease-in" },
	{ label: __("Ease Out"), value: "ease-out" },
	{ label: __("Ease In Out"), value: "ease-in-out" },
];

export const TITLE_ALIGNMENT = [
	{ label: __("Left"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "flex-end" },
];

export const CONTENT_ALIGN = [
	{ label: __("Left"), value: "left" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "right" },
];

export const COLORS = [
    { name: 'Black', color: '#000000' },
    { name: 'Cyan bluish gray', color: '#abb8c3' },
    { name: 'White', color: '#ffffff' },
    { name: 'Pale pink', color: '#ffc0cb' },
    { name: 'Vivid red', color: '#cf2e2e' },
    { name: 'Luminous vivid orange', color: '#ff6900' },
    { name: 'Luminous vivid amber', color: '#fcb900' },
    { name: 'Light green cyan', color: '#7bdcb5' },
    { name: 'Vivid green cyan', color: '#00d084' },
    { name: 'Pale cyan blue', color: '#8ed1fc' },
    { name: 'Vivid cyan blue', color: '#3593e3' },
    { name: 'Vivid purple', color: '#9b51e0' },
];