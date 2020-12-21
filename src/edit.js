/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText } = wp.blockEditor;
const { Button } = wp.components;

/**
 * Internal dependencies
 */
import arrayMove from "array-move";
import AccordionIcon from "./accordion-icon";
import Inspector from "./inspector";
import {
	DEFAULT_TITLE_COLOR,
	DEFAULT_TITLE_SIZE,
	DEFAULT_TITLE_BACKGROUND,
	DEFAULT_TITLE_ACTIVE_COLOR,
	DEFAULT_CONTENT_COLOR,
	DEFAULT_CONTENT_BACKGROUND,
	DEFAULT_CONTENT_BORDER_COLOR,
	DEFAULT_ICON_COLOR,
	MAX_HEIGHT,
} from "./constants";
import uuid from "../util/uuid";
import switchFontSizes from "../util/helper";

export default class Edit extends Component {
	constructor(props) {
		super(props);
		this.addAccordion = this.addAccordion.bind(this);
		this.onDeleteAccordion = this.onDeleteAccordion.bind(this);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.isExpanded = this.isExpanded.bind(this);
		this.getContainerBackground = this.getContainerBackground.bind(this);
		this.getContainerBackgroundImage = this.getContainerBackgroundImage.bind(
			this
		);
		this.setHoverColor = this.setHoverColor.bind(this);
		this.setToggleActiveColor = this.setToggleActiveColor.bind(this);
		this.setAccordionActiveColor = this.setAccordionActiveColor.bind(this);
		this.getTitleBackground = this.getTitleBackground.bind(this);
		this.getTitleColor = this.getTitleColor.bind(this);
		this.getTabIcon = this.getTabIcon.bind(this);
		this.setToggleType = this.setToggleType.bind(this);
		this.setToggleTitleColor = this.setToggleTitleColor.bind(this);
		this.setAccordionType = this.setAccordionType.bind(this);
		this.setAccordionTitleColor = this.setAccordionTitleColor.bind(this);
		this.onTitleClick = this.onTitleClick.bind(this);
		this.onChange = this.onChange.bind(this);
		this.getIconColor = this.getIconColor.bind(this);
		this.onLevelChange = this.onLevelChange.bind(this);
	}
	componentDidMount() {
		// Generate unique id
		let id = uuid().substr(0, 5);
		this.props.setAttributes({ id });
	}

	addAccordion() {
		const { attributes, setAttributes } = this.props;
		let counter = attributes.accordions.length + 1;
		let accordions = [
			...attributes.accordions,
			{
				title: `Add Accordion Title ${counter}`,
				content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			},
		];

		setAttributes({ accordions });
	}

	onDeleteAccordion(position) {
		// Callback function for deleting accordion
		const { attributes, setAttributes } = this.props;
		let accordions = [...attributes.accordions];
		accordions.splice(position, 1);

		setAttributes({ accordions });
	}

	onSortEnd(oldIndex, newIndex) {
		// Callback function for sorting accordion
		const { attributes, setAttributes } = this.props;
		setAttributes({
			accordions: arrayMove(attributes.accordions, oldIndex, newIndex),
		});
	}

	isExpanded(index) {
		// Return true if tab is expanded
		const { accordionType, selectedTab, expandedTabs } = this.props.attributes;

		if (accordionType === "accordion") {
			return selectedTab === index;
		}

		if (accordionType === "toggle") {
			return expandedTabs.includes(index);
		}
	}

	getContainerBackground() {
		const {
			backgroundType,
			containerBackground,
			containerGradient,
			containerImageURL,
		} = this.props.attributes;

		switch (backgroundType) {
			case "fill":
				return containerBackground;
			case "gradient":
				return containerGradient;
			case "image":
				return `url('${containerImageURL}')`;
		}
	}

	getContainerBackgroundImage() {
		const {
			backgroundType,
			containerGradient,
			containerImageURL,
		} = this.props.attributes;

		return backgroundType === "gradient"
			? containerGradient
			: backgroundType === "image" && containerImageURL
			? `url('${containerImageURL}')`
			: "none";
	}

	setHoverColor(index) {
		const { hoverIndex, hoverColor } = this.props.attributes;

		if (hoverIndex === index && hoverColor) {
			return hoverColor;
		}
	}

	setToggleActiveColor(index) {
		const { expandedTabs, activeColor } = this.props.attributes;

		if (expandedTabs.includes(index)) {
			return activeColor || DEFAULT_TITLE_COLOR;
		}
	}

	setAccordionActiveColor(index) {
		const { selectedTab, activeColor } = this.props.attributes;

		if (selectedTab === index) {
			return activeColor || DEFAULT_TITLE_COLOR;
		}
	}

	getTitleBackground(index) {
		const {
			titleBackgroundType,
			accordionType,
			titleBackgroundColor,
		} = this.props.attributes;

		let activeColor;

		if (titleBackgroundType === "fill") {
			if (accordionType === "accordion") {
				activeColor = this.setAccordionActiveColor(index);
			}

			if (accordionType === "toggle") {
				activeColor = this.setToggleActiveColor(index);
			}

			let hoverColor = this.setHoverColor(index);

			// Show hover, active or default background color
			return (
				hoverColor ||
				activeColor ||
				titleBackgroundColor ||
				DEFAULT_TITLE_BACKGROUND
			);
		}

		return "transparent";
	}

	setToggleTitleColor(index) {
		const { expandedTabs, activeTitleColor } = this.props.attributes;

		if (expandedTabs.includes(index)) {
			return activeTitleColor || DEFAULT_TITLE_COLOR;
		}
	}

	setAccordionTitleColor(index) {
		const { selectedTab, activeTitleColor } = this.props.attributes;

		if (selectedTab === index) {
			return activeTitleColor || DEFAULT_TITLE_COLOR;
		}
	}

	getTitleColor(index) {
		const { accordionType, titleColor } = this.props.attributes;

		let activeTitleColor;

		if (accordionType === "accordion") {
			activeTitleColor = this.setAccordionTitleColor(index);
		}

		if (accordionType === "toggle") {
			activeTitleColor = this.setToggleTitleColor(index);
		}

		// Show active or default title color
		return activeTitleColor || titleColor || DEFAULT_TITLE_COLOR;
	}

	getTabIcon(index) {
		// Return icon based on tab hidden/expanded state
		const { expandedIcon, tabIcon } = this.props.attributes;
		return this.isExpanded(index) ? expandedIcon : tabIcon;
	}

	setToggleType(index) {
		// If tab is already expanded, close it, otherwise open it
		const { attributes, setAttributes } = this.props;
		let expandedTabs = [...attributes.expandedTabs];

		expandedTabs = expandedTabs.includes(index)
			? expandedTabs.filter((titleIndex) => titleIndex !== index)
			: [...expandedTabs, index];

		setAttributes({ expandedTabs });
	}

	setAccordionType(index) {
		// Save expanded tab name, remove when tab is hidden
		const { attributes, setAttributes } = this.props;
		let selectedTab = attributes.selectedTab === index ? undefined : index;
		setAttributes({ selectedTab });
	}

	onTitleClick(index) {
		// Expand / Hide title
		const { accordionType } = this.props.attributes;

		accordionType === "accordion" && this.setAccordionType(index);
		accordionType === "toggle" && this.setToggleType(index);
	}

	onChange(newValue, index, key) {
		// onChange callback function for title and content
		const { attributes, setAttributes } = this.props;
		let accordions = [...attributes.accordions];
		accordions[index][key] = newValue;

		setAttributes({ accordions });
	}

	getIconColor(index) {
		const {
			accordionType,
			iconColor,
			titleColor,
			selectedTab,
			expandedTabs,
			activeTitleColor,
		} = this.props.attributes;
		let activeIconColor;

		if (accordionType === "accordion") {
			if (selectedTab === index) {
				activeIconColor = activeTitleColor || DEFAULT_TITLE_COLOR;
			}
		} else {
			if (expandedTabs.includes(index)) {
				activeIconColor = activeTitleColor || DEFAULT_TITLE_COLOR;
			}
		}

		return activeIconColor || iconColor || titleColor || DEFAULT_TITLE_COLOR;
	}

	onLevelChange(header, titleSizeUnit) {
		const titleLevel = header.value;
		const titleFontSize = switchFontSizes(titleSizeUnit, titleLevel);

		this.props.setAttributes({ titleFontSize, titleLevel });
	}

	render() {
		const { isSelected, attributes, setAttributes } = this.props;
		const {
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

		const containerStyle = {
			background: this.getContainerBackground(),
			backgroundImage: this.getContainerBackgroundImage(),
			backgroundRepeat: containerImageURL
				? containerBackgroundRepeat
				: undefined,
			backgroundClip:
				backgroundType === "image" ? containerBackgroundClip : undefined,
			backgroundSize:
				backgroundType === "image" ? containerBackgroundSize : undefined,
			backgroundPosition: containerImageURL
				? `${containerBackgroundPositionX}% ${containerBackgroundPositionY}%`
				: undefined,
			backgroundAttachment: containerImageURL
				? containerBackgoundAttachment
				: undefined,
			margin: `${containerMarginTop}${containerMarginUnit} ${containerMarginRight}${containerMarginUnit} ${containerMarginBottom}${containerMarginUnit} ${containerMarginLeft}${containerMarginUnit}`,
			padding: `${containerPaddingTop}${containerPaddingUnit} ${containerPaddingRight}${containerPaddingUnit} ${containerPaddingBottom}${containerPaddingUnit} ${containerPaddingLeft}${containerPaddingUnit}`,
			border: `${
				containerBorderSize || 0
			}${containerBorderUnit} ${containerBorderType} ${
				containerBorderColor || "#000000"
			}`,
			borderRadius: `${containerBorderRadius || 0}${containerRadiusUnit}`,
			boxShadow: `${containerHOffset || 0}px ${containerVOffset || 0}px ${
				containerShadowBlur || 0
			}px ${containerShadowSpread || 0}px ${containerShadowColor || "#dedede"}`,
		};

		const iconWrapperStyles = {
			display: displayIcon ? "flex" : "none",
			margin: `${iconMarginTop}${iconMarginUnit} ${iconMarginRight}${iconMarginUnit} ${iconMarginBottom}${iconMarginUnit} ${iconMarginLeft}${iconMarginUnit}`,
			background: iconBackgroundType === "fill" && iconBackgroundColor,
			backgroundImage: iconBackgroundType === "gradient" && iconGradient,
			borderRadius: `${iconBorderRadius || 0}%`,
			boxShadow: `${iconHOffset || 0}px ${iconVOffset || 0}px ${
				iconShadowBlur || 0
			}px ${iconShadowSpread || 0}px ${iconShadowColor || "#000000"}`,
		};

		const iconStyles = {
			color: iconColor || DEFAULT_ICON_COLOR,
			fontSize: `${iconSize || 14}${iconSizeUnit}`,
			padding: `${iconPaddingTop}${iconPaddingUnit} ${iconPaddingRight}${iconPaddingUnit} ${iconPaddingBottom}${iconPaddingUnit} ${iconPaddingLeft}${iconPaddingUnit} `,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		};

		const titleStyles = {
			titleWrapper: {
				flexDirection:
					iconPosition === "right" && displayIcon ? "row-reverse" : "row",
				justifyContent:
					iconPosition === "right" ? "space-between" : titleAlignment,
				backgroundImage:
					titleBackgroundType === "gradient"
						? titleBackgroundGradient
						: titleBackgroundType === "fill"
						? undefined
						: "transparent",
				borderWidth: `${tabBorderWidth || 0}${tabBorderUnit}`,
				borderColor:
					tabBorderColorType === "fill" && tabBorderColor
						? tabBorderColor
						: "transparent",
				borderRadius: `${tabBorderRadius || 0}${tabRadiusUnit}`,
				borderStyle: tabBorderStyle || "unset",
				borderImage:
					tabBorderColorType === "gradient" && tabBorderGradient
						? `${tabBorderGradient} ${tabBorderImageSlice}% stretch`
						: "none",
				boxShadow: `${tabHOffset || 0}px ${tabVOffset || 0}px ${
					tabShadowBlur || 0
				}px ${tabShadowSpread || 0}px ${tabShadowColor || "#dbdbdb"}`,
				margin: `${tabMarginTop || 0}${tabMarginUnit} ${
					tabMarginRight || 0
				}${tabMarginUnit} ${tabMarginBottom || 0}${tabMarginUnit} ${
					tabMarginLeft || 0
				}${tabMarginUnit}`,
				padding: `${tabPaddingTop || 0}${tabPaddingUnit} ${
					tabPaddingRight || 0
				}${tabPaddingUnit || 0} ${tabPaddingBottom || 0}${tabPaddingUnit} ${
					tabPaddingLeft || 0
				}${tabPaddingUnit}`,
			},
			title: {
				color: titleColor || DEFAULT_TITLE_COLOR,
				fontSize: `${titleFontSize || DEFAULT_TITLE_SIZE}${titleSizeUnit}`,
				fontFamily: titleFontFamily,
				fontWeight: titleFontWeight,
				textTransform: titleTextTransform,
				textDecoration: titleTextDecoration,
				lineHeight: titleLineHeight
					? `${titleLineHeight}${titleLineHeightUnit}`
					: undefined,
				letterSpacing: titleLetterSpacing
					? `${titleLetterSpacing}${titleLetterSpacingUnit}`
					: undefined,
				margin: 0,
			},
		};

		const contentStyles = {
			contentWrapper: {
				textAlign: contentAlign,
				backgroundColor:
					(contentBackgroundType === "fill" && contentBackgroundColor) ||
					DEFAULT_CONTENT_BACKGROUND,
				backgroundImage:
					contentBackgroundType === "gradient" ? contentGradient : "none",
				borderStyle: `${contentBorderStyle}`,
				borderWidth: `${contentBorderTop || 0}px ${contentBorderRight || 0}px ${
					contentBorderBottom || 0
				}px ${contentBorderLeft || 0}px`,
				borderColor: contentBorderColor || DEFAULT_CONTENT_BORDER_COLOR,
				boxShadow: `${contentHOffset || 0}px ${contentVOffset || 0}px ${
					contentShadowBlur || 0
				}px  ${contentShadowSpread || 0}px ${contentShadowColor}`,
				transitionDuration: `${transitionDuration || 500}ms`,
				transitionProperty: "max-height,opacity,height",
				transitionTimingFunction: transitionFunction,
			},
			content: {
				margin: `${contentMarginTop || 0}${contentMarginUnit} ${
					contentMarginRight || 0
				}${contentMarginUnit} ${contentMarginBottom || 0}${contentMarginUnit} ${
					contentMarginLeft || 0
				}${contentMarginUnit}`,
				padding: `${contentPaddingTop || 0}${contentPaddingUnit} ${
					contentPaddingRight || 0
				}${contentPaddingUnit} ${
					contentPaddingBottom || 0
				}${contentPaddingUnit} ${contentPaddingLeft || 0}${contentPaddingUnit}`,
				fontSize: `${contentFontSize || 18}${contentSizeUnit}`,
				fontFamily: contentFontFamily,
				fontWeight: contentFontWeight,
				textTransform: contentTextTransform,
				textDecoration: contentTextDecoration,
				lineHeight: contentLineHeight
					? `${contentLineHeight}${contentLineHeightUnit}`
					: undefined,
				letterSpacing: contentLetterSpacing
					? `${contentLetterSpacing}${contentLetterSpacingUnit}`
					: undefined,
				color: contentColor || DEFAULT_CONTENT_COLOR,
			},
		};

		return [
			isSelected && (
				<Inspector
					{...this.props}
					onDeleteAccordion={this.onDeleteAccordion}
					onSortEnd={this.onSortEnd}
					onLevelChange={this.onLevelChange}
				/>
			),
			<div className="eb-accordion-container" style={containerStyle}>
				{accordions.map((accordion, index) => (
					<div className="eb-accordion-wrapper" key={index}>
						<div
							className="eb-accordion-title-wrapper"
							style={{
								...titleStyles.titleWrapper,
								backgroundColor:
									backgroundType === "fill"
										? this.getTitleBackground(index)
										: "transparent",
							}}
							onClick={() => this.onTitleClick(index)}
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
							<AccordionIcon
								icon={this.getTabIcon(index)}
								iconWrapperStyles={iconWrapperStyles}
								iconStyles={{
									...iconStyles,
									color: this.isExpanded(index)
										? DEFAULT_TITLE_ACTIVE_COLOR
										: this.getIconColor(index),
								}}
							/>

							<RichText
								tagName={titleLevel}
								className="eb-accordion-title"
								allowedFormats={[]}
								style={{
									...titleStyles.title,
									color: this.isExpanded(index)
										? DEFAULT_TITLE_ACTIVE_COLOR
										: this.getTitleColor(index),
								}}
								placeholder="Add Title Here"
								value={accordion.title}
								onChange={(nextTitle) =>
									this.onChange(nextTitle, index, "title")
								}
							/>
						</div>

						<div
							className="eb-accordion-content-wrapper"
							style={{
								...contentStyles.contentWrapper,
								maxHeight: this.isExpanded(index) ? MAX_HEIGHT : 0,
								opacity: this.isExpanded(index) ? 1 : 0,
								overflow: this.isExpanded(index) ? "visible" : "hidden",
							}}
						>
							<RichText
								tagName="p"
								className="eb-accordion-content"
								style={contentStyles.content}
								placeholder="Add Content Here"
								allowedFormats={["bold", "italic", "strikethrough"]}
								value={accordion.content}
								onChange={(nextContent) =>
									this.onChange(nextContent, index, "content")
								}
							/>
						</div>
					</div>
				))}
			</div>,

			<div className="eb-accordion-add-button">
				<Button
					className="is-default"
					label={__("Add Accordion Item")}
					icon="plus-alt"
					onClick={this.addAccordion}
				>
					<span className="eb-accordion-add-button-label">
						Add Accordion Item
					</span>
				</Button>
			</div>,
		];
	}
}
