/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; 
const { Component, useEffect, createRef } = wp.element;
const {
	RichText,
	BlockControls,
	useBlockProps,
} = wp.blockEditor;
const { ToolbarGroup, ToolbarItem, ToolbarButton, Button } = wp.components;
const { select } = wp.data;

/**
 * Internal dependencies
 */
import arrayMove from "array-move";
import AccordionIcon from "./accordion-icon";
import "./editor.scss";
import Inspector from "./inspector";
import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_BG,
	TITLE_BORDER,
	TITLE_PADDING,
	CONTENT_BORDER,
	CONTENT_PADDING,
	CONTENT_BG,
} from "./constants/constants";
import { TITLE_TYPOGRAPHY, CONTENT_TYPOGRAPHY } from "./constants/typography-constant";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	generateBackgroundControlStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

import uuid from "../util/uuid";
// import switchFontSizes from "../util/helper";

export default function Edit(props) {
	const { isSelected, attributes, setAttributes, clientId } = props;
	const {
		resOption,
		blockId,
		blockMeta,
		accordionType,
		displayIcon,
		transitionDuration,
		accordionStyle,
		backgroundType,
		containerBackground,
		containerGradient,
		containerBorderSize,
		containerBorderType,
		containerBorderColor,
		containerMarginTop,
		containerMarginRight,
		containerMarginBottom,
		containerMarginLeft,
		containerPaddingTop,
		containerPaddingRight,
		containerPaddingBottom,
		containerPaddingLeft,
		accordions,
		expandedTabs,
		selectedTab,
		tabIcon,
		expandedIcon,
		containerHOffset,
		containerVOffset,
		containerShadowSpread,
		containerShadowBlur,
		containerShadowColor,
		titleLevel,
		titleColor,
		titleBackgroundType,
		titleBackgroundColor,
		titleBackgroundGradient,
		tabBorderStyle,
		tabBorderColor,
		tabBorderRadius,
		contentAlign,
		contentColor,
		contentFontSize,
		contentMarginTop,
		contentMarginRight,
		contentMarginBottom,
		contentMarginLeft,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,
		contentBackgroundType,
		contentBackgroundColor,
		contentGradient,
		contentBorderStyle,
		contentBorderColor,
		contentHOffset,
		contentVOffset,
		contentShadowColor,
		contentShadowBlur,
		contentShadowSpread,
		iconColor,
		iconSize,
		iconMarginTop,
		iconMarginRight,
		iconMarginBottom,
		iconMarginLeft,
		iconPaddingTop,
		iconPaddingRight,
		iconPaddingBottom,
		iconPaddingLeft,
		iconBackgroundType,
		iconBackgroundColor,
		iconGradient,
		iconSpace,
		iconBorderRadius,
		iconPosition,
		iconHOffset,
		iconVOffset,
		iconShadowBlur,
		iconShadowSpread,
		iconShadowColor,
		transitionFunction,
		tabHOffset,
		tabVOffset,
		tabShadowBlur,
		tabShadowSpread,
		tabShadowColor,
		titleAlignment,
		tabBorderColorType,
		tabBorderGradient,
		tabBorderImageSlice,
		tabBorderWidth,
		isHover,
		hoverColor,
		hoverIndex,
		activeColor,
		activeTitleColor,
		containerImageID,
		containerImageURL,
		containerBackgroundSize,
		containerBackgroundClip,
		containerBackgroundRepeat,
		containerBackgroundPositionX,
		containerBackgroundPositionY,
		containerBackgoundAttachment,
		tabMarginTop,
		tabMarginRight,
		tabMarginBottom,
		tabMarginLeft,
		tabPaddingTop,
		tabPaddingRight,
		tabPaddingBottom,
		tabPaddingLeft,
		contentBorderTop,
		contentBorderRight,
		contentBorderBottom,
		contentBorderLeft,
		containerBorderRadius,
		containerMarginUnit,
		containerPaddingUnit,
		containerBorderUnit,
		containerRadiusUnit,
		tabMarginUnit,
		tabPaddingUnit,
		tabBorderUnit,
		tabRadiusUnit,
		contentMarginUnit,
		contentPaddingUnit,
		iconSizeUnit,
		iconMarginUnit,
		iconPaddingUnit,
		contentSizeUnit,
		titleFontSize,
		titleSizeUnit,
		titleFontFamily,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		contentFontFamily,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
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

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});



	//Add Accordion
	const addAccordion = () => {
		let counter = accordions.length + 1;
		let accordions = [
			...accordions,
			{
				title: `Add Accordion Title ${counter}`,
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			},
		];

		setAttributes({ accordions });
	}

	const onDeleteAccordion = (position) => {
		// Callback function for deleting accordion
		let accordions = [...accordions];
		accordions.splice(position, 1);

		setAttributes({ accordions });
	}

	const onSortEnd = (oldIndex, newIndex) => {
		// Callback function for sorting accordion
		setAttributes({
			accordions: arrayMove(accordions, oldIndex, newIndex),
		});
	}

	const isExpanded = (index) => {
		// Return true if tab is expanded

		if (accordionType === "accordion") {
			return selectedTab === index;
		}

		if (accordionType === "toggle") {
			return expandedTabs.includes(index);
		}
	}

	const getContainerBackground = () => {

		switch (backgroundType) {
			case "fill":
				return containerBackground;
			case "gradient":
				return containerGradient;
			case "image":
				return `url('${containerImageURL}')`;
		}
	}

	const getContainerBackgroundImage = () => {

		return backgroundType === "gradient"
			? containerGradient
			: backgroundType === "image" && containerImageURL
			? `url('${containerImageURL}')`
			: "none";
	}

	const setHoverColor = (index) => {

		if (hoverIndex === index && hoverColor) {
			return hoverColor;
		}
	}

	// setToggleActiveColor(index) {
	// 	const { expandedTabs, activeColor } = attributes;

	// 	if (expandedTabs.includes(index)) {
	// 		return activeColor || DEFAULT_TITLE_COLOR;
	// 	}
	// }

	// setAccordionActiveColor(index) {
	// 	const { selectedTab, activeColor } = attributes;

	// 	if (selectedTab === index) {
	// 		return activeColor || DEFAULT_TITLE_COLOR;
	// 	}
	// }

	// getTitleBackground(index) {
	// 	const {
	// 		titleBackgroundType,
	// 		accordionType,
	// 		titleBackgroundColor,
	// 	} = attributes;

	// 	let activeColor;

	// 	if (titleBackgroundType === "fill") {
	// 		if (accordionType === "accordion") {
	// 			activeColor = setAccordionActiveColor(index);
	// 		}

	// 		if (accordionType === "toggle") {
	// 			activeColor = setToggleActiveColor(index);
	// 		}

	// 		let hoverColor = setHoverColor(index);

	// 		// Show hover, active or default background color
	// 		return (
	// 			hoverColor ||
	// 			activeColor ||
	// 			titleBackgroundColor ||
	// 			DEFAULT_TITLE_BACKGROUND
	// 		);
	// 	}

	// 	return "transparent";
	// }

	// setToggleTitleColor(index) {
	// 	const { expandedTabs, activeTitleColor } = attributes;

	// 	if (expandedTabs.includes(index)) {
	// 		return activeTitleColor || DEFAULT_TITLE_COLOR;
	// 	}
	// }

	// setAccordionTitleColor(index) {
	// 	const { selectedTab, activeTitleColor } = attributes;

	// 	if (selectedTab === index) {
	// 		return activeTitleColor || DEFAULT_TITLE_COLOR;
	// 	}
	// }

	// getTitleColor(index) {
	// 	const { accordionType, titleColor } = attributes;

	// 	let activeTitleColor;

	// 	if (accordionType === "accordion") {
	// 		activeTitleColor = setAccordionTitleColor(index);
	// 	}

	// 	if (accordionType === "toggle") {
	// 		activeTitleColor = setToggleTitleColor(index);
	// 	}

	// 	// Show active or default title color
	// 	return activeTitleColor || titleColor || DEFAULT_TITLE_COLOR;
	// }

	const setToggleType = (index) => {
		// If tab is already expanded, close it, otherwise open it
		let expandedTabs = [...expandedTabs];

		expandedTabs = expandedTabs.includes(index)
			? expandedTabs.filter((titleIndex) => titleIndex !== index)
			: [...expandedTabs, index];

		setAttributes({ expandedTabs });
	}

	const setAccordionType = (index) => {
		// Save expanded tab name, remove when tab is hidden
		let selectedTab = selectedTab === index ? undefined : index;
		setAttributes({ selectedTab });
	}

	const onTitleClick = (index) => {
		// Expand / Hide title
		accordionType === "accordion" && setAccordionType(index);
		accordionType === "toggle" && setToggleType(index);
	}

	const onChange = (newValue, index, key) => {
		// onChange callback function for title and content
		let accordions = [...accordions];
		accordions[index][key] = newValue;

		setAttributes({ accordions });
	}

	// getIconColor(index) {
	// 	const {
	// 		accordionType,
	// 		iconColor,
	// 		titleColor,
	// 		selectedTab,
	// 		expandedTabs,
	// 		activeTitleColor,
	// 	} = attributes;
	// 	let activeIconColor;

	// 	if (accordionType === "accordion") {
	// 		if (selectedTab === index) {
	// 			activeIconColor = activeTitleColor || DEFAULT_TITLE_COLOR;
	// 		}
	// 	} else {
	// 		if (expandedTabs.includes(index)) {
	// 			activeIconColor = activeTitleColor || DEFAULT_TITLE_COLOR;
	// 		}
	// 	}

	// 	return activeIconColor || iconColor || titleColor || DEFAULT_TITLE_COLOR;
	// }

	const onLevelChange = (header, titleSizeUnit) => {
		// const titleLevel = header.value;
		// const titleFontSize = switchFontSizes(titleSizeUnit, titleLevel);

		// setAttributes({ titleFontSize, titleLevel });
	}		

	// const containerStyle = {
	// 	background: getContainerBackground(),
	// 	backgroundImage: getContainerBackgroundImage(),
	// 	backgroundRepeat: containerImageURL
	// 		? containerBackgroundRepeat
	// 		: undefined,
	// 	backgroundClip:
	// 		backgroundType === "image" ? containerBackgroundClip : undefined,
	// 	backgroundSize:
	// 		backgroundType === "image" ? containerBackgroundSize : undefined,
	// 	backgroundPosition: containerImageURL
	// 		? `${containerBackgroundPositionX}% ${containerBackgroundPositionY}%`
	// 		: undefined,
	// 	backgroundAttachment: containerImageURL
	// 		? containerBackgoundAttachment
	// 		: undefined,
	// 	margin: `${containerMarginTop}${containerMarginUnit} ${containerMarginRight}${containerMarginUnit} ${containerMarginBottom}${containerMarginUnit} ${containerMarginLeft}${containerMarginUnit}`,
	// 	padding: `${containerPaddingTop}${containerPaddingUnit} ${containerPaddingRight}${containerPaddingUnit} ${containerPaddingBottom}${containerPaddingUnit} ${containerPaddingLeft}${containerPaddingUnit}`,
	// 	border: `${
	// 		containerBorderSize || 0
	// 	}${containerBorderUnit} ${containerBorderType} ${
	// 		containerBorderColor || "#000000"
	// 	}`,
	// 	borderRadius: `${containerBorderRadius || 0}${containerRadiusUnit}`,
	// 	boxShadow: `${containerHOffset || 0}px ${containerVOffset || 0}px ${
	// 		containerShadowBlur || 0
	// 	}px ${containerShadowSpread || 0}px ${containerShadowColor || "#dedede"}`,
	// };

	// const iconWrapperStyles = {
	// 	display: displayIcon ? "flex" : "none",
	// 	margin: `${iconMarginTop}${iconMarginUnit} ${iconMarginRight}${iconMarginUnit} ${iconMarginBottom}${iconMarginUnit} ${iconMarginLeft}${iconMarginUnit}`,
	// 	background: iconBackgroundType === "fill" && iconBackgroundColor,
	// 	backgroundImage: iconBackgroundType === "gradient" && iconGradient,
	// 	borderRadius: `${iconBorderRadius || 0}%`,
	// 	boxShadow: `${iconHOffset || 0}px ${iconVOffset || 0}px ${
	// 		iconShadowBlur || 0
	// 	}px ${iconShadowSpread || 0}px ${iconShadowColor || "#000000"}`,
	// };

	// const iconStyles = {
	// 	color: iconColor || DEFAULT_ICON_COLOR,
	// 	fontSize: `${iconSize || 14}${iconSizeUnit}`,
	// 	padding: `${iconPaddingTop}${iconPaddingUnit} ${iconPaddingRight}${iconPaddingUnit} ${iconPaddingBottom}${iconPaddingUnit} ${iconPaddingLeft}${iconPaddingUnit} `,
	// 	display: "flex",
	// 	flexDirection: "column",
	// 	justifyContent: "center",
	// };

	// const titleStyles = {
	// 	titleWrapper: {
	// 		flexDirection:
	// 			iconPosition === "right" && displayIcon ? "row-reverse" : "row",
	// 		justifyContent:
	// 			iconPosition === "right" ? "space-between" : titleAlignment,
	// 		backgroundImage:
	// 			titleBackgroundType === "gradient"
	// 				? titleBackgroundGradient
	// 				: titleBackgroundType === "fill"
	// 				? undefined
	// 				: "transparent",
	// 		borderWidth: `${tabBorderWidth || 0}${tabBorderUnit}`,
	// 		borderColor:
	// 			tabBorderColorType === "fill" && tabBorderColor
	// 				? tabBorderColor
	// 				: "transparent",
	// 		borderRadius: `${tabBorderRadius || 0}${tabRadiusUnit}`,
	// 		borderStyle: tabBorderStyle || "unset",
	// 		borderImage:
	// 			tabBorderColorType === "gradient" && tabBorderGradient
	// 				? `${tabBorderGradient} ${tabBorderImageSlice}% stretch`
	// 				: "none",
	// 		boxShadow: `${tabHOffset || 0}px ${tabVOffset || 0}px ${
	// 			tabShadowBlur || 0
	// 		}px ${tabShadowSpread || 0}px ${tabShadowColor || "#dbdbdb"}`,
	// 		margin: `${tabMarginTop || 0}${tabMarginUnit} ${
	// 			tabMarginRight || 0
	// 		}${tabMarginUnit} ${tabMarginBottom || 0}${tabMarginUnit} ${
	// 			tabMarginLeft || 0
	// 		}${tabMarginUnit}`,
	// 		padding: `${tabPaddingTop || 0}${tabPaddingUnit} ${
	// 			tabPaddingRight || 0
	// 		}${tabPaddingUnit || 0} ${tabPaddingBottom || 0}${tabPaddingUnit} ${
	// 			tabPaddingLeft || 0
	// 		}${tabPaddingUnit}`,
	// 	},
	// 	title: {
	// 		color: titleColor || DEFAULT_TITLE_COLOR,
	// 		fontSize: `${titleFontSize || DEFAULT_TITLE_SIZE}${titleSizeUnit}`,
	// 		fontFamily: titleFontFamily,
	// 		fontWeight: titleFontWeight,
	// 		textTransform: titleTextTransform,
	// 		textDecoration: titleTextDecoration,
	// 		lineHeight: titleLineHeight
	// 			? `${titleLineHeight}${titleLineHeightUnit}`
	// 			: undefined,
	// 		letterSpacing: titleLetterSpacing
	// 			? `${titleLetterSpacing}${titleLetterSpacingUnit}`
	// 			: undefined,
	// 		margin: 0,
	// 	},
	// };

	// const contentStyles = {
	// 	contentWrapper: {
	// 		textAlign: contentAlign,
	// 		backgroundColor:
	// 			(contentBackgroundType === "fill" && contentBackgroundColor) ||
	// 			DEFAULT_CONTENT_BACKGROUND,
	// 		backgroundImage:
	// 			contentBackgroundType === "gradient" ? contentGradient : "none",
	// 		borderStyle: `${contentBorderStyle}`,
	// 		borderWidth: `${contentBorderTop || 0}px ${contentBorderRight || 0}px ${
	// 			contentBorderBottom || 0
	// 		}px ${contentBorderLeft || 0}px`,
	// 		borderColor: contentBorderColor || DEFAULT_CONTENT_BORDER_COLOR,
	// 		boxShadow: `${contentHOffset || 0}px ${contentVOffset || 0}px ${
	// 			contentShadowBlur || 0
	// 		}px  ${contentShadowSpread || 0}px ${contentShadowColor}`,
	// 		transitionDuration: `${transitionDuration || 500}ms`,
	// 		transitionProperty: "max-height,opacity,height",
	// 		transitionTimingFunction: transitionFunction,
	// 	},
	// 	content: {
	// 		margin: `${contentMarginTop || 0}${contentMarginUnit} ${
	// 			contentMarginRight || 0
	// 		}${contentMarginUnit} ${contentMarginBottom || 0}${contentMarginUnit} ${
	// 			contentMarginLeft || 0
	// 		}${contentMarginUnit}`,
	// 		padding: `${contentPaddingTop || 0}${contentPaddingUnit} ${
	// 			contentPaddingRight || 0
	// 		}${contentPaddingUnit} ${
	// 			contentPaddingBottom || 0
	// 		}${contentPaddingUnit} ${contentPaddingLeft || 0}${contentPaddingUnit}`,
	// 		fontSize: `${contentFontSize || 18}${contentSizeUnit}`,
	// 		fontFamily: contentFontFamily,
	// 		fontWeight: contentFontWeight,
	// 		textTransform: contentTextTransform,
	// 		textDecoration: contentTextDecoration,
	// 		lineHeight: contentLineHeight
	// 			? `${contentLineHeight}${contentLineHeightUnit}`
	// 			: undefined,
	// 		letterSpacing: contentLetterSpacing
	// 			? `${contentLetterSpacing}${contentLetterSpacingUnit}`
	// 			: undefined,
	// 		color: contentColor || DEFAULT_CONTENT_COLOR,
	// 	},
	// };

	/**
	 * CSS/styling Codes Starts from Here
	 */

	// Title Typography
	const {
		typoStylesDesktop: titleTypographyDesktop,
		typoStylesTab: titleTypographyTab,
		typoStylesMobile: titleTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 20,
	});

	// Sub Title Typography
	const {
		typoStylesDesktop: contentTypographyDesktop,
		typoStylesTab: contentTypographyTab,
		typoStylesMobile: contentTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: CONTENT_TYPOGRAPHY,
		defaultFontSize: 16,
	});

	/* Wrapper Margin */
	const {
		dimensionStylesDesktop: wrapperMarginDesktop,
		dimensionStylesTab: wrapperMarginTab,
		dimensionStylesMobile: wrapperMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Wrapper Padding */
	const {
		dimensionStylesDesktop: wrapperPaddingDesktop,
		dimensionStylesTab: wrapperPaddingTab,
		dimensionStylesMobile: wrapperPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_PADDING,
		styleFor: "padding",
		attributes,
	});

	/* Title Margin */
	const {
		dimensionStylesDesktop: titlePadingDesktop,
		dimensionStylesTab: titlePadingTab,
		dimensionStylesMobile: titlePadingMobile,
	} = generateDimensionsControlStyles({
		controlName: TITLE_PADDING,
		styleFor: "padding",
		attributes,
	});

	/* Subtitle Margin */
	const {
		dimensionStylesDesktop: contentPaddingDesktop,
		dimensionStylesTab: contentPaddingTab,
		dimensionStylesMobile: contentPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: CONTENT_PADDING,
		styleFor: "padding",
		attributes,
	});

	// range controller Slider Height
	// const {
	// 	rangeStylesDesktop: sliderHeightDesktop,
	// 	rangeStylesTab: sliderHeightTab,
	// 	rangeStylesMobile: sliderHeightMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: CUSTOM_HEIGHT,
	// 	property: "height",
	// 	attributes,
	// });

	//Generate Background
	const {
		backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrapperBackgroundStylesTab,
		hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
		backgroundStylesMobile: wrapperBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
		bgTransitionStyle: wrapperBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WRAPPER_BG,
		noOverlay: true,
	});

	// generateBorderShadowStyles for Wrapper ⬇
	const {
		styesDesktop: wrapperBDShadowDesktop,
		styesTab: wrapperBDShadowTab,
		styesMobile: wrapperBDShadowMobile,
		stylesHoverDesktop: wrapperBDShadowHoverDesktop,
		stylesHoverTab: wrapperBDShadowHoverTab,
		stylesHoverMobile: wrapperBDShadowHoverMobile,
		transitionStyle: wrapperBDShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WRAPPER_BORDER_SHADOW,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});


	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
		.eb-accordion-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBgTransitionStyle}
		}
	`;
	const wrapperStylesTab = `
		.eb-accordion-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
	`;
	const wrapperStylesMobile = `
		.eb-accordion-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
	`);

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

	return [
		isSelected && (
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				onDeleteAccordion={onDeleteAccordion}
				onSortEnd={onSortEnd}
				onLevelChange={onLevelChange}
			/>
		),
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

			<div className={`eb-accordion-wrapper ${blockId}`}>
				{accordions.map((accordion, index) => (
					<div className={`eb-accordion-item ${isExpanded(index) ? "item-open" : ""}`} key={index}>
						<div
							className="eb-accordion-title-wrapper"
							onClick={() => onTitleClick(index)}
							onMouseEnter={() =>
								setAttributes({
									isHover: true,
									hoverIndex: index,
								})
							}
							onMouseLeave={() =>
								setAttributes({
									isHover: false,
									hoverIndex: null,
								})
							}
						>
							<span className="eb-accordion-icon-wrapper">
								<span className={`${isExpanded(index) ? expandedIcon : tabIcon} eb-accordion-icon`} />
							</span>

							<RichText
								tagName={titleLevel}
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
		</div>,
		<div className="eb-accordion-add-button">
			<Button
				className="is-default"
				label={__("Add Accordion Item")}
				icon="plus-alt"
				onClick={addAccordion}
			>
				<span className="eb-accordion-add-button-label">
					Add Accordion Item
				</span>
			</Button>
		</div>,
	];
}
