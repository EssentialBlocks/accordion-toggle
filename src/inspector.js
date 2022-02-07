/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	RangeControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * External dependencies
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";

/**
 * Internal dependencies
 */
import {
	ACCORDION_TYPES,
	ICON_POSITIONS,
	TITLE_ALIGNMENT,
	CONTENT_ALIGN,
} from "./constants";
import SortableAccordions from "./components/sortable-accordion";

//
// import iconList from "../../../util/faIcons";
// import ColorControl from "../../../util/color-control/index";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import BackgroundControl from "../../../util/background-control";

// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";

const {
	//
	faIcons: iconList,
	ColorControl,
	TypographyDropdown,
	ResponsiveDimensionsControl,
	ResponsiveRangeController,
	BorderShadowControl,
	BackgroundControl,

	//
	// mimmikCssForResBtns,
	// mimmikCssOnPreviewBtnClickWhileBlockSelected,
} = window.EBAccordionControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

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
			resOption: select(
				editorStoreForGettingPreivew
			).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

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
											label={__("Accordion Types", "essential-blocks")}
											id="eb-accordion-type"
										>
											<ButtonGroup id="eb-accordion-type-btgrp">
												{ACCORDION_TYPES.map((item, key) => (
													<Button
														key={key}
														// isLarge
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
											label={__("Accordion List", "essential-blocks")}
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
												label={__("Add Accordion Item", "essential-blocks")}
												icon="plus-alt"
												onClick={addAccordion}
											>
												<span className="eb-accordion-add-button-label">
													Add Accordion Item
												</span>
											</Button>
										</div>

										<RangeControl
											label={__("Toggle Speed", "essential-blocks")}
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
											baseLabel={__("Accordions Gap", "essential-blocks")}
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
										title={__("Icon", "essential-blocks")}
										// initialOpen={false}
									>
										<ToggleControl
											label={__("Display Icon", "essential-blocks")}
											checked={displayIcon}
											onChange={() =>
												setAttributes({ displayIcon: !displayIcon })
											}
										/>
										{displayIcon && (
											<>
												<BaseControl label={__("Tab Icon", "essential-blocks")}>
													<FontIconPicker
														icons={iconList}
														value={tabIcon}
														onChange={(tabIcon) => setAttributes({ tabIcon })}
														appendTo="body"
													/>
												</BaseControl>

												<BaseControl
													label={__("Expanded Icon", "essential-blocks")}
												>
													<FontIconPicker
														icons={iconList}
														value={expandedIcon}
														onChange={(expandedIcon) =>
															setAttributes({ expandedIcon })
														}
														appendTo="body"
													/>
												</BaseControl>

												<BaseControl
													label={__("Icon Position", "essential-blocks")}
												>
													<ButtonGroup id="eb-icon-pos-btgrp">
														{ICON_POSITIONS.map((item, key) => (
															<Button
																key={key}
																// isLarge
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
													baseLabel={__("Icon Size", "essential-blocks")}
													controlName={rangeIconSize}
													resRequiredProps={resRequiredProps}
													min={1}
													max={200}
													step={1}
												/>

												<ColorControl
													label={__("Icon Color", "essential-blocks")}
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
													title={__("Background ", "essential-blocks")}
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

									<PanelBody
										title={__("Tab", "essential-blocks")}
										initialOpen={false}
									>
										<BaseControl
											label={__("Title Align ", "essential-blocks")}
											id="eb-accoridon-title-align"
										>
											<ButtonGroup>
												{TITLE_ALIGNMENT.map((item, key) => (
													<Button
														key={key}
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
											label={__("Title Color", "essential-blocks")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>

										<ColorControl
											label={__("Title hover Color", "essential-blocks")}
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
											title={__("Background ", "essential-blocks")}
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
											title={__("Expanded Tab Colors", "essential-blocks")}
											// initialOpen={false}
										>
											<ColorControl
												label={__("Background Color", "essential-blocks")}
												color={activeBgColor}
												onChange={(activeBgColor) =>
													setAttributes({ activeBgColor })
												}
											/>

											<ColorControl
												label={__("Title Color", "essential-blocks")}
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
									</PanelBody>

									<PanelBody
										title={__("Content ", "essential-blocks")}
										initialOpen={false}
									>
										<BaseControl label={__("Align", "essential-blocks")}>
											<ButtonGroup>
												{CONTENT_ALIGN.map((item, key) => (
													<Button
														key={key}
														// isLarge
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
											label={__("Content Color", "essential-blocks")}
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
											title={__("Background ", "essential-blocks")}
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
										title={__("Margin & Padding", "essential-blocks")}
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

									<PanelBody
										title={__("Background ", "essential-blocks")}
										initialOpen={false}
									>
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
