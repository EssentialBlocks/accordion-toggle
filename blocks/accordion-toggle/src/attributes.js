import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
	wrapMarginConst,
	wrapPaddingConst,
	iconMarginConst,
	iconPaddingConst,
	tabMarginConst,
	tabPaddingConst,
	conMarginConst,
	conPaddingConst,
	accordionMargin,
	accordionPadding,
	titlePrefixPadding,
	titleSuffixPadding,
	titlePrefixMargin,
	titleSuffixMargin,
} from "./constants/dimensionsConstants";

import {
	WrpBgConst,
	iconBgConst,
	tabBgConst,
	conBgConst,
	accordionBackground,
	accordionExpandedBackground,
	titlePrefixBG,
	titleSuffixBG,
} from "./constants/backgroundsConstants";

import {
	WrpBdShadowConst,
	iconBdShadowConst,
	tabBdShadowConst,
	conBdShadowConst,
	accordionBorder,
	accordionExpandedBorder,
	titlePrefixBorder,
	titleSuffixBorder,
} from "./constants/borderShadowConstants";

import { 
    rangeIconSize, 
    accGapRange, 
    titlePrefixIconSize, 
    titlePrefixImgWidth, 
    titlePrefixGap, 
    titleSuffixIconSize, 
    titleSuffixImgWidth, 
    titleSuffixGap 
} from "./constants/rangeNames";

const {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,
} = window.EBAccordionControls;

const attributes = {
	// the following 4 attributes is must required for responsive options and asset generation for frontend
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "Desktop",
	},
	// blockId attribute for making unique className and other uniqueness ⬇
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	// blockMeta is for keeping all the styles ⬇
	blockMeta: {
		type: "object",
	},
	// accordion attributes starts
	accordionType: {
		type: "string",
		source: "attribute",
		selector: ".eb-accordion-container",
		attribute: "data-accordion-type",
		default: "accordion",
	},
	displayIcon: {
		type: "boolean",
		default: true,
	},
	tabIcon: {
		type: "string",
	},
	expandedIcon: {
		type: "string",
	},
	transitionDuration: {
		type: "number",
		default: 0.5,
	},

	contentAlign: {
		type: "string",
		default: "left",
	},
	titleAlignment: {
		type: "string",
		default: "left",
	},
	titleColor: {
		type: "string",
	},
	contentColor: {
		type: "string",
	},

	iconColor: {
		type: "string",
	},

	iconPosition: {
		type: "string",
		default: "right",
	},

	hoverTitleColor: {
		type: "string",
	},
	activeBgColor: {
		type: "string",
		default: "",
	},
	activeTitleColor: {
		type: "string",
		default: "",
	},
	tagName: {
		type: "string",
		default: "h3",
	},
	accordionChildCount: {
		type: "number",
		default: 3,
	},
	faqSchema: {
		type: "boolean",
		default: false,
	},

	/**
	 * Design/behaviour generation of this block.
	 *
	 * Blocks saved before 1.3.1 have no value and keep their exact 1.3.0 CSS and
	 * frontend behaviour, even when re-saved. Blocks inserted from 1.3.1 on (and
	 * blocks the user opts in from the Advanced tab) get 2, which turns on the fixes
	 * that would otherwise change an existing design: expanded title colour for every
	 * heading tag, the nested-accordion gap fix, the keyboard focus ring and
	 * scroll-into-view on open. No default, so it is never written for old blocks.
	 */
	designVersion: {
		type: "number",
	},
	activeIconColor: {
		type: "string",
		default: "",
	},

    titlePrefixColor: {
        type: "string",
        default: "#000",
    },

    titleSuffixColor: {
        type: "string",
        default: "#000",
    },

    ...generateResponsiveRangeAttributes(titlePrefixIconSize, {
        defaultRange: 20,
    }),

    ...generateResponsiveRangeAttributes(titlePrefixImgWidth, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(titlePrefixGap, {
        defaultRange: 15,
    }),

    ...generateResponsiveRangeAttributes(titleSuffixIconSize, {
        defaultRange: 20,
    }),

    ...generateResponsiveRangeAttributes(titleSuffixImgWidth, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(titleSuffixGap, {
        defaultRange: 15,
    }),

	// typography attributes
	...generateTypographyAttributes(Object.values(typoPrefixs)),

	// Responsive Range Controller attributes starts

	// ...generateResponsiveRangeAttributes(wrapperWidth, {
	// 	// noUnits: true,
	// 	defaultUnit: "%",
	// 	defaultRange: 100,
	// }),
	...generateResponsiveRangeAttributes(rangeIconSize, {
		noUnits: true,
		defaultRange: 20,
	}),
	...generateResponsiveRangeAttributes(accGapRange, {
		noUnits: true,
		defaultRange: 15,
	}),

	// Responsive Range Controller attributes ends

	// boxs background attributes ⬇

	...generateBackgroundAttributes(WrpBgConst, {
		// defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
		defaultBgGradient:
			"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
	}),
	...generateBackgroundAttributes(iconBgConst, {
		// defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
		defaultBgGradient:
			"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBackgroundAttributes(tabBgConst, {
		isBgDefaultGradient: true,
		noMainBgi: true,
		defaultFillColor: "#8672ff",
		// defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
		defaultBgGradient:
			"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBackgroundAttributes(conBgConst, {
		noMainBgi: true,
		// defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
		defaultBgGradient:
			"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
		noOverlay: true,
		noMainBgi: true,
	}),

	// boxs background attributes ends

	// boxs BorderShadow attributes ⬇

	...generateBorderShadowAttributes(WrpBdShadowConst),
	...generateBorderShadowAttributes(iconBdShadowConst),
	...generateBorderShadowAttributes(tabBdShadowConst),
	...generateBorderShadowAttributes(conBdShadowConst, {
		defaultBdrColor: "#aaaaaa",
		defaultBdrStyle: "solid",
	}),

	// boxs BorderShadow attributes ends

	// dimensions Control related Attributes start

	...generateDimensionsAttributes(wrapMarginConst),
	...generateDimensionsAttributes(wrapPaddingConst),
	...generateDimensionsAttributes(iconMarginConst),
	...generateDimensionsAttributes(iconPaddingConst),
	...generateDimensionsAttributes(tabMarginConst),
	...generateDimensionsAttributes(tabPaddingConst, {
		top: 15,
		bottom: 15,
		left: 20,
		right: 20,
		isLinked: false,
	}),
	...generateDimensionsAttributes(conMarginConst),
	...generateDimensionsAttributes(conPaddingConst, {
		top: 10,
		bottom: 10,
		left: 15,
		right: 15,
		// isLinked: false,
	}),

	// dimensions Control related Attributes ends

	// 1.3.1: individual accordion item box (normal + expanded) and the title
	// prefix / suffix boxes, ported from the Essential Blocks accordion. All start
	// empty, so they produce no CSS until the user sets them.
	...generateDimensionsAttributes(accordionMargin),
	...generateDimensionsAttributes(accordionPadding),
	...generateBackgroundAttributes(accordionBackground, {
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBackgroundAttributes(accordionExpandedBackground, {
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBorderShadowAttributes(accordionBorder),
	...generateBorderShadowAttributes(accordionExpandedBorder),

	...generateDimensionsAttributes(titlePrefixMargin),
	...generateDimensionsAttributes(titlePrefixPadding),
	...generateDimensionsAttributes(titleSuffixMargin),
	...generateDimensionsAttributes(titleSuffixPadding),
	...generateBackgroundAttributes(titlePrefixBG, {
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBackgroundAttributes(titleSuffixBG, {
		noOverlay: true,
		noMainBgi: true,
	}),
	...generateBorderShadowAttributes(titlePrefixBorder),
	...generateBorderShadowAttributes(titleSuffixBorder),
};

export default attributes;