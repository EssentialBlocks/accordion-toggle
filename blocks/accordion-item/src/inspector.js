/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody, ToggleControl, TabPanel, Button, BaseControl,
    ButtonGroup,
} from "@wordpress/components";
const { ColorControl, DynamicInputControl, EBIconPicker, ImageAvatar, ResponsiveAlignControl } = window.EBAccordionControls;

import {
    MEDIA_TYPES,
    TITLE_CONTENT_DIRECTION,
    TITLE_CONTENT_VERTICAL_ALIGN,
    TITLE_CONTENT_HORIZONTAL_ALIGN,
    titleContentDirection,
    titleContentVAlign,
} from "./constants";

import objAttributes from "./attributes";

const Inspector = ({ attributes, setAttributes }) => {
    // Shape the shared responsive controls expect. It was referenced further
    // down by controls that had been commented out, but never defined.
    const resRequiredProps = {
        setAttributes,
        resOption: attributes.resOption,
        attributes,
        objAttributes,
    };

    // `align-items` is the flex cross axis: vertical while the row is
    // flex-direction:row, horizontal once it is flex-direction:column. The values
    // are identical, so only the button labels follow the layout.
    //
    // Read the direction for the device currently being previewed, mirroring the
    // CSS fallback where an empty tablet/mobile value inherits the wider one.
    const activeDirection =
        attributes.resOption === "Mobile"
            ? attributes[`MOB${titleContentDirection}`] ||
              attributes[`TAB${titleContentDirection}`] ||
              attributes[titleContentDirection]
            : attributes.resOption === "Tablet"
              ? attributes[`TAB${titleContentDirection}`] ||
                attributes[titleContentDirection]
              : attributes[titleContentDirection];

    const isColumnLayout = activeDirection === "column";

    const { clickable, accordionColor,
        titleColor, iconColor,
        title,
        titlePrefixType,
        titlePrefixIcon,
        titlePrefixText,
        titlePrefixColor,
        titlePrefixImgUrl,
        titlePrefixImgId,
        titlePrefixImgAlt,

        titleSuffixType,
        titleSuffixIcon,
        titleSuffixText,
        titleSuffixIconColor,
        titleSuffixImgUrl,
        titleSuffixImgId,
        titleSuffixImgAlt
    } = attributes;

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
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls " + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody>
                                        <ToggleControl
                                            label={__("Default Open?", "essential-blocks")}
                                            checked={clickable}
                                            onChange={() => setAttributes({ clickable: !clickable })}
                                        />
                                        <DynamicInputControl
                                            label="Title Text"
                                            attrName="titleText"
                                            inputValue={title}
                                            setAttributes={setAttributes}
                                            onChange={(text) => setAttributes({ title: text })}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Title", "essential-blocks")}>
                                        <PanelBody title={__("Title Prefix", "essential-blocks")}>
                                            <ResponsiveAlignControl
                                                baseLabel={__(
                                                    "Prefix & Title Layout",
                                                    "essential-blocks"
                                                )}
                                                controlName={
                                                    titleContentDirection
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                options={
                                                    TITLE_CONTENT_DIRECTION
                                                }
                                            />

                                            <ResponsiveAlignControl
                                                baseLabel={
                                                    isColumnLayout
                                                        ? __(
                                                              "Prefix & Title Horizontal Align",
                                                              "essential-blocks"
                                                          )
                                                        : __(
                                                              "Prefix & Title Vertical Align",
                                                              "essential-blocks"
                                                          )
                                                }
                                                controlName={titleContentVAlign}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                options={
                                                    isColumnLayout
                                                        ? TITLE_CONTENT_HORIZONTAL_ALIGN
                                                        : TITLE_CONTENT_VERTICAL_ALIGN
                                                }
                                            />

                                            <BaseControl id="eb-accordion-image-icon">
                                                <ButtonGroup id="eb-accordion-image-icon">
                                                    {MEDIA_TYPES.map(
                                                        (
                                                            { label, value },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                isSecondary={
                                                                    titlePrefixType !== value
                                                                }
                                                                isPrimary={
                                                                    titlePrefixType === value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        titlePrefixType: value,
                                                                    })
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {titlePrefixType !== "none" && (
                                                <>
                                                    {titlePrefixType === "icon" && (
                                                        <EBIconPicker
                                                            value={titlePrefixIcon}
                                                            onChange={(icon) =>
                                                                setAttributes({
                                                                    titlePrefixIcon: icon,
                                                                })
                                                            }
                                                        />
                                                    )}

                                                    {/* {titlePrefixType === "icon" &&
                                                        titlePrefixIcon && (
                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Icon Size",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    mediaIconSize
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={8}
                                                                max={200}
                                                                step={1}
                                                            />
                                                        )} */}

                                                    {titlePrefixType === "text" && (
                                                        <>
                                                            <DynamicInputControl
                                                                label="Prefix Text"
                                                                attrName="titlePrefixText"
                                                                inputValue={titlePrefixText}
                                                                setAttributes={setAttributes}
                                                                onChange={(text) =>
                                                                    setAttributes({
                                                                        titlePrefixText: text,
                                                                    })
                                                                }
                                                            />

                                                            {/* <TypographyDropdown
                                                                baseLabel="Text Typography"
                                                                typographyPrefixConstant={
                                                                    typoPrefix_number
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                            /> */}
                                                        </>
                                                    )}

                                                    {(titlePrefixType === "text" ||
                                                        titlePrefixType === "icon") && (
                                                            <>
                                                                <ColorControl
                                                                    label={__(
                                                                        "Color",
                                                                        "essential-blocks"
                                                                    )}
                                                                    color={titlePrefixColor}
                                                                    onChange={(
                                                                        titlePrefixColor
                                                                    ) =>
                                                                        setAttributes({
                                                                            titlePrefixColor,
                                                                        })
                                                                    }
                                                                />
                                                            </>
                                                        )}

                                                    {titlePrefixType === "image" &&
                                                        !titlePrefixImgUrl && (
                                                            <MediaUpload
                                                                onSelect={({
                                                                    id,
                                                                    url,
                                                                    alt,
                                                                }) =>
                                                                    setAttributes({
                                                                        titlePrefixImgUrl: url,
                                                                        titlePrefixImgId: id,
                                                                        titlePrefixImgAlt: alt,
                                                                    })
                                                                }
                                                                type="image"
                                                                value={titlePrefixImgId}
                                                                render={({
                                                                    open,
                                                                }) => {
                                                                    return (
                                                                        <Button
                                                                            className="eb-background-control-inspector-panel-img-btn components-button"
                                                                            label={__(
                                                                                "Upload Image",
                                                                                "essential-blocks"
                                                                            )}
                                                                            icon="format-image"
                                                                            onClick={
                                                                                open
                                                                            }
                                                                        />
                                                                    );
                                                                }}
                                                            />
                                                        )}

                                                    {titlePrefixType === "image" && titlePrefixImgUrl && (
                                                        <>
                                                            <ImageAvatar
                                                                imageUrl={titlePrefixImgUrl}
                                                                onDeleteImage={() =>
                                                                    setAttributes({
                                                                        titlePrefixImgUrl: null,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </PanelBody>

                                        <PanelBody title={__("Title Suffix", "essential-blocks")}>
                                            <BaseControl id="eb-accordion-image-icon">
                                                <ButtonGroup id="eb-accordion-image-icon">
                                                    {MEDIA_TYPES.map(
                                                        (
                                                            { label, value },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                isSecondary={
                                                                    titleSuffixType !== value
                                                                }
                                                                isPrimary={
                                                                    titleSuffixType === value
                                                                }
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        titleSuffixType: value,
                                                                    })
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {titleSuffixType !== "none" && (
                                                <>


                                                    {titleSuffixType === "icon" && (
                                                        <EBIconPicker
                                                            value={titleSuffixIcon}
                                                            onChange={(icon) =>
                                                                setAttributes({
                                                                    titleSuffixIcon: icon,
                                                                })
                                                            }
                                                        />
                                                    )}

                                                    {/* {titlePrefixType === "icon" &&
                                                        titlePrefixIcon && (
                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Icon Size",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    mediaIconSize
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={8}
                                                                max={200}
                                                                step={1}
                                                            />
                                                        )} */}

                                                    {titleSuffixType === "text" && (
                                                        <>
                                                            <DynamicInputControl
                                                                label="Suffix Text"
                                                                attrName="titleSuffixText"
                                                                inputValue={titleSuffixText}
                                                                setAttributes={setAttributes}
                                                                onChange={(text) =>
                                                                    setAttributes({
                                                                        titleSuffixText: text,
                                                                    })
                                                                }
                                                            />

                                                            {/* <TypographyDropdown
                                                                baseLabel="Text Typography"
                                                                typographyPrefixConstant={
                                                                    typoPrefix_number
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                            /> */}
                                                        </>
                                                    )}

                                                    {(titleSuffixType === "text" ||
                                                        titleSuffixType === "icon") && (
                                                            <>
                                                                <ColorControl
                                                                    label={__(
                                                                        "Color",
                                                                        "essential-blocks"
                                                                    )}
                                                                    color={titleSuffixIconColor}
                                                                    onChange={(
                                                                        titleSuffixIconColor
                                                                    ) =>
                                                                        setAttributes({
                                                                            titleSuffixIconColor,
                                                                        })
                                                                    }
                                                                />
                                                            </>
                                                        )}

                                                    {titleSuffixType === "image" &&
                                                        !titleSuffixImgUrl && (
                                                            <MediaUpload
                                                                onSelect={({
                                                                    id,
                                                                    url,
                                                                    alt,
                                                                }) =>
                                                                    setAttributes({
                                                                        titleSuffixImgUrl: url,
                                                                        titleSuffixImgId: id,
                                                                        titleSuffixImgAlt: alt,
                                                                    })
                                                                }
                                                                type="image"
                                                                value={titleSuffixImgId}
                                                                render={({
                                                                    open,
                                                                }) => {
                                                                    return (
                                                                        <Button
                                                                            className="eb-background-control-inspector-panel-img-btn components-button"
                                                                            label={__(
                                                                                "Upload Image",
                                                                                "essential-blocks"
                                                                            )}
                                                                            icon="format-image"
                                                                            onClick={
                                                                                open
                                                                            }
                                                                        />
                                                                    );
                                                                }}
                                                            />
                                                        )}

                                                    {titleSuffixType === "image" && titleSuffixImgUrl && (
                                                        <>
                                                            <ImageAvatar
                                                                imageUrl={titleSuffixImgUrl}
                                                                onDeleteImage={() =>
                                                                    setAttributes({
                                                                        titleSuffixImgUrl: null,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </PanelBody>

                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody>

                                        <ColorControl
                                            label={__(
                                                "Accordion Background Color",
                                                "essential-blocks"
                                            )}
                                            color={accordionColor}
                                            onChange={(accordionColor) =>
                                                setAttributes({ accordionColor })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Accordion Title Color", "essential-blocks")}
                                            color={titleColor}
                                            onChange={(titleColor) => setAttributes({ titleColor })}
                                        />
                                        <ColorControl
                                            label={__("Accordion Icon Color", "essential-blocks")}
                                            color={iconColor}
                                            onChange={(iconColor) => setAttributes({ iconColor })}
                                        />
                                    </PanelBody>
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div >
        </InspectorControls >
    );
};

export default Inspector;
