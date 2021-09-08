/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	TextControl,
	SelectControl,
	RangeControl,
	Dropdown,
	PanelRow,
	TabPanel,
	TextareaControl,
	ColorPalette,
} = wp.components;
const { useEffect } = wp.element;
const { select } = wp.data;

/**
 * Internal dependencies
 */
import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_PADDING,
	CONTENT_PADDING,

	ACCORDION_TYPES,
	BACKGROUND_TYPE,
	TITLE_BACKGROUND_TYPE,
	BACKGROUND_SIZE,
	BACKGROUND_CLIP,
	BACKGROUND_REPEAT,
	BACKGROUND_ATTACHMENT,
	BORDER_STYLES,
	HEADERS,
	ICON_POSITIONS,
	TRANSITION_TYPES,
	TITLE_ALIGNMENT,
	CONTENT_ALIGN,
	COLORS,
	COLOR_TYPES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants/constants";

import { TITLE_TYPOGRAPHY, CONTENT_TYPOGRAPHY } from "./constants/typography-constant";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";
import BackgroundControl from "../util/background-control";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import iconList from "../util/faIcons";
import SortableAccordions from "./sortable-accordion";
import GradientColorControl from "../util/gradient-color-controller";
// import ImageAvatar from "../util/image-avatar/ImageAvater";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control/index";

const Inspector = (props) => {
	const {attributes, setAttributes, onDeleteAccordion, onSortEnd, onLevelChange} = props;
	const {
		resOption,
		accordionType,
		displayIcon,
		transitionDuration,
		accordionStyle,
		backgroundType,
		containerBorderSize,
		containerBorderType,
		containerBorderColor,
		containerGradient,
		containerMarginTop,
		containerMarginRight,
		containerMarginBottom,
		containerMarginLeft,
		containerPaddingTop,
		containerPaddingRight,
		containerPaddingBottom,
		containerPaddingLeft,
		accordions,
		tabIcon,
		expandedIcon,
		containerBackground,
		containerHOffset,
		containerVOffset,
		containerShadowBlur,
		containerShadowSpread,
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
		hoverColor,
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

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	const TITLE_SIZE_MIN = 1;
	const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
	const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;

	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;

	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;

	const CONTENT_SIZE_MAX = contentSizeUnit === "em" ? 10 : 100;
	const CONTENT_SIZE_STEP = contentSizeUnit === "em" ? 0.1 : 1;

	const CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;
	const CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;

	const CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;
	const CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;

	return (

		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("General")}>
										<BaseControl label={__("Accordion Types")} id="eb-accordion-type">
											<ButtonGroup id="eb-accordion-type">
												{ACCORDION_TYPES.map((item) => ( 
													<Button
														isLarge
														isSecondary={accordionType !== item.value}
														isPrimary={accordionType === item.value}
														onClick={() => setAttributes({ accordionType: item.value })}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<BaseControl id="eb-accordion-sortable" label={__("Accordion List")}>
											<SortableAccordions
												accordions={accordions}
												onDeleteAccordion={onDeleteAccordion}
												onSortEnd={onSortEnd}
											/>
										</BaseControl>

										<TextControl
											label={__("Toggle Speed")}
											type="number"
											value={transitionDuration || 500}
											onChange={(newValue) =>
												setAttributes({
													transitionDuration: parseInt(newValue, 10),
												})
											}
										/>

										<SelectControl
											label={__("Transition Function")}
											value={transitionFunction}
											options={TRANSITION_TYPES}
											onChange={(newValue) =>
												setAttributes({ transitionFunction: newValue })
											}
										/>

										<ToggleControl
											label={__("Display Icon")}
											checked={displayIcon}
											onChange={() => setAttributes({ displayIcon: !displayIcon })}
										/>
									</PanelBody>
									{displayIcon && (
										<PanelBody title={__("Icon Settings")} initialOpen={false}>
											<BaseControl label={__("Tab Icon")}>
												<FontIconPicker
													icons={iconList}
													value={tabIcon}
													onChange={(tabIcon) => setAttributes({ tabIcon })}
													appendTo="body"
												/>
											</BaseControl>

											<BaseControl label={__("Expanded Icon")}>
												<FontIconPicker
													icons={iconList}
													value={expandedIcon}
													onChange={(expandedIcon) => setAttributes({ expandedIcon })}
													appendTo="body"
												/>
											</BaseControl>
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Title")} initialOpen={false}>
										<BaseControl label={__("Title Level")} id="eb-accoridon-title-level">
											<ButtonGroup>
												{HEADERS.map((header) => (
													<Button
														isSecondary={titleLevel !== header.value}
														isPrimary={titleLevel === header.value}
														onClick={() => onLevelChange(header, titleSizeUnit)}
													>
														{header.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										{iconPosition === "left" && (
											<BaseControl label={__("Title Align ")} id="eb-accoridon-title-align">
												<ButtonGroup>
													{TITLE_ALIGNMENT.map((item) => (
														<Button
															isSecondary={titleAlignment !== item.value}
															isPrimary={titleAlignment === item.value}
															onClick={() =>
																setAttributes({
																	titleAlignment: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
										)}

										<PanelRow>Color</PanelRow>
										<ColorPalette
											colors={COLORS}
											value={ titleColor }
											onChange={ ( color ) => setAttributes({ titleColor: color })}
										/>
										<TypographyDropdown
											baseLabel={__("Typography")}
											typographyPrefixConstant={TITLE_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={TITLE_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Content")} initialOpen={false}>
										<BaseControl label={__("Align")}>
											<ButtonGroup>
												{CONTENT_ALIGN.map((item) => (
													<Button
														isLarge
														isSecondary={contentAlign !== item.value}
														isPrimary={contentAlign === item.value}
														onClick={() => setAttributes({ contentAlign: item.value })}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<PanelRow>Color</PanelRow>
										<ColorPalette
											colors={COLORS}
											value={ contentColor }
											onChange={ ( color ) => setAttributes({ contentColor: color })}
										/>
										<TypographyDropdown
											baseLabel={__("Typography")}
											typographyPrefixConstant={CONTENT_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={CONTENT_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>
									
									{displayIcon && (
										<PanelBody title={__("Icon Style")} initialOpen={false}>
											<BaseControl label={__("Icon Position")}>
												<ButtonGroup>
													{ICON_POSITIONS.map((item) => (
														<Button
															isLarge
															isSecondary={iconPosition !== item.value}
															isPrimary={iconPosition === item.value}
															onClick={() =>
																setAttributes({
																	iconPosition: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											<UnitControl
												selectedUnit={iconSizeUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(iconSizeUnit) => setAttributes({ iconSizeUnit })}
											/>

											<RangeControl
												label={__("Icon Size")}
												value={iconSize}
												allowReset
												onChange={(newSize) => setAttributes({ iconSize: newSize })}
												min={0}
												max={100}
											/>
											
										</PanelBody>
									)}
								</>
							)}

							{tab.name === "advance" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>
									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={WRAPPER_BG}
											resRequiredProps={resRequiredProps}
											noOverlay
										/>
									</PanelBody>
									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WRAPPER_BORDER_SHADOW}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
