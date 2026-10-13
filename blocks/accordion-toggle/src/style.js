/**
 * WordPress dependencies
 */

import {
    typoPrefix_title,
    typoPrefix_content,
    titlePrefixText,
    titleSuffixText
} from "./constants/typographyPrefixConstants";

import { rangeIconSize, accGapRange, titlePrefixIconSize, titlePrefixImgWidth, titlePrefixGap, titleSuffixIconSize, titleSuffixImgWidth, titleSuffixGap } from "./constants/rangeNames";

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

import { isLatestDesign, cssRule } from "./helpers";

const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBAccordionControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        classHook,

        //
        accordionType,
        displayIcon,
        transitionDuration,
        tabIcon,
        expandedIcon,
        titleColor = "#fff",
        contentColor = "#555",
        contentAlign = "left",
        iconColor = "#4a5059",
        iconPosition,
        titleAlignment,
        hoverTitleColor,
        activeBgColor,
        activeTitleColor,
        activeIconColor,
        tagName,
        faqSchema,

        //
        icnZ_Range,
        TABicnZ_Range,
        MOBicnZ_Range,
        accordionChildCount,
        titlePrefixColor,
        titleSuffixColor
    } = attributes;

    // styles related to generateTypographyStyles start ⬇
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 18,
    });

    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
        defaultFontSize: 14,
    });
    const {
        typoStylesDesktop: titlePrefixTextTypoDesktop,
        typoStylesTab: titlePrefixTextTypoTab,
        typoStylesMobile: titlePrefixTextTypoMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: titlePrefixText,
        defaultFontSize: 14,
    });
    const {
        typoStylesDesktop: titleSuffixTextTypoDesktop,
        typoStylesTab: titleSuffixTextTypoTab,
        typoStylesMobile: titleSuffixTextTypoMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: titleSuffixText,
        defaultFontSize: 14,
    });

    // styles related to generateTypographyStyles end

    // styles related to generateBackgroundControlStyles start ⬇

    const {
        backgroundStylesDesktop: wrpBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrpBackgroundStylesTab,
        hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
        backgroundStylesMobile: wrpBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrpOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
        overlayStylesTab: wrpOverlayStylesTab,
        hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
        overlayStylesMobile: wrpOverlayStylesMobile,
        hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
        bgTransitionStyle: wrpBgTransitionStyle,
        ovlTransitionStyle: wrpOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WrpBgConst,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: iconBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: iconHoverBackgroundStylesDesktop,
        bgTransitionStyle: iconBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: iconBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: tabBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: tabHoverBackgroundStylesDesktop,
        bgTransitionStyle: tabBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: tabBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: conBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: conHoverBackgroundStylesDesktop,
        bgTransitionStyle: conBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: conBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    // styles related to generateBackgroundControlStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: iconMarginDesktop,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: tabMarginDesktop,
        dimensionStylesTab: tabMarginTab,
        dimensionStylesMobile: tabMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tabMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: tabPaddingDesktop,
        dimensionStylesTab: tabPaddingTab,
        dimensionStylesMobile: tabPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tabPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: conMarginDesktop,
        dimensionStylesTab: conMarginTab,
        dimensionStylesMobile: conMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: conMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: conPaddingDesktop,
        dimensionStylesTab: conPaddingTab,
        dimensionStylesMobile: conPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: conPaddingConst,
        styleFor: "padding",
    });
    // styles related to generateDimensionsControlStyles end

    // styles related to generateBorderShadowStyles start ⬇
    const {
        styesDesktop: wrpBdShdStyesDesktop,
        styesTab: wrpBdShdStyesTab,
        styesMobile: wrpBdShdStyesMobile,
        stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
        stylesHoverTab: wrpBdShdStylesHoverTab,
        stylesHoverMobile: wrpBdShdStylesHoverMobile,
        transitionStyle: wrpBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: iconBdShdStyesDesktop,
        styesTab: iconBdShdStyesTab,
        styesMobile: iconBdShdStyesMobile,
        stylesHoverDesktop: iconBdShdStylesHoverDesktop,
        stylesHoverTab: iconBdShdStylesHoverTab,
        stylesHoverMobile: iconBdShdStylesHoverMobile,
        transitionStyle: iconBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: iconBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: tabBdShdStyesDesktop,
        styesTab: tabBdShdStyesTab,
        styesMobile: tabBdShdStyesMobile,
        stylesHoverDesktop: tabBdShdStylesHoverDesktop,
        stylesHoverTab: tabBdShdStylesHoverTab,
        stylesHoverMobile: tabBdShdStylesHoverMobile,
        transitionStyle: tabBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: tabBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: conBdShdStyesDesktop,
        styesTab: conBdShdStyesTab,
        styesMobile: conBdShdStyesMobile,
        stylesHoverDesktop: conBdShdStylesHoverDesktop,
        stylesHoverTab: conBdShdStylesHoverTab,
        stylesHoverMobile: conBdShdStylesHoverMobile,
        transitionStyle: conBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: conBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });
    // styles related to generateBorderShadowStyles end

    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: accGapDesktop,
        rangeStylesTab: accGapTab,
        rangeStylesMobile: accGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: accGapRange,
        customUnit: "px",
        property: "padding-top",
        attributes,
    });

    const {
        rangeStylesDesktop: titlePrefixIconWidthDesktop,
        rangeStylesTab: titlePrefixIconWidthTab,
        rangeStylesMobile: titlePrefixIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: titlePrefixIconSize,
        customUnit: "px",
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: titlePrefixIconHeightDesktop,
        rangeStylesTab: titlePrefixIconHeightTab,
        rangeStylesMobile: titlePrefixIconHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: titlePrefixIconSize,
        customUnit: "px",
        property: "height",
        attributes,
    });
    const {
        rangeStylesDesktop: titlePrefixIconSizeDesktop,
        rangeStylesTab: titlePrefixIconSizeTab,
        rangeStylesMobile: titlePrefixIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: titlePrefixIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });
    const {
        rangeStylesDesktop: titlePrefixImgWidthDesktop,
        rangeStylesTab: titlePrefixImgWidthTab,
        rangeStylesMobile: titlePrefixImgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: titlePrefixImgWidth,
        customUnit: "px",
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: titlePrefixGapDesktop,
        rangeStylesTab: titlePrefixGapTab,
        rangeStylesMobile: titlePrefixGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: titlePrefixGap,
        customUnit: "px",
        property: "gap",
        attributes,
    });

    const {
        rangeStylesDesktop: titleSuffixIconWidthDesktop,
        rangeStylesTab: titleSuffixIconWidthTab,
        rangeStylesMobile: titleSuffixIconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: titleSuffixIconSize,
        customUnit: "px",
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: titleSuffixIconHeightDesktop,
        rangeStylesTab: titleSuffixIconHeightTab,
        rangeStylesMobile: titleSuffixIconHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: titleSuffixIconSize,
        customUnit: "px",
        property: "height",
        attributes,
    });
    const {
        rangeStylesDesktop: titleSuffixIconSizeDesktop,
        rangeStylesTab: titleSuffixIconSizeTab,
        rangeStylesMobile: titleSuffixIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: titleSuffixIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });
    const {
        rangeStylesDesktop: titleSuffixImgWidthDesktop,
        rangeStylesTab: titleSuffixImgWidthTab,
        rangeStylesMobile: titleSuffixImgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: titleSuffixImgWidth,
        customUnit: "px",
        property: "width",
        attributes,
    });
    // styles related to generateResponsiveRangeStyles end

    // 1.4.0 styles (individual item box, expanded item box, prefix / suffix boxes) ⬇
    const latestDesign = isLatestDesign(attributes);

    const dimensions = (controlName, styleFor) => {
        const {
            dimensionStylesDesktop: desktop,
            dimensionStylesTab: tab,
            dimensionStylesMobile: mobile,
        } = generateDimensionsControlStyles({ attributes, controlName, styleFor });
        return { desktop, tab, mobile };
    };

    const background = (controlName) => {
        const {
            backgroundStylesDesktop: desktop,
            hoverBackgroundStylesDesktop: hoverDesktop,
            bgTransitionStyle: transition,
        } = generateBackgroundControlStyles({
            attributes,
            controlName,
            noOverlay: true,
            noMainBgi: true,
        });
        return { desktop, hoverDesktop, transition };
    };

    const borderShadow = (controlName) => {
        const {
            styesDesktop: desktop,
            styesTab: tab,
            styesMobile: mobile,
            stylesHoverDesktop: hoverDesktop,
            stylesHoverTab: hoverTab,
            stylesHoverMobile: hoverMobile,
            transitionStyle: transition,
        } = generateBorderShadowStyles({ controlName, attributes });
        return { desktop, tab, mobile, hoverDesktop, hoverTab, hoverMobile, transition };
    };

    const itemMargin = dimensions(accordionMargin, "margin");
    const itemPadding = dimensions(accordionPadding, "padding");
    const itemBg = background(accordionBackground);
    const itemExpandedBg = background(accordionExpandedBackground);
    const itemBorder = borderShadow(accordionBorder);
    const itemExpandedBorder = borderShadow(accordionExpandedBorder);

    const prefixMargin = dimensions(titlePrefixMargin, "margin");
    const prefixPadding = dimensions(titlePrefixPadding, "padding");
    const suffixMargin = dimensions(titleSuffixMargin, "margin");
    const suffixPadding = dimensions(titleSuffixPadding, "padding");
    const prefixBg = background(titlePrefixBG);
    const suffixBg = background(titleSuffixBG);
    const prefixBorder = borderShadow(titlePrefixBorder);
    const suffixBorder = borderShadow(titleSuffixBorder);

    // Item selectors: the saved markup on the front end, and the item block's own
    // wrapper inside the editor's block list (only the editor markup carries the
    // `eb-accordion-wrapper-{parent id}` class). A closed item is
    // `.eb-accordion-hidden` on the front end and `.eb-accordion-editor-collapsed`
    // in the editor.
    const itemSel = (suffix = "") =>
        `.${blockId}.eb-accordion-container > .eb-accordion-inner > .eb-accordion-wrapper${suffix},
        .${blockId}.eb-accordion-container .eb-accordion-wrapper-${blockId}.eb-accordion-wrapper${suffix.replace(
            "eb-accordion-hidden",
            "eb-accordion-editor-collapsed"
        )}`;
    const prefixSel = (hover = false) =>
        `.${blockId}.eb-accordion-container ${hover ? ".eb-accordion-title-wrapper:hover " : ""}.title-content-${blockId} .eb-accordion-title-prefix-text,
        .${blockId}.eb-accordion-container ${hover ? ".eb-accordion-title-wrapper:hover " : ""}.title-content-${blockId} .eb-accordion-title-prefix-icon`;
    const suffixSel = (hover = false) =>
        `.${blockId}.eb-accordion-container ${hover ? ".eb-accordion-title-wrapper:hover " : ""}.title-content-${blockId} .eb-accordion-title-suffix-text,
        .${blockId}.eb-accordion-container ${hover ? ".eb-accordion-title-wrapper:hover " : ""}.title-content-${blockId} .eb-accordion-title-suffix-icon`;

    const boxStylesDesktop = [
        cssRule(
            itemSel(),
            [itemMargin.desktop, itemPadding.desktop, itemBorder.desktop, itemBg.desktop],
            `${itemBg.transition}, ${itemBorder.transition}`
        ),
        cssRule(itemSel(":hover"), [itemBg.hoverDesktop, itemBorder.hoverDesktop]),
        cssRule(
            itemSel(":not(.eb-accordion-hidden)"),
            [itemExpandedBg.desktop, itemExpandedBorder.desktop],
            `${itemExpandedBg.transition}, ${itemExpandedBorder.transition}`
        ),
        cssRule(itemSel(":hover:not(.eb-accordion-hidden)"), [
            itemExpandedBg.hoverDesktop,
            itemExpandedBorder.hoverDesktop,
        ]),
        cssRule(
            prefixSel(),
            [prefixBg.desktop, prefixMargin.desktop, prefixPadding.desktop, prefixBorder.desktop],
            `${prefixBg.transition}, ${prefixBorder.transition}`
        ),
        cssRule(prefixSel(true), [prefixBg.hoverDesktop, prefixBorder.hoverDesktop]),
        cssRule(
            suffixSel(),
            [suffixBg.desktop, suffixMargin.desktop, suffixPadding.desktop, suffixBorder.desktop],
            `${suffixBg.transition}, ${suffixBorder.transition}`
        ),
        cssRule(suffixSel(true), [suffixBg.hoverDesktop, suffixBorder.hoverDesktop]),
        activeIconColor
            ? `.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper-${blockId} .eb-accordion-icon {
                color: ${activeIconColor} !important;
            }`
            : "",
    ].join("\n");

    const boxStylesFor = (device) =>
        [
            cssRule(itemSel(), [itemMargin[device], itemPadding[device], itemBorder[device]]),
            cssRule(itemSel(":hover"), [itemBorder[`hover${device === "tab" ? "Tab" : "Mobile"}`]]),
            cssRule(itemSel(":not(.eb-accordion-hidden)"), [itemExpandedBorder[device]]),
            cssRule(itemSel(":hover:not(.eb-accordion-hidden)"), [
                itemExpandedBorder[`hover${device === "tab" ? "Tab" : "Mobile"}`],
            ]),
            cssRule(prefixSel(), [prefixMargin[device], prefixPadding[device], prefixBorder[device]]),
            cssRule(suffixSel(), [suffixMargin[device], suffixPadding[device], suffixBorder[device]]),
        ].join("\n");

    const boxStylesTab = boxStylesFor("tab");
    const boxStylesMobile = boxStylesFor("mobile");

    /**
     * Fixes from the Essential Blocks accordion that change how an existing design
     * looks, applied to latest-design blocks only (see `designVersion`):
     * - Expanded Title Colour applied to every title tag, not only H3.
     * - Accordions Gap scoped to this accordion's own items, so it no longer leaks
     *   into a nested accordion.
     * - A visible keyboard focus ring on the item title.
     */
    const latestDesignStyles = (gapStyles, desktop = false) =>
        latestDesign
            ? `
        ${desktop && activeTitleColor
                ? `.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper-${blockId} .eb-accordion-title{
                color: ${activeTitleColor} !important;
            }`
                : ""}
        ${gapStyles.trim()
                ? `.${blockId}.eb-accordion-container > .eb-accordion-inner > .eb-accordion-wrapper + .eb-accordion-wrapper{
                ${gapStyles}
            }`
                : ""}
        ${desktop
                ? `.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId}{
            outline: unset;
        }
        .${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId}:focus-visible{
            outline: 2px solid #5b4cff;
            outline-offset: 2px;
        }`
                : ""}`
            : "";

    // Legacy gap rule: a descendant selector, so it also reaches nested accordions.
    // Kept byte-for-byte for blocks saved before 1.4.0.
    const legacyGapRule = (gapStyles) =>
        latestDesign
            ? ""
            : `.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${gapStyles}
	}`;

    // Legacy expanded-title rule targets h3 only. Kept for blocks saved before 1.4.0.
    const legacyActiveTitleRule = latestDesign
        ? ""
        : activeTitleColor
            ? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) h3.eb-accordion-title,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab h3.eb-accordion-title{
		${activeTitleColor ? `color: ${activeTitleColor} !important;` : ""}
	}
	`
            : "";

    const wrapperStylesDesktop = `

	.eb-accordion-item.is-selected .eb-accordion-content-wrapper-${blockId} {
		height:auto;
		opacity: 0;
		overflow: visible;
	}

	.eb-accordion-container.eb_accdn_loaded .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper-${blockId}{
		visibility:visible;
		position:static;
	}

	.eb-accordion-container .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper-${blockId}{
		visibility:hidden;
		position:absolute;
	}

	.${blockId}.eb-accordion-container .eb-accordion-inner{
		position:relative;
	}

	.${blockId}.eb-accordion-container .eb-accordion-wrapper h1,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h2,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h3,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h4,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h5,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h6,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper p{
		margin:0;
		padding:0;
	}


	${legacyGapRule(accGapDesktop)}
	${latestDesignStyles(accGapDesktop, true)}
	${boxStylesDesktop}


	.${blockId}.eb-accordion-container{
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpBdShdStyesDesktop}
		transition:${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		overflow:hidden;
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesDesktop}
		transition:${wrpOvlTransitionStyle};
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesDesktop}
	}


${displayIcon
            ? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}{
			display: flex;
			justify-content: center;
			align-items: center;
			${iconMarginDesktop}
			${iconPaddingDesktop}
			${iconBackgroundStylesDesktop}
			${iconBdShdStyesDesktop}
			transition:${iconBgTransitionStyle}, ${iconBdShdTransitionStyle};
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}:hover{
			${iconHoverBackgroundStylesDesktop}
			${iconBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId} .eb-accordion-icon{
			text-align:center;
			color: ${iconColor};
			${iconSizeDesktop}
			${icnZ_Range ? `width:${icnZ_Range}px;` : ""}
		}

		`
            : ""
        }

	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId} {
		cursor: pointer;
		display: flex;
		align-items: center;
		flex-direction: ${iconPosition === "right" && displayIcon ? "row-reverse" : "row"
        };
		${tabBackgroundStylesDesktop}
		${tabMarginDesktop}
		${tabPaddingDesktop}
		${tabBdShdStyesDesktop}
		transition:${tabBgTransitionStyle}, ${tabBdShdTransitionStyle};
	}

	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId}:hover{
		${tabHoverBackgroundStylesDesktop}
		${tabBdShdStylesHoverDesktop}
	}
	.${blockId}.eb-accordion-container .title-content-${blockId}{
		justify-content:${titleAlignment || "left"};
		flex:1;
        ${titlePrefixGapDesktop}
	}
	.${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title{
        color:${titleColor};
		${titleTypoStylesDesktop}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-text{
		color:${titlePrefixColor};
		${titlePrefixTextTypoDesktop}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-icon{
		color:${titlePrefixColor};
		${titlePrefixIconWidthDesktop}
		${titlePrefixIconHeightDesktop}
		${titlePrefixIconSizeDesktop}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-img{
		${titlePrefixImgWidthDesktop}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-text{
		color:${titleSuffixColor};
		${titleSuffixTextTypoDesktop}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-icon{
		color:${titleSuffixColor};
		${titleSuffixIconWidthDesktop}
		${titleSuffixIconHeightDesktop}
		${titleSuffixIconSizeDesktop}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-img{
		${titleSuffixImgWidthDesktop}
	}

${legacyActiveTitleRule}

${activeBgColor
            ? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper-${blockId},
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab .eb-accordion-title-wrapper-${blockId}{
		${activeBgColor
                ? `background-color: ${activeBgColor} !important; background-image: unset`
                : ""
            }
	}
	`
            : ""
        }

	${hoverTitleColor
            ? `
			.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover .title-content-${blockId} .eb-accordion-title{
				color:${hoverTitleColor};
			}
			`
            : ""
        }

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId} .eb-accordion-content{
		color:${contentColor};
		text-align:${contentAlign};
		${conBackgroundStylesDesktop}
		${contentTypoStylesDesktop}
		${conMarginDesktop}
		${conPaddingDesktop}
		${conBdShdStyesDesktop}
		transition:${conBdShdTransitionStyle}, ${conBgTransitionStyle};
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId}:hover .eb-accordion-content{
		${conHoverBackgroundStylesDesktop}
		${conBdShdStylesHoverDesktop}
	}

	`;

    const wrapperStylesTab = `

	${legacyGapRule(accGapTab)}
	${latestDesignStyles(accGapTab)}
	${boxStylesTab}


	.${blockId}.eb-accordion-container{
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBackgroundStylesTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesTab}
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesTab}
	}



${displayIcon
            ? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}{
			${iconMarginTab}
			${iconPaddingTab}
			${iconBdShdStyesTab}
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}:hover{
			${iconBdShdStylesHoverTab}
		}

		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId} .eb-accordion-icon{
			${iconSizeTab}
			${TABicnZ_Range ? `width:${TABicnZ_Range}px;` : ""}
		}

		`
            : ""
        }



	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId} {
		${tabMarginTab}
		${tabPaddingTab}
		${tabBdShdStyesTab}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId}:hover{
		${tabBdShdStylesHoverTab}
	}

	.${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title{
		${titleTypoStylesTab}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId}{
        ${titlePrefixGapTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-text{
        ${titlePrefixTextTypoTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-icon{
        ${titlePrefixIconWidthTab}
        ${titlePrefixIconHeightTab}
        ${titlePrefixIconSizeTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-img{
        ${titlePrefixImgWidthTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-text{
        ${titleSuffixTextTypoTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-icon{
        ${titleSuffixIconWidthTab}
        ${titleSuffixIconHeightTab}
        ${titleSuffixIconSizeTab}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-img{
        ${titleSuffixImgWidthTab}
    }




	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId} .eb-accordion-content{
		${contentTypoStylesTab}
		${conMarginTab}
		${conPaddingTab}
		${conBdShdStyesTab}
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId}:hover .eb-accordion-content{
		${conBdShdStylesHoverTab}
	}



	`;

    const wrapperStylesMobile = `

	${legacyGapRule(accGapMobile)}
	${latestDesignStyles(accGapMobile)}
	${boxStylesMobile}

	.${blockId}.eb-accordion-container{
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesMobile}
	}



	${displayIcon
            ? `
			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}{
				${iconMarginMobile}
				${iconPaddingMobile}
				${iconBdShdStyesMobile}
			}

			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId}:hover{
				${iconBdShdStylesHoverMobile}
			}

			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper-${blockId} .eb-accordion-icon{
				${iconSizeMobile}
				${MOBicnZ_Range ? `width:${MOBicnZ_Range}px;` : ""}
			}

			`
            : ""
        }


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId} {
		${tabMarginMobile}
		${tabPaddingMobile}
		${tabBdShdStyesMobile}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper-${blockId}:hover{
		${tabBdShdStylesHoverMobile}
	}

	.${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title{
		${titleTypoStylesMobile}
	}
    .${blockId}.eb-accordion-container .title-content-${blockId}{
        ${titlePrefixGapMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-text{
        ${titlePrefixTextTypoMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-icon{
        ${titlePrefixIconWidthMobile}
        ${titlePrefixIconHeightMobile}
        ${titlePrefixIconSizeMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-prefix-img{
        ${titlePrefixImgWidthMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-text{
        ${titleSuffixTextTypoMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-icon{
        ${titleSuffixIconWidthMobile}
        ${titleSuffixIconHeightMobile}
        ${titleSuffixIconSizeMobile}
    }
    .${blockId}.eb-accordion-container .title-content-${blockId} .eb-accordion-title-suffix-img{
        ${titleSuffixImgWidthMobile}
    }


	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId} .eb-accordion-content{
		${contentTypoStylesMobile}
		${conMarginMobile}
		${conPaddingMobile}
		${conBdShdStyesMobile}
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper-${blockId}:hover .eb-accordion-content{
		${conBdShdStylesHoverMobile}
	}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
	`);

    /**
     * Editor-only restatement of the Accordions Gap.
     *
     * The gap ships as `padding-top` on
     * `.eb-accordion-wrapper + .eb-accordion-wrapper`, which relies on the wrappers
     * being adjacent siblings. That holds on the front end, where save() renders them
     * straight into `.eb-accordion-inner`. In the editor InnerBlocks puts every item
     * inside its own `.block-editor-block-list__block` wrapper within a
     * `.block-editor-block-list__layout`, and StyleComponent's <style> element sits
     * between items, so no two `.eb-accordion-wrapper` elements are ever adjacent and
     * the rule matched nothing -- the gap silently did nothing in the editor.
     *
     * Rather than duplicate the stylesheet, the same generated value is re-applied
     * against the editor's own structure and handed to StyleComponent through its
     * `editorDesktopStyles` / `editorTabStyles` / `editorMobileStyles` props, which it
     * renders in place of the front-end strings when present. The front-end CSS, and
     * everything written into `blockMeta` for the generated stylesheet, is untouched.
     */
    const editorGapStyles = (gapStyles) =>
        gapStyles
            ? `
	.${blockId}.eb-accordion-container .block-editor-block-list__layout > *:not(:first-child) .eb-accordion-wrapper{
		${gapStyles}
	}`
            : "";

    const editorDesktopStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${editorGapStyles(accGapDesktop)}
	`);

    const editorTabStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${editorGapStyles(accGapTab)}
	`);

    const editorMobileStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${editorGapStyles(accGapMobile)}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
	`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                editorDesktopStyles={editorDesktopStyles}
                editorTabStyles={editorTabStyles}
                editorMobileStyles={editorMobileStyles}
                blockName={name}
            />
        </>
    );
}
