const attributes = {
	id: { type: "string" },
	accordionType: {
		type: "string",
		source: "attribute",
		selector: ".eb-accordion-container",
		attribute: "data-accordion-type",
		default: "toggle",
	},
	accordions: {
		type: "array",
		selector: ".eb-accordion-wrapper",
		source: "query",
		default: [
			{
				title: "Accordion Tab Title 1",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			{
				title: "Accordion Tab Title 2",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			{
				title: "Accordion Tab Title 3",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
		],
		query: {
			title: {
				type: "array",
				selector: ".eb-accordion-title",
				source: "children",
			},
			content: {
				type: "array",
				selector: ".eb-accordion-content",
				source: "children",
			},
		},
	},
	selectedTab: {
		type: "string",
		default: "",
	},
	expandedTabs: {
		type: "array",
		default: [],
	},
	displayIcon: {
		type: "boolean",
		default: true,
	},
	tabIcon: {
		type: "string",
		default: "fas fa-angle-right",
	},
	expandedIcon: {
		type: "string",
		default: "fas fa-angle-down",
	},
	transitionDuration: {
		type: "number",
	},
	accordionStyle: {
		type: "string",
		default: "custom",
	},
	backgroundType: {
		type: "string",
		default: "fill",
	},
	containerBackground: {
		type: "string",
	},
	containerBorderType: {
		type: "string",
		default: "solid",
	},
	containerBorderSize: {
		type: "number",
	},
	containerBorderColor: {
		type: "string",
	},
	containerGradient: {
		type: "string",
		default: "linear-gradient(45deg, #c9d6ff, #e2e2e2)",
	},
	containerMarginTop: {
		type: "number",
		default: 0,
	},
	containerMarginRight: {
		type: "number",
		default: 0,
	},
	containerMarginBottom: {
		type: "number",
		default: 0,
	},
	containerMarginLeft: {
		type: "number",
		default: 0,
	},
	containerPaddingTop: {
		type: "number",
		default: 0,
	},
	containerPaddingRight: {
		type: "number",
		default: 0,
	},
	containerPaddingBottom: {
		type: "number",
		default: 0,
	},
	containerPaddingLeft: {
		type: "number",
		default: 0,
	},
	containerHOffset: {
		type: "number",
	},
	containerVOffset: {
		type: "number",
	},
	containerShadowBlur: {
		type: "number",
	},
	containerShadowSpread: {
		type: "number",
	},
	containerShadowColor: {
		type: "string",
	},
	titleLevel: {
		type: "string",
		default: "h5",
	},
	titleFontSize: {
		type: "number",
	},
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	titleColor: {
		type: "string",
	},
	titleBackgroundType: {
		type: "string",
		default: "fill",
	},
	titleBackgroundColor: {
		type: "string",
	},
	titleBackgroundGradient: {
		type: "string",
		default: "linear-gradient(45deg, #141e30, #243b55)",
	},
	tabBorderStyle: {
		type: "string",
		default: "solid",
	},
	tabBorderColor: {
		type: "string",
		default: "transparent",
	},
	tabBorderRadius: {
		type: "number",
	},
	contentAlign: {
		type: "string",
		default: "left",
	},
	contentColor: {
		type: "string",
	},
	contentFontSize: {
		type: "number",
	},
	contentMarginTop: {
		type: "number",
		default: 10,
	},
	contentMarginRight: {
		type: "number",
		default: 10,
	},
	contentMarginBottom: {
		type: "number",
		default: 10,
	},
	contentMarginLeft: {
		type: "number",
		default: 10,
	},
	contentPaddingTop: {
		type: "number",
		default: 0,
	},
	contentPaddingRight: {
		type: "number",
		default: 0,
	},
	contentPaddingBottom: {
		type: "number",
		default: 0,
	},
	contentPaddingLeft: {
		type: "number",
		default: 0,
	},
	contentBackgroundType: {
		type: "string",
		default: "fill",
	},
	contentBackgroundColor: {
		type: "string",
	},
	contentGradient: {
		type: "string",
		default: "linear-gradient(45deg, #ece9e6, #ffffff)",
	},
	displayContentBorder: {
		type: "boolean",
		default: false,
	},
	contentBorderTop: {
		type: "number",
		default: 1,
	},
	contentBorderRight: {
		type: "number",
		default: 1,
	},
	contentBorderBottom: {
		type: "number",
		default: 1,
	},
	contentBorderLeft: {
		type: "number",
		default: 1,
	},
	contentBorderStyle: {
		type: "string",
		default: "solid",
	},
	contentBorderColor: {
		type: "string",
	},
	contentHOffset: {
		type: "number",
	},
	contentVOffset: {
		type: "number",
	},
	contentShadowBlur: {
		type: "number",
	},
	contentShadowSpread: {
		type: "number",
	},
	contentShadowColor: {
		type: "string",
	},
	iconColor: {
		type: "string",
	},
	iconSize: {
		type: "number",
	},
	iconPaddingTop: {
		type: "number",
		default: 0,
	},
	iconPaddingRight: {
		type: "number",
		default: 0,
	},
	iconPaddingBottom: {
		type: "number",
		default: 0,
	},
	iconPaddingLeft: {
		type: "number",
		default: 0,
	},
	iconMarginTop: {
		type: "number",
		default: 0,
	},
	iconMarginRight: {
		type: "number",
		default: 0,
	},
	iconMarginBottom: {
		type: "number",
		default: 0,
	},
	iconMarginLeft: {
		type: "number",
		default: 0,
	},
	iconBackgroundType: {
		type: "string",
		default: "fill",
	},
	iconBackgroundColor: {
		type: "string",
	},
	iconGradient: {
		type: "string",
		default: "linear-gradient(45deg, #8e9eab, #eef2f3)",
	},
	iconSpace: {
		type: "number",
		default: 0,
	},
	iconBorderRadius: {
		type: "number",
		default: 0,
	},
	iconHOffset: {
		type: "number",
	},
	iconVOffset: {
		type: "number",
	},
	iconShadowBlur: {
		type: "number",
	},
	iconShadowSpread: {
		type: "number",
	},
	iconShadowColor: {
		type: "string",
	},
	iconPosition: {
		type: "string",
		default: "right",
	},
	transitionFunction: {
		type: "string",
		source: "attribute",
		selector: ".eb-accordion-container",
		attribute: "data-transition-function",
	},
	tabHOffset: {
		type: "number",
	},
	tabVOffset: {
		type: "number",
	},
	tabShadowBlur: {
		type: "number",
	},
	tabShadowSpread: {
		type: "number",
	},
	tabShadowColor: {
		type: "string",
	},
	titleAlignment: {
		type: "string",
		default: "flex-start",
	},
	tabBorderColorType: {
		type: "string",
		default: "fill",
	},
	tabBorderGradient: {
		type: "string",
		default: "linear-gradient(45deg, #ff512f, #dd2476)",
	},
	tabBorderImageSlice: {
		type: "number",
		default: 0,
	},
	tabBorderWidth: {
		type: "number",
	},
	isHover: {
		type: "boolean",
		default: false,
	},
	hoverColor: {
		type: "string",
	},
	hoverIndex: {
		type: "number",
	},
	activeColor: {
		type: "string",
	},
	activeTitleColor: {
		type: "string",
	},
	containerImageID: {
		type: "string",
	},
	containerImageURL: {
		type: "string",
	},
	containerBackgroundSize: {
		type: "string",
		default: "auto",
	},
	containerBackgroundClip: {
		type: "string",
		default: "border-box",
	},
	containerBackgroundRepeat: {
		type: "string",
		default: "initial",
	},
	containerBackgroundPositionX: {
		type: "number",
		default: 0,
	},
	containerBackgroundPositionY: {
		type: "number",
		default: 0,
	},
	containerBackgoundAttachment: {
		type: "string",
		default: "initial",
	},
	tabMarginTop: {
		type: "number",
		default: 10,
	},
	tabMarginRight: {
		type: "number",
		default: 0,
	},
	tabMarginBottom: {
		type: "number",
		default: 0,
	},
	tabMarginLeft: {
		type: "number",
		default: 0,
	},
	tabPaddingTop: {
		type: "number",
		default: 0,
	},
	tabPaddingRight: {
		type: "number",
		default: 0,
	},
	tabPaddingBottom: {
		type: "number",
		default: 0,
	},
	tabPaddingLeft: {
		type: "number",
		default: 0,
	},
	containerBorderRadius: {
		type: "number",
	},
	linkedContainerMargin: {
		type: "boolean",
		default: false,
	},
	linkedContainerPadding: {
		type: "boolean",
		default: false,
	},
	linkedTabMargin: {
		type: "boolean",
		default: false,
	},
	linkedContentMargin: {
		type: "boolean",
		default: false,
	},
	linkedContentPadding: {
		type: "boolean",
		default: false,
	},
	linkedContentBorder: {
		type: "boolean",
		default: false,
	},
	linkedIconMargin: {
		type: "boolean",
		default: false,
	},
	linkedIconPadding: {
		type: "boolean",
		default: false,
	},
	buttonStyle: {
		type: "string",
		default: "custom",
	},
	containerMarginUnit: {
		type: "string",
		default: "px",
	},
	containerPaddingUnit: {
		type: "string",
		default: "px",
	},
	containerBorderUnit: {
		type: "string",
		default: "px",
	},
	containerRadiusUnit: {
		type: "string",
		default: "px",
	},
	tabMarginUnit: {
		type: "string",
		default: "px",
	},
	tabPaddingUnit: {
		type: "string",
		default: "px",
	},
	tabBorderUnit: {
		type: "string",
		default: "px",
	},
	tabRadiusUnit: {
		type: "string",
		default: "px",
	},
	contentMarginUnit: {
		type: "string",
		default: "px",
	},
	contentPaddingUnit: {
		type: "string",
		default: "px",
	},
	iconSizeUnit: {
		type: "string",
		default: "px",
	},
	iconMarginUnit: {
		type: "string",
		default: "px",
	},
	iconPaddingUnit: {
		type: "string",
		default: "px",
	},
	contentSizeUnit: {
		type: "string",
		default: "px",
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleTextTransform: {
		type: "string",
	},
	titleTextDecoration: {
		type: "string",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	contentFontFamily: {
		type: "string",
	},
	contentFontWeight: {
		type: "string",
		default: "normal",
	},
	contentTextTransform: {
		type: "string",
	},
	contentTextDecoration: {
		type: "string",
	},
	contentLetterSpacing: {
		type: "number",
	},
	contentLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
