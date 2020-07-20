/**
 * WordPress dependencies
 */
import { RichText } from "@wordpress/block-editor";

/**
 * Inteanal dependencies
 */
import AccordionIcon from "./accordion-icon";
import {
	DEFAULT_TITLE_COLOR,
	DEFAULT_TITLE_SIZE,
	DEFAULT_TITLE_BACKGROUND,
	DEFAULT_TITLE_ACTIVE_COLOR,
	DEFAULT_CONTENT_BACKGROUND,
	DEFAULT_CONTENT_COLOR,
	DEFAULT_ICON_COLOR,
} from "./constants";

const Save = ({ attributes }) => {
	const {
		id,
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
		titleFontSize,
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
		displayContainerBorder,
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
		background: backgroundType === "fill" ? containerBackground : "transparent",
		backgroundImage: backgroundType === "gradient" ? containerGradient : "none",
		backgroundSize:
			backgroundType === "image" ? containerBackgroundSize : undefined,
		backgroundRepeat: containerImageURL ? containerBackgroundRepeat : undefined,
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
		margin:
			containerMarginTop === 0 &&
			containerMarginRight === 0 &&
			containerMarginBottom === 0 &&
			containerMarginLeft === 0
				? "auto"
				: `${containerMarginTop}${containerMarginUnit} ${containerMarginRight}${containerMarginUnit} ${containerMarginBottom}${containerMarginUnit} ${containerMarginLeft}${containerMarginUnit}`,
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
			borderWidth: `${tabBorderWidth || 0}${tabBorderUnit}`,
			backgroundColor:
				backgroundType === "fill"
					? titleBackgroundColor || DEFAULT_TITLE_BACKGROUND
					: "transparent",
			borderColor:
				tabBorderColorType === "fill" && tabBorderColor
					? tabBorderColor
					: "transparent",
			backgroundImage:
				titleBackgroundType === "gradient" && titleBackgroundGradient
					? titleBackgroundGradient
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
			padding: `${tabPaddingTop || 0}${tabPaddingUnit} ${tabPaddingRight || 0}${
				tabPaddingUnit || 0
			} ${tabPaddingBottom || 0}${tabPaddingUnit} ${
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
			borderWidth: `${contentBorderTop}px ${contentBorderRight}px ${contentBorderBottom}px ${contentBorderLeft}px`,
			borderColor: `${contentBorderColor}` || "none",
			boxShadow: `${contentHOffset || 0}px ${contentVOffset || 0}px ${
				contentShadowBlur || 0
			}px  ${contentShadowSpread || 0}px ${contentShadowColor}`,
			transitionDuration: `${transitionDuration || 500}ms`,
			transitionProperty: "height,overflow,opacity",
			maxHeight: 2000,
			overflow: "hidden",
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
			transition: `all ${transitionDuration || 500}ms`,
		},
	};

	return (
		<div
			className="eb-accordion-container"
			style={containerStyle}
			data-id={id}
			data-accordion-type={accordionType || "toggle"}
			data-transition-function={transitionFunction || "ease"}
			data-transition-duration={transitionDuration}
			data-tab-icon={displayIcon ? tabIcon : ""}
			data-expanded-icon={displayIcon ? expandedIcon : ""}
			data-hover-color={hoverColor ? hoverColor : undefined}
			data-active-color={activeColor || DEFAULT_TITLE_COLOR}
			data-title-color={titleColor || DEFAULT_TITLE_COLOR}
			data-active-title-color={activeTitleColor || DEFAULT_TITLE_ACTIVE_COLOR}
			data-icon-color={iconColor || titleColor || DEFAULT_TITLE_COLOR}
			data-original-color={
				backgroundType === "image"
					? "transparent"
					: titleBackgroundType === "fill"
					? titleBackgroundColor || "#ededed"
					: titleBackgroundType === "gradient"
					? titleBackgroundGradient
					: "transparent"
			}
			data-background-image-url={containerImageURL ? containerImageURL : ""}
		>
			{accordions.map((accordion, index) => (
				<div className="eb-accordion-wrapper " key={index}>
					<div
						className="eb-accordion-title-wrapper"
						style={titleStyles.titleWrapper}
					>
						<AccordionIcon
							icon={tabIcon}
							iconWrapperStyles={iconWrapperStyles}
							iconStyles={iconStyles}
						/>
						<RichText.Content
							tagName={titleLevel}
							className="eb-accordion-title"
							style={titleStyles.title}
							value={accordion.title}
						/>
					</div>
					<div
						className="eb-accordion-content-wrapper"
						style={contentStyles.contentWrapper}
					>
						<RichText.Content
							tagName="p"
							className="eb-accordion-content"
							style={contentStyles.content}
							value={accordion.content}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Save;
