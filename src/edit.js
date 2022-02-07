/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";

const {
	softMinifyCssStrings,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	// mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} = window.EBAccordionControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

import {
	typoPrefix_title,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import {
	wrapperWidth,
	rangeIconSize,
	accGapRange,
} from "./constants/rangeNames";

import {
	wrapMarginConst,
	wrapPaddingConst,
	iconMarginConst,
	iconPaddingConst,
	tabMarginConst,
	tabPaddingConst,
	conMarginConst,
	conPaddingConst,
} from "./constants/dimensionsConstants";

import {
	WrpBgConst,
	iconBgConst,
	tabBgConst,
	conBgConst,
} from "./constants/backgroundsConstants";

import {
	WrpBdShadowConst,
	iconBdShadowConst,
	tabBdShadowConst,
	conBdShadowConst,
} from "./constants/borderShadowConstants";

/**
 * Internal dependencies
 */
import arrayMove from "array-move";
import AccordionIcon from "./components/accordion-icon";
import classnames from "classnames";

import Inspector from "./inspector";

const Edit = (props) => {
	const { attributes, setAttributes, className, isSelected, clientId } = props;
	const {
		resOption,
		blockId,
		blockMeta,

		//
		accordionType,
		displayIcon,
		transitionDuration,
		accordions,
		expandedTabs,
		selectedTab,
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

		//
		icnZ_Range,
		TABicnZ_Range,
		MOBicnZ_Range,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select(
				editorStoreForGettingPreivew
			).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-accordion";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	// useEffect(() => {
	// 	mimmikCssForPreviewBtnClick({
	// 		domObj: document,
	// 		select,
	// 	});
	// }, []);

	const blockProps = useBlockProps({
		className: classnames(className, `eb-guten-block-main-parent-wrapper`),
	});

	//
	useEffect(() => {
		if (accordions.length > 0) return;

		const accFirstTime = [
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
		];

		setAttributes({ accordions: accFirstTime });
	}, []);

	const addAccordion = () => {
		let counter = accordions.length + 1;
		let newAccordions = [
			...accordions,
			{
				title: `Accordion Tab Title ${counter}`,
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			},
		];

		setAttributes({ accordions: newAccordions });
	};

	const onDeleteAccordion = (position) => {
		// Callback function for deleting accordion
		let newAccordions = [...accordions];
		newAccordions.splice(position, 1);

		setAttributes({ accordions: newAccordions });
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		// Callback function for sorting accordion
		setAttributes({
			accordions: arrayMove([...accordions], oldIndex, newIndex),
		});
	};

	const isExpanded = (index) => {
		if (accordionType === "accordion") {
			return selectedTab === index;
		}

		if (accordionType === "toggle") {
			return expandedTabs.includes(index);
		}
	};

	const getTabIcon = (index) => {
		// Return icon based on tab hidden/expanded state]
		return isExpanded(index) ? expandedIcon : tabIcon;
	};

	const setToggleType = (index) => {
		// If tab is already expanded, close it, otherwise open it
		let newExpandedTabs = [...expandedTabs];

		newExpandedTabs = newExpandedTabs.includes(index)
			? newExpandedTabs.filter((titleIndex) => titleIndex !== index)
			: [...newExpandedTabs, index];

		setAttributes({ expandedTabs: newExpandedTabs });
	};

	const setAccordionType = (index) => {
		// Save expanded tab name, remove when tab is hidden
		let newSelectedTab = selectedTab === index ? undefined : index;
		setAttributes({ selectedTab: newSelectedTab });
	};

	const onTitleClick = (index) => {
		// Expand / Hide title

		accordionType === "accordion" && setAccordionType(index);
		accordionType === "toggle" && setToggleType(index);
	};

	const onChange = (newValue, index, key) => {
		// onChange callback function for title and content
		let newAccordions = [...accordions];
		newAccordions[index][key] = newValue;

		setAttributes({ accordions: newAccordions });
	};

	//
	// styling codes starts here
	//

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

	// styles related to generateResponsiveRangeStyles start ⬇

	// const {
	// 	rangeStylesDesktop: wrapWidthDesktop,
	// 	rangeStylesTab: wrapWidthTab,
	// 	rangeStylesMobile: wrapWidthMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: wrapperWidth,
	// 	// customUnit: "px",
	// 	property: "max-width",
	// 	attributes,
	// });

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
	// styles related to generateResponsiveRangeStyles end

	const wrapperStylesDesktop = `
	
	.eb-accordion-container .eb-accordion-content-wrapper p{
		border:1px solid #aaa;
	}
	
	.eb-accordion-container.eb_accdn_loaded .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{
		visibility:visible;
		position:static;
	}

	.eb-accordion-container .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{
		visibility:hidden;
		position:absolute;
	}

	.${blockId}.eb-accordion-container .eb-accordion-inner{
		position:relative;
	}

	.${blockId}.eb-accordion-container .eb-accordion-wrapper h3,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper p{
		margin:0;
		padding:0;
	}
	
	
	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapDesktop}
	}
	
	
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


${
	displayIcon
		? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
			display: flex;
			justify-content: center;
			align-items: center;
			${iconMarginDesktop}
			${iconPaddingDesktop}
			${iconBackgroundStylesDesktop}
			${iconBdShdStyesDesktop}
			transition:${iconBgTransitionStyle}, ${iconBdShdTransitionStyle};
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
			${iconHoverBackgroundStylesDesktop}
			${iconBdShdStylesHoverDesktop}
		}
		
		.${blockId}.eb-accordion-container .eb-accordion-icon{
			text-align:center;
			color: ${iconColor};
			${iconSizeDesktop}
			${icnZ_Range ? `width:${icnZ_Range}px;` : ""}
		}
		
		`
		: ""
}

	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		cursor: pointer;
		display: flex;
		align-items: center;
		flex-direction: ${
			iconPosition === "right" && displayIcon ? "row-reverse" : "row"
		};
		${tabBackgroundStylesDesktop}
		${tabMarginDesktop}
		${tabPaddingDesktop}
		${tabBdShdStyesDesktop}
		transition:${tabBgTransitionStyle}, ${tabBdShdTransitionStyle};
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabHoverBackgroundStylesDesktop}
		${tabBdShdStylesHoverDesktop}
	} 
	
	
	.${blockId}.eb-accordion-container .eb-accordion-title{
		text-align:${titleAlignment || "left"};
		flex:1;
		color:${titleColor};
		${titleTypoStylesDesktop}
	}

${
	activeTitleColor
		? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) h3.eb-accordion-title,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab h3.eb-accordion-title{
		${activeTitleColor ? `color: ${activeTitleColor} !important;` : ""}
	}
	`
		: ""
}

${
	activeBgColor
		? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab .eb-accordion-title-wrapper{
		${activeBgColor ? `background-color: ${activeBgColor} !important;` : ""}
	}
	`
		: ""
}
	
	${
		hoverTitleColor
			? `
			.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover .eb-accordion-title{
				color:${hoverTitleColor};
			}
			`
			: ""
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper{
		overflow: hidden !important;
		transition: all ${transitionDuration || 0}s;
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper p{
		color:${contentColor};
		text-align:${contentAlign};
		${conBackgroundStylesDesktop}
		${contentTypoStylesDesktop}
		${conMarginDesktop}
		${conPaddingDesktop}
		${conBdShdStyesDesktop}
		transition:${conBdShdTransitionStyle}, ${conBgTransitionStyle};
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover p{
		${conHoverBackgroundStylesDesktop}
		${conBdShdStylesHoverDesktop}
	}

	`;

	const wrapperStylesTab = `

	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapTab}
	}
	

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



${
	displayIcon
		? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
			${iconMarginTab}
			${iconPaddingTab}
			${iconBdShdStyesTab}
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
			${iconBdShdStylesHoverTab}
		}
		
		.${blockId}.eb-accordion-container .eb-accordion-icon{
			${iconSizeTab}
			${TABicnZ_Range ? `width:${TABicnZ_Range}px;` : ""}
		}
		
		`
		: ""
}



	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		${tabMarginTab}
		${tabPaddingTab}
		${tabBdShdStyesTab}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabBdShdStylesHoverTab}
	} 

	.${blockId}.eb-accordion-container .eb-accordion-title{
		${titleTypoStylesTab}
	}


	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper p{
		${contentTypoStylesTab}
		${conMarginTab}
		${conPaddingTab}
		${conBdShdStyesTab}
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover P{
		${conBdShdStylesHoverTab}
	}



	`;

	const wrapperStylesMobile = `
	
	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapMobile}
	}
	
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



	${
		displayIcon
			? `
			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
				${iconMarginMobile}
				${iconPaddingMobile}
				${iconBdShdStyesMobile}
			}
	
			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
				${iconBdShdStylesHoverMobile}
			}
			
			.${blockId}.eb-accordion-container .eb-accordion-icon{
				${iconSizeMobile}
				${MOBicnZ_Range ? `width:${MOBicnZ_Range}px;` : ""}
			}
			
			`
			: ""
	}
	
	
	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		${tabMarginMobile}
		${tabPaddingMobile}
		${tabBdShdStyesMobile}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabBdShdStylesHoverMobile}
	} 

	.${blockId}.eb-accordion-container .eb-accordion-title{
		${titleTypoStylesMobile}
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper p{
		${contentTypoStylesMobile}
		${conMarginMobile}
		${conPaddingMobile}
		${conBdShdStyesMobile} 
	}
	
	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover P{
		${conBdShdStylesHoverMobile}
	}


	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${wrapperStylesDesktop}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


	`);

	//
	// styling codes End here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return (
		<>
			{isSelected && (
				<Inspector
					{...props}
					addAccordion={addAccordion}
					onDeleteAccordion={onDeleteAccordion}
					onSortEnd={onSortEnd}
					// onLevelChange={onLevelChange}
				/>
			)}
			<div {...blockProps}>
				<style>
					{`


				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
				</style>
				<div className={`${blockId} eb-accordion-container`}>
					<div className="eb-accordion-inner">
						{accordions.map((accordion, index) => (
							<div
								className={`eb-accordion-wrapper ${
									isExpanded(index) ? "expanded_tab" : " "
								} for_edit_page`}
								key={index}
							>
								<div
									className="eb-accordion-title-wrapper"
									onClick={() => onTitleClick(index)}
								>
									{displayIcon && <AccordionIcon icon={getTabIcon(index)} />}

									<RichText
										tagName="h3"
										className="eb-accordion-title"
										allowedFormats={[]}
										placeholder="Add Title Here"
										value={accordion.title}
										onChange={(nextTitle) =>
											onChange(nextTitle, index, "title")
										}
									/>
								</div>

								<div
									className="eb-accordion-content-wrapper"
									style={{
										maxHeight: isExpanded(index) ? 2000 : 0,
										opacity: isExpanded(index) ? 1 : 0,
										overflow: isExpanded(index) ? "visible" : "hidden",
									}}
								>
									<RichText
										tagName="p"
										className="eb-accordion-content"
										placeholder="Add Content Here"
										allowedFormats={["bold", "italic", "strikethrough"]}
										value={accordion.content}
										onChange={(nextContent) =>
											onChange(nextContent, index, "content")
										}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="eb-accordion-add-button">
					<Button
						className="is-default"
						label={__("Add Accordion Item", "essential-blocks")}
						icon="plus-alt"
						onClick={addAccordion}
					>
						<span className="eb-accordion-add-button-label">
							Add Accordion Item
						</span>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Edit;
