const { __ } = wp.i18n;

// Default colors
const DARK_GRAY = "#4a5059";
const LIGHT_GRAY = "#edf1f7";

export const DEFAULT_TITLE_COLOR = DARK_GRAY;
export const DEFAULT_TITLE_SIZE = "16";
export const DEFAULT_TITLE_BACKGROUND = LIGHT_GRAY;
export const DEFAULT_TITLE_ACTIVE_COLOR = "#ffffff";
export const DEFAULT_CONTENT_COLOR = DARK_GRAY;
export const DEFAULT_CONTENT_BACKGROUND = "transparent";
export const DEFAULT_CONTENT_BORDER_COLOR = DARK_GRAY;
export const DEFAULT_ICON_COLOR = DARK_GRAY;
export const MAX_HEIGHT = 2000;

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

export const BACKGROUND_TYPE = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Image"), value: "image" },
];

export const TITLE_BACKGROUND_TYPE = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
];

export const BACKGROUND_CLIP = [
	{ label: __("Border Box"), value: "border-box" },
	{ label: __("Padding Box"), value: "padding-box" },
	{ label: __("Content Box"), value: "content-box" },
];

export const BUTTON_STYLES = [
	{ label: __("Material"), value: "material" },
	{ label: __("Ghost"), value: "ghost" },
	{ label: __("Rounded"), value: "rounded" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Container"), value: "container" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("No Repeat"), value: "no-repeat" },
	{ label: __("Repeat"), value: "repeat" },
	{ label: __("Repeat X"), value: "repeat-x" },
	{ label: __("Repeat Y"), value: "repeat-y" },
	{ label: __("Space"), value: "space" },
	{ label: __("Round"), value: "round" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Scroll"), value: "scroll" },
	{ label: __("Fixed"), value: "fixed" },
	{ label: __("Local"), value: "local" },
];

export const BORDER_STYLES = [
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
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

export const COLOR_TYPES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Gradient"), value: "gradient" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];
