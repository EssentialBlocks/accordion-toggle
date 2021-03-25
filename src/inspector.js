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
} = wp.components;

/**
 * Internal dependencies
 */
import {
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
	COLOR_TYPES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import SortableAccordions from "./sortable-accordion";
import GradientColorControl from "../util/gradient-color-controller";
import ImageAvatar from "../util/image-avatar/ImageAvater";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control/index";

const Inspector = (props) => {
	const {
		attributes,
		setAttributes,
		onDeleteAccordion,
		onSortEnd,
		onLevelChange,
	} = props;
	const {
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
		<InspectorControls keys="controls">
			<PanelBody>
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
			<PanelBody title={__("General")} initialOpen={false}>
				<BaseControl
					label={__("Background Type")}
					id="eb-accordion-background-type"
				>
					<ButtonGroup id="eb-accordion-background-type">
						{BACKGROUND_TYPE.map((item) => (
							<Button
								isLarge
								isSecondary={backgroundType !== item.value}
								isPrimary={backgroundType === item.value}
								onClick={() =>
									setAttributes({
										backgroundType: item.value,
									})
								}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{backgroundType === "fill" && (
					<ColorControl
						label={__("Background")}
						color={containerBackground}
						onChange={(containerBackground) =>
							setAttributes({ containerBackground })
						}
					/>
				)}

				{backgroundType === "gradient" && (
					<PanelBody title={__("Gradient Colors")} initialOpen={false}>
						<GradientColorControl
							gradientColor={containerGradient}
							onChange={(newValue) =>
								setAttributes({ containerGradient: newValue })
							}
						/>

						<RangeControl
							label={__("Border Image Slice")}
							value={tabBorderImageSlice}
							onChange={(newValue) =>
								setAttributes({ tabBorderImageSlice: newValue })
							}
							min={0}
							max={50}
						/>
					</PanelBody>
				)}

				{backgroundType === "image" && (
					<PanelBody title={__("Image Settings")}>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									containerImageURL: media.url,
									containerImageID: media.id,
								})
							}
							allowedTypes={["image"]}
							value={containerImageID}
							render={({ open }) =>
								!containerImageURL && (
									<Button
										className="eb-accordion-upload-button"
										label={__("Upload Image")}
										icon="format-image"
										onClick={open}
									/>
								)
							}
						/>
					</PanelBody>
				)}

				{containerImageURL && (
					<BaseControl
						label={__("Background Image")}
						id="eb-accordion-bg-image"
					>
						<ImageAvatar
							imageUrl={containerImageURL}
							onDeleteImage={() => setAttributes({ containerImageURL: null })}
						/>
					</BaseControl>
				)}

				{backgroundType === "image" && containerImageURL && (
					<SelectControl
						label={__("Background Size")}
						value={containerBackgroundSize}
						options={BACKGROUND_SIZE}
						onChange={(newSize) =>
							setAttributes({ containerBackgroundSize: newSize })
						}
					/>
				)}

				{backgroundType === "image" && containerImageURL && (
					<SelectControl
						label={__("Background Clip")}
						value={containerBackgroundClip}
						options={BACKGROUND_CLIP}
						onChange={(newValue) =>
							setAttributes({ containerBackgroundClip: newValue })
						}
					/>
				)}

				{backgroundType === "image" && containerImageURL && (
					<SelectControl
						label={__("Background Repeat")}
						value={containerBackgroundRepeat}
						options={BACKGROUND_REPEAT}
						onChange={(newValue) =>
							setAttributes({
								containerBackgroundRepeat: newValue,
							})
						}
					/>
				)}

				{backgroundType === "image" && containerImageURL && (
					<RangeControl
						label={__("Background Position X")}
						value={containerBackgroundPositionX}
						onChange={(newValue) =>
							setAttributes({
								containerBackgroundPositionX: newValue,
							})
						}
						min={0}
						max={100}
					/>
				)}

				{backgroundType === "image" && containerImageURL && (
					<RangeControl
						label={__("Background Position Y")}
						value={containerBackgroundPositionY}
						onChange={(newValue) =>
							setAttributes({
								containerBackgroundPositionY: newValue,
							})
						}
						min={0}
						max={100}
					/>
				)}

				{backgroundType === "image" && containerImageURL && (
					<SelectControl
						label={__("Background Attachment")}
						value={containerBackgoundAttachment}
						options={BACKGROUND_ATTACHMENT}
						onChange={(newValue) =>
							setAttributes({
								containerBackgoundAttachment: newValue,
							})
						}
					/>
				)}

				<PanelBody title={__("Container Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={containerMarginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(containerMarginUnit) =>
							setAttributes({ containerMarginUnit })
						}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={containerMarginTop}
						right={containerMarginRight}
						bottom={containerMarginBottom}
						left={containerMarginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								containerMarginTop: top,
								containerMarginRight: right,
								containerMarginBottom: bottom,
								containerMarginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={containerPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(containerPaddingUnit) =>
							setAttributes({ containerPaddingUnit })
						}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={containerPaddingTop}
						right={containerPaddingRight}
						bottom={containerPaddingBottom}
						left={containerPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								containerPaddingTop: top,
								containerPaddingRight: right,
								containerPaddingBottom: bottom,
								containerPaddingLeft: left,
							})
						}
					/>
				</PanelBody>
				<PanelBody title={__("Container Border")} initialOpen={false}>
					<SelectControl
						label={__("Border Type")}
						value={containerBorderType}
						options={BORDER_STYLES}
						onChange={(newValue) =>
							setAttributes({ containerBorderType: newValue })
						}
					/>

					<ColorControl
						label={__("Border Color")}
						color={containerBorderColor}
						onChange={(containerBorderColor) =>
							setAttributes({ containerBorderColor })
						}
					/>

					<UnitControl
						selectedUnit={containerBorderUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
						]}
						onClick={(containerBorderUnit) =>
							setAttributes({ containerBorderUnit })
						}
					/>

					<RangeControl
						label={__("Border Size")}
						value={containerBorderSize}
						onChange={(newValue) =>
							setAttributes({ containerBorderSize: newValue })
						}
						min={0}
						max={10}
					/>

					<UnitControl
						selectedUnit={containerRadiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(containerRadiusUnit) =>
							setAttributes({ containerRadiusUnit })
						}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={containerBorderRadius}
						onChange={(newValue) =>
							setAttributes({ containerBorderRadius: newValue })
						}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Container Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={containerShadowColor}
						onChange={(containerShadowColor) =>
							setAttributes({ containerShadowColor })
						}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={containerHOffset}
						allowReset
						onChange={(newValue) =>
							setAttributes({ containerHOffset: newValue })
						}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						allowReset
						value={containerVOffset}
						onChange={(newValue) =>
							setAttributes({ containerVOffset: newValue })
						}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Blur")}
						value={containerShadowBlur}
						allowReset
						onChange={(newValue) =>
							setAttributes({ containerShadowBlur: newValue })
						}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Spread")}
						value={containerShadowSpread}
						allowReset
						onChange={(newValue) =>
							setAttributes({ containerShadowSpread: newValue })
						}
						min={0}
						max={10}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody title={__("Typography")} initialOpen={false}>
				<BaseControl label={__("Title")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div
								className="eb-panel-control eb-typography-component-panel"
								style={{ padding: "1rem" }}
							>
								<FontPicker
									label={__("Font Family")}
									value={titleFontFamily}
									onChange={(titleFontFamily) =>
										setAttributes({ titleFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={titleSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleSizeUnit) => setAttributes({ titleSizeUnit })}
								/>

								<RangeControl
									label={__("Font Size")}
									value={titleFontSize}
									onChange={(titleFontSize) => setAttributes({ titleFontSize })}
									step={TITLE_SIZE_STEP}
									min={0}
									max={TITLE_SIZE_MAX}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={titleFontWeight}
									options={FONT_WEIGHTS}
									onChange={(titleFontWeight) =>
										setAttributes({ titleFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={titleTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(titleTextTransform) =>
										setAttributes({ titleTextTransform })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={titleTextDecoration}
									options={TEXT_DECORATION}
									onChange={(titleTextDecoration) =>
										setAttributes({ titleTextDecoration })
									}
								/>

								<UnitControl
									selectedUnit={titleLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLetterSpacingUnit) =>
										setAttributes({ titleLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={titleLetterSpacing}
									onChange={(titleLetterSpacing) =>
										setAttributes({ titleLetterSpacing })
									}
									min={0}
									max={TITLE_SPACING_MAX}
									step={TITLE_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={titleLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLineHeightUnit) =>
										setAttributes({ titleLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={titleLineHeight}
									onChange={(titleLineHeight) =>
										setAttributes({ titleLineHeight })
									}
									min={0}
									max={TITLE_LINE_HEIGHT_MAX}
									step={TITLE_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>

				<BaseControl label={__("Content")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div
								className="eb-panel-control eb-typography-component-panel"
								style={{ padding: "1rem" }}
							>
								<FontPicker
									label={__("Font Family")}
									value={contentFontFamily}
									onChange={(contentFontFamily) =>
										setAttributes({ contentFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={contentSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentSizeUnit) =>
										setAttributes({ contentSizeUnit })
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={contentFontSize}
									onChange={(contentFontSize) =>
										setAttributes({ contentFontSize })
									}
									step={CONTENT_SIZE_STEP}
									min={0}
									max={CONTENT_SIZE_MAX}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={contentFontWeight}
									options={FONT_WEIGHTS}
									onChange={(contentFontWeight) =>
										setAttributes({ contentFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={contentTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(contentTextTransform) =>
										setAttributes({ contentTextTransform })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={contentTextDecoration}
									options={TEXT_DECORATION}
									onChange={(contentTextDecoration) =>
										setAttributes({ contentTextDecoration })
									}
								/>

								<UnitControl
									selectedUnit={contentLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLetterSpacingUnit) =>
										setAttributes({ contentLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={contentLetterSpacing}
									onChange={(contentLetterSpacing) =>
										setAttributes({ contentLetterSpacing })
									}
									min={0}
									max={CONTENT_SPACING_MAX}
									step={CONTENT_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={contentLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLineHeightUnit) =>
										setAttributes({ contentLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={contentLineHeight}
									onChange={(contentLineHeight) =>
										setAttributes({ contentLineHeight })
									}
									min={0}
									max={CONTENT_LINE_HEIGHT_MAX}
									step={CONTENT_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>
			</PanelBody>

			<PanelBody title={__("Tab Style")} initialOpen={false}>
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

				<BaseControl
					label={__("Title Background Type")}
					id="eb-accordion-title-bg-type"
				>
					<ButtonGroup id="eb-accordion-title-bg-type">
						{TITLE_BACKGROUND_TYPE.map((item) => (
							<Button
								isLarge
								isSecondary={titleBackgroundType !== item.value}
								isPrimary={titleBackgroundType === item.value}
								onClick={() =>
									setAttributes({
										titleBackgroundType: item.value,
									})
								}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{titleBackgroundType === "fill" && (
					<ColorControl
						label={__("Background Color")}
						color={titleBackgroundColor}
						onChange={(titleBackgroundColor) =>
							setAttributes({ titleBackgroundColor })
						}
					/>
				)}

				{titleBackgroundType === "gradient" && (
					<PanelBody title={__("Gradient Colors")} initialOpen={false}>
						<GradientColorControl
							gradientColor={titleBackgroundGradient}
							onChange={(newGradient) =>
								setAttributes({
									titleBackgroundGradient: newGradient,
								})
							}
						/>
					</PanelBody>
				)}

				<ColorControl
					label={__("Title Color")}
					color={titleColor}
					onChange={(titleColor) => setAttributes({ titleColor })}
				/>

				<PanelBody title={__("Tab Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={tabMarginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(tabMarginUnit) => setAttributes({ tabMarginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={tabMarginTop}
						right={tabMarginRight}
						bottom={tabMarginBottom}
						left={tabMarginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								tabMarginTop: top,
								tabMarginRight: right,
								tabMarginBottom: bottom,
								tabMarginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={tabPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(tabPaddingUnit) => setAttributes({ tabPaddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={tabPaddingTop}
						right={tabPaddingRight}
						bottom={tabPaddingBottom}
						left={tabPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								tabPaddingTop: top,
								tabPaddingRight: right,
								tabPaddingBottom: bottom,
								tabPaddingLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Tab Border Settings")} initialOpen={false}>
					<BaseControl label={__("Tab Border Type")}>
						<ButtonGroup>
							{COLOR_TYPES.map((item) => (
								<Button
									isSecondary={tabBorderColorType !== item.value}
									isPrimary={tabBorderColorType === item.value}
									onClick={() =>
										setAttributes({
											tabBorderColorType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{tabBorderColorType === "fill" && (
						<ColorControl
							label={__("Border Color")}
							color={tabBorderColor}
							onChange={(tabBorderColor) => setAttributes({ tabBorderColor })}
						/>
					)}

					{tabBorderColorType === "gradient" && (
						<PanelBody title={__("Border Gradient")} initialOpen={false}>
							<GradientColorControl
								gradientColor={tabBorderGradient}
								onChange={(newValue) =>
									setAttributes({
										tabBorderGradient: newValue,
									})
								}
							/>
							<RangeControl
								label={__("Tab Border Image Slice")}
								value={tabBorderImageSlice}
								onChange={(newValue) =>
									setAttributes({
										tabBorderImageSlice: newValue,
									})
								}
								min={0}
								max={50}
							/>
						</PanelBody>
					)}

					{tabBorderColorType === "fill" && (
						<SelectControl
							label={__("Border Style")}
							value={tabBorderStyle}
							options={BORDER_STYLES}
							onChange={(newStyle) =>
								setAttributes({ tabBorderStyle: newStyle })
							}
						/>
					)}

					<UnitControl
						selectedUnit={tabBorderUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
						]}
						onClick={(tabBorderUnit) => setAttributes({ tabBorderUnit })}
					/>

					<RangeControl
						label={__("Tab Border Width")}
						value={tabBorderWidth}
						allowReset
						onChange={(newValue) => setAttributes({ tabBorderWidth: newValue })}
						min={0}
						max={100}
					/>

					<UnitControl
						selectedUnit={tabRadiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(tabRadiusUnit) => setAttributes({ tabRadiusUnit })}
					/>

					<RangeControl
						label={__("Tab Border Radius")}
						value={tabBorderRadius}
						allowReset
						onChange={(newSize) => setAttributes({ tabBorderRadius: newSize })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Tab Shadow Settings")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={tabShadowColor}
						onChange={(tabShadowColor) => setAttributes({ tabShadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={tabHOffset}
						allowReset
						onChange={(newValue) => setAttributes({ tabHOffset: newValue })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={tabVOffset}
						allowReset
						onChange={(newValue) => setAttributes({ tabVOffset: newValue })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Blur")}
						value={tabShadowBlur}
						allowReset
						onChange={(newValue) => setAttributes({ tabShadowBlur: newValue })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Spread")}
						value={tabShadowSpread}
						allowReset
						onChange={(newValue) =>
							setAttributes({ tabShadowSpread: newValue })
						}
						min={0}
						max={10}
					/>
				</PanelBody>

				<PanelBody title={__("Active Colors")} initialOpen={false}>
					<ColorControl
						label={__("Background Color")}
						color={activeColor}
						onChange={(activeColor) => setAttributes({ activeColor })}
					/>

					<ColorControl
						label={__("Text Color")}
						color={activeTitleColor}
						onChange={(activeTitleColor) => setAttributes({ activeTitleColor })}
					/>
				</PanelBody>

				<ColorControl
					label={__("Hover Color")}
					color={hoverColor}
					onChange={(hoverColor) => setAttributes({ hoverColor })}
				/>
			</PanelBody>

			<PanelBody title={__("Content Style")} initialOpen={false}>
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

				<BaseControl label={__("Background Type")}>
					<ButtonGroup>
						{TITLE_BACKGROUND_TYPE.map((item) => (
							<Button
								isLarge
								isSecondary={contentBackgroundType !== item.value}
								isPrimary={contentBackgroundType === item.value}
								onClick={() =>
									setAttributes({
										contentBackgroundType: item.value,
									})
								}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				{contentBackgroundType === "fill" && (
					<ColorControl
						label={__("Background Color")}
						color={contentBackgroundColor}
						onChange={(contentBackgroundColor) =>
							setAttributes({ contentBackgroundColor })
						}
					/>
				)}

				{contentBackgroundType === "gradient" && (
					<PanelBody title={__("Gradient Colors")} initialOpen={false}>
						<GradientColorControl
							gradientColor={contentGradient}
							onChange={(newValue) =>
								setAttributes({ contentGradient: newValue })
							}
						/>
					</PanelBody>
				)}

				<ColorControl
					label={__("Content Text Color")}
					color={contentColor}
					onChange={(contentColor) => setAttributes({ contentColor })}
				/>

				<PanelBody title={__("Content Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={contentMarginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(contentMarginUnit) =>
							setAttributes({ contentMarginUnit })
						}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={contentMarginTop}
						right={contentMarginRight}
						bottom={contentMarginBottom}
						left={contentMarginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								contentMarginTop: top,
								contentMarginRight: right,
								contentMarginBottom: bottom,
								contentMarginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={contentPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(contentPaddingUnit) =>
							setAttributes({ contentPaddingUnit })
						}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={contentPaddingTop}
						right={contentPaddingRight}
						bottom={contentPaddingBottom}
						left={contentPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								contentPaddingTop: top,
								contentPaddingRight: right,
								contentPaddingBottom: bottom,
								contentPaddingLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Content Border")} initialOpen={false}>
					<ColorControl
						label={__("Border Color")}
						color={contentBorderColor}
						onChange={(contentBorderColor) =>
							setAttributes({ contentBorderColor })
						}
					/>

					<DimensionsControl
						label={__("Border Width")}
						top={contentBorderTop}
						right={contentBorderRight}
						bottom={contentBorderBottom}
						left={contentBorderLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								contentBorderTop: top,
								contentBorderRight: right,
								contentBorderBottom: bottom,
								contentBorderLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Content Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={contentShadowColor}
						onChange={(contentShadowColor) =>
							setAttributes({ contentShadowColor })
						}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={contentHOffset}
						allowReset
						onChange={(newValue) => setAttributes({ contentHOffset: newValue })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={contentVOffset}
						allowReset
						onChange={(newValue) => setAttributes({ contentVOffset: newValue })}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Blur")}
						value={contentShadowBlur}
						allowReset
						onChange={(newValue) =>
							setAttributes({ contentShadowBlur: newValue })
						}
						min={0}
						max={10}
					/>

					<RangeControl
						label={__("Shadow Spread")}
						value={contentShadowSpread}
						allowReset
						onChange={(newValue) =>
							setAttributes({ contentShadowSpread: newValue })
						}
						min={0}
						max={10}
					/>
				</PanelBody>
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

					<BaseControl label={__("Icon Background Type")}>
						<ButtonGroup>
							{TITLE_BACKGROUND_TYPE.map((item) => (
								<Button
									isLarge
									isSecondary={iconBackgroundType !== item.value}
									isPrimary={iconBackgroundType === item.value}
									onClick={() =>
										setAttributes({
											iconBackgroundType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{iconBackgroundType === "fill" && (
						<ColorControl
							label={__("Icon Background Color")}
							color={iconBackgroundColor}
							onChange={(iconBackgroundColor) =>
								setAttributes({ iconBackgroundColor })
							}
						/>
					)}

					{iconBackgroundType === "gradient" && (
						<PanelBody title={__("Icon Gradient Colors")} initialOpen={false}>
							<GradientColorControl
								gradientColor={iconGradient}
								onChange={(newGradient) =>
									setAttributes({ iconGradient: newGradient })
								}
							/>
						</PanelBody>
					)}

					<ColorControl
						label={__("Icon Background Color")}
						color={iconColor}
						onChange={(iconColor) => setAttributes({ iconColor })}
					/>

					<PanelBody title={__("Icon Margin & Padding")} initialOpen={false}>
						<UnitControl
							selectedUnit={iconMarginUnit}
							unitTypes={[
								{ label: "px", value: "px" },
								{ label: "em", value: "em" },
								{ label: "%", value: "%" },
							]}
							onClick={(iconMarginUnit) => setAttributes({ iconMarginUnit })}
						/>

						<DimensionsControl
							label={__("Margin")}
							top={iconMarginTop}
							right={iconMarginRight}
							bottom={iconMarginBottom}
							left={iconMarginLeft}
							onChange={({ top, right, bottom, left }) =>
								setAttributes({
									iconMarginTop: top,
									iconMarginRight: right,
									iconMarginBottom: bottom,
									iconMarginLeft: left,
								})
							}
						/>

						<UnitControl
							selectedUnit={iconPaddingUnit}
							unitTypes={[
								{ label: "px", value: "px" },
								{ label: "em", value: "em" },
								{ label: "%", value: "%" },
							]}
							onClick={(iconPaddingUnit) => setAttributes({ iconPaddingUnit })}
						/>

						<DimensionsControl
							label={__("Padding")}
							top={iconPaddingTop}
							right={iconPaddingRight}
							bottom={iconPaddingBottom}
							left={iconPaddingLeft}
							onChange={({ top, right, bottom, left }) =>
								setAttributes({
									iconPaddingTop: top,
									iconPaddingRight: right,
									iconPaddingBottom: bottom,
									iconPaddingLeft: left,
								})
							}
						/>
					</PanelBody>

					<PanelBody title={__("Icon Background Radius")} initialOpen={false}>
						<RangeControl
							label={__("Icon Background Radius")}
							value={iconBorderRadius}
							allowReset
							onChange={(newValue) =>
								setAttributes({ iconBorderRadius: newValue })
							}
							min={0}
							max={50}
						/>
					</PanelBody>

					<PanelBody title={__("Icon Shadow")} initialOpen={false}>
						<ColorControl
							label={__("Shadow Color")}
							color={iconShadowColor}
							onChange={(iconShadowColor) => setAttributes({ iconShadowColor })}
						/>

						<RangeControl
							label={__("Horizontal Offset")}
							value={iconHOffset}
							allowReset
							onChange={(newValue) => setAttributes({ iconHOffset: newValue })}
							min={0}
							max={10}
						/>

						<RangeControl
							label={__("Vertical Offset")}
							value={iconVOffset}
							allowReset
							onChange={(newValue) => setAttributes({ iconVOffset: newValue })}
							min={0}
							max={10}
						/>

						<RangeControl
							label={__("Shadow Blur")}
							value={iconShadowBlur}
							allowReset
							onChange={(newValue) =>
								setAttributes({ iconShadowBlur: newValue })
							}
							min={0}
							max={10}
						/>

						<RangeControl
							label={__("Shadow Spread")}
							value={iconShadowSpread}
							allowReset
							onChange={(newValue) =>
								setAttributes({ iconShadowSpread: newValue })
							}
							min={0}
							max={10}
						/>
					</PanelBody>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
