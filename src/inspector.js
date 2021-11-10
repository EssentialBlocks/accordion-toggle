/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;
const {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	RangeControl,
	TabPanel,
} = wp.components;

/**
 * Internal dependencies
 */
import {
	ACCORDION_TYPES,
	ICON_POSITIONS,
	TITLE_ALIGNMENT,
	CONTENT_ALIGN,
} from "./constants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import SortableAccordions from "./components/sortable-accordion";
import ColorControl from "../util/color-control/index";
import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import objAttributes from "./attributes";

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

const Inspector = ({
	attributes,
	setAttributes,
	addAccordion,
	onDeleteAccordion,
	onSortEnd,
}) => {
	const {
		resOption,

		//
		accordionType,
		displayIcon,
		transitionDuration,
		accordions,
		tabIcon,
		expandedIcon,
		titleColor,
		contentAlign,
		contentColor,
		iconColor,
		iconPosition,
		titleAlignment,
		hoverTitleColor,
		activeBgColor,
		activeTitleColor,
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
		objAttributes,
	};

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
							title: "Style",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advanced",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody>
										<BaseControl
											label={__("Accordion Types")}
											id="eb-accordion-type"
										>
											<ButtonGroup id="eb-accordion-type-btgrp">
												{ACCORDION_TYPES.map((item) => (
													<Button
														isLarge
														isSecondary={accordionType !== item.value}
														isPrimary={accordionType === item.value}
														onClick={() =>
															setAttributes({
																accordionType: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<BaseControl
											id="eb-accordion-sortable"
											className="eb-accordion-sortable-base"
											label={__("Accordion List")}
										>
											<SortableAccordions
												accordions={accordions}
												onDeleteAccordion={onDeleteAccordion}
												onSortEnd={onSortEnd}
											/>
										</BaseControl>

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
										</div>

										<RangeControl
											label={__("Toggle Speed")}
											value={transitionDuration}
											onChange={(transitionDuration) =>
												setAttributes({ transitionDuration })
											}
											min={0}
											max={5}
											step={0.1}
										/>

										<ResponsiveRangeController
											noUnits
											baseLabel={__("Accordions Gap")}
											controlName={accGapRange}
											resRequiredProps={resRequiredProps}
											min={1}
											max={100}
											step={1}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Icon")}
										// initialOpen={false}
									>
										<ToggleControl
											label={__("Display Icon")}
											checked={displayIcon}
											onChange={() =>
												setAttributes({ displayIcon: !displayIcon })
											}
										/>
										{displayIcon && (
											<>
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
														onChange={(expandedIcon) =>
															setAttributes({ expandedIcon })
														}
														appendTo="body"
													/>
												</BaseControl>

												<BaseControl label={__("Icon Position")}>
													<ButtonGroup id="eb-icon-pos-btgrp">
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

												<ResponsiveRangeController
													noUnits
													baseLabel={__("Icon Size")}
													controlName={rangeIconSize}
													resRequiredProps={resRequiredProps}
													min={1}
													max={200}
													step={1}
												/>

												<ColorControl
													label={__("Icon Color")}
													color={iconColor}
													onChange={(iconColor) => setAttributes({ iconColor })}
												/>

												<PanelBody
													title={__("Margin & Padding")}
													// initialOpen={true}
												>
													<ResponsiveDimensionsControl
														resRequiredProps={resRequiredProps}
														controlName={iconMarginConst}
														baseLabel="Margin"
													/>
													<ResponsiveDimensionsControl
														resRequiredProps={resRequiredProps}
														controlName={iconPaddingConst}
														baseLabel="Padding"
													/>
												</PanelBody>

												<PanelBody
													title={__("Background ")}
													// initialOpen={false}
												>
													<BackgroundControl
														controlName={iconBgConst}
														resRequiredProps={resRequiredProps}
														noOverlay
														noMainBgi
													/>
												</PanelBody>

												<PanelBody
													title={__("Border & Shadow")}
													// initialOpen={false}
												>
													<BorderShadowControl
														controlName={iconBdShadowConst}
														resRequiredProps={resRequiredProps}
														// noShadow
														// noBorder
													/>
												</PanelBody>
											</>
										)}
									</PanelBody>

									<PanelBody title={__("Tab")} initialOpen={false}>
										<BaseControl
											label={__("Title Align ")}
											id="eb-accoridon-title-align"
										>
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

										<TypographyDropdown
											baseLabel="Title Typography"
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Title Color")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>

										<ColorControl
											label={__("Title hover Color")}
											color={hoverTitleColor}
											onChange={(hoverTitleColor) =>
												setAttributes({ hoverTitleColor })
											}
										/>

										<PanelBody
											title={__("Margin & Padding")}
											// initialOpen={true}
										>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={tabMarginConst}
												baseLabel="Margin"
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={tabPaddingConst}
												baseLabel="Padding"
											/>
										</PanelBody>

										<PanelBody
											title={__("Background ")}
											// initialOpen={false}
										>
											<BackgroundControl
												controlName={tabBgConst}
												resRequiredProps={resRequiredProps}
												noMainBgi
												noOverlay
											/>
										</PanelBody>

										<PanelBody
											title={__("Expanded Tab Colors")}
											// initialOpen={false}
										>
											<ColorControl
												label={__("Background Color")}
												color={activeBgColor}
												onChange={(activeBgColor) =>
													setAttributes({ activeBgColor })
												}
											/>

											<ColorControl
												label={__("Title Color")}
												color={activeTitleColor}
												onChange={(activeTitleColor) =>
													setAttributes({ activeTitleColor })
												}
											/>
										</PanelBody>

										<PanelBody
											title={__("Border & Shadow")}
											// initialOpen={false}
										>
											<BorderShadowControl
												controlName={tabBdShadowConst}
												resRequiredProps={resRequiredProps}
												// noShadow
												// noBorder
											/>
										</PanelBody>

										<>
											{/* 
										<BaseControl
											label={__("Title Background Type")}
											id="eb-accordion-title-bg-type"
										>
											<ButtonGroup id="eb-acc-t-bg-t-btgrp">
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
											<PanelBody
												title={__("Gradient Colors")}
												initialOpen={false}
											>
												<GradientColorControl
													gradientColor={titleBackgroundGradient}
													onChange={(titleBackgroundGradient) =>
														setAttributes({ titleBackgroundGradient })
													}
												/>
											</PanelBody>
										)}


										<PanelBody
											title={__("Tab Margin & Padding")}
											initialOpen={false}
										>
											<UnitControl
												selectedUnit={tabMarginUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(tabMarginUnit) =>
													setAttributes({ tabMarginUnit })
												}
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
												onClick={(tabPaddingUnit) =>
													setAttributes({ tabPaddingUnit })
												}
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

										<PanelBody
											title={__("Tab Border Settings")}
											initialOpen={false}
										>
											<BaseControl label={__("Tab Border Type")}>
												<ButtonGroup id="eb-acc-t-bg-t-btgrp">
													{COLOR_TYPES.map((item) => (
														<Button
															isLarge
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
													onChange={(tabBorderColor) =>
														setAttributes({ tabBorderColor })
													}
												/>
											)}

											{tabBorderColorType === "gradient" && (
												<PanelBody
													title={__("Border Gradient")}
													initialOpen={false}
												>
													<GradientColorControl
														gradientColor={tabBorderGradient}
														onChange={(tabBorderGradient) =>
															setAttributes({ tabBorderGradient })
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
												onClick={(tabBorderUnit) =>
													setAttributes({ tabBorderUnit })
												}
											/>

											<ResetControl
												onReset={() =>
													setAttributes({ tabBorderWidth: undefined })
												}
											>
												<RangeControl
													label={__("Tab Border Width")}
													value={tabBorderWidth}
													onChange={(newValue) =>
														setAttributes({ tabBorderWidth: newValue })
													}
													min={0}
													max={100}
												/>
											</ResetControl>

											<UnitControl
												selectedUnit={tabRadiusUnit}
												unitTypes={[
													{ label: "px", value: "px" },
													{ label: "em", value: "em" },
													{ label: "%", value: "%" },
												]}
												onClick={(tabRadiusUnit) =>
													setAttributes({ tabRadiusUnit })
												}
											/>

											<ResetControl
												onReset={() =>
													setAttributes({ tabBorderRadius: undefined })
												}
											>
												<RangeControl
													label={__("Tab Border Radius")}
													value={tabBorderRadius}
													onChange={(newSize) =>
														setAttributes({ tabBorderRadius: newSize })
													}
													min={0}
													max={100}
												/>
											</ResetControl>
										</PanelBody>

										<PanelBody
											title={__("Tab Shadow Settings")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Shadow Color")}
												color={tabShadowColor}
												onChange={(tabShadowColor) =>
													setAttributes({ tabShadowColor })
												}
											/>

											<ResetControl
												onReset={() => setAttributes({ tabHOffset: undefined })}
											>
												<RangeControl
													label={__("Horizontal Offset")}
													value={tabHOffset}
													onChange={(newValue) =>
														setAttributes({ tabHOffset: newValue })
													}
													min={0}
													max={100}
												/>
											</ResetControl>

											<ResetControl
												onReset={() => setAttributes({ tabVOffset: undefined })}
											>
												<RangeControl
													label={__("Vertical Offset")}
													value={tabVOffset}
													onChange={(newValue) =>
														setAttributes({ tabVOffset: newValue })
													}
													min={0}
													max={100}
												/>
											</ResetControl>

											<ResetControl
												onReset={() =>
													setAttributes({ tabShadowBlur: undefined })
												}
											>
												<RangeControl
													label={__("Shadow Blur")}
													value={tabShadowBlur}
													onChange={(newValue) =>
														setAttributes({ tabShadowBlur: newValue })
													}
													min={0}
													max={100}
												/>
											</ResetControl>

											<ResetControl
												onReset={() =>
													setAttributes({ tabShadowSpread: undefined })
												}
											>
												<RangeControl
													label={__("Shadow Spread")}
													value={tabShadowSpread}
													onChange={(newValue) =>
														setAttributes({ tabShadowSpread: newValue })
													}
													min={0}
													max={100}
												/>
											</ResetControl>
										</PanelBody> */}
										</>
									</PanelBody>

									<PanelBody title={__("Content ")} initialOpen={false}>
										<BaseControl label={__("Align")}>
											<ButtonGroup>
												{CONTENT_ALIGN.map((item) => (
													<Button
														isLarge
														isSecondary={contentAlign !== item.value}
														isPrimary={contentAlign === item.value}
														onClick={() =>
															setAttributes({ contentAlign: item.value })
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<TypographyDropdown
											baseLabel="Content Typography"
											typographyPrefixConstant={typoPrefix_content}
											resRequiredProps={resRequiredProps}
										/>

										<ColorControl
											label={__("Content Color")}
											color={contentColor}
											onChange={(contentColor) =>
												setAttributes({ contentColor })
											}
										/>

										<PanelBody
											title={__("Margin & Padding")}
											// initialOpen={true}
										>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={conMarginConst}
												baseLabel="Margin"
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={conPaddingConst}
												baseLabel="Padding"
											/>
										</PanelBody>

										<PanelBody
											title={__("Background ")}
											// initialOpen={false}
										>
											<BackgroundControl
												controlName={conBgConst}
												resRequiredProps={resRequiredProps}
												noOverlay
												noMainBgi
											/>
										</PanelBody>

										<PanelBody
											title={__("Border & Shadow")}
											// initialOpen={false}
										>
											<BorderShadowControl
												controlName={conBdShadowConst}
												resRequiredProps={resRequiredProps}
												// noShadow
												// noBorder
											/>
										</PanelBody>
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
										// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Background ")} initialOpen={false}>
										<BackgroundControl
											controlName={WrpBgConst}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
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
