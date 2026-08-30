/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from "@wordpress/block-editor";
const { omit } = lodash;
const { getIconClass, EBDisplayIcon } = window.EBAccordionControls;

import attributes from "./attributes";
import save from "./save";

/**
 * titlePrefixIcon / titleSuffixIcon used to default to a full CSS class string
 * ("dashicon dashicons dashicons-admin-users") instead of the bare icon name the
 * picker stores and EBDisplayIcon expects. EBDisplayIcon prepends "dashicons-" to
 * whatever it is given, so the old default rendered a malformed class list
 * containing a bogus `dashicons-dashicon`, and the picker could not match the
 * value against its list of names so it showed nothing as selected.
 *
 * The defaults are now bare names. Every deprecation below that still carries
 * these two attributes keeps the legacy defaults so posts saved before the change
 * — which have the old class string baked into their markup and no explicit value
 * in the block comment — still validate, and `migrateLegacyIcons` normalises them
 * on load.
 */
const LEGACY_ICON_CLASS_PREFIX = "dashicon dashicons ";

const legacyIconDefaults = {
    titlePrefixIcon: {
        type: "string",
        default: "dashicon dashicons dashicons-admin-users",
    },
    titleSuffixIcon: {
        type: "string",
        default: "dashicon dashicons dashicons-admin-site",
    },
};

const toIconName = (value) =>
    typeof value === "string" && value.startsWith(LEGACY_ICON_CLASS_PREFIX)
        ? value.slice(LEGACY_ICON_CLASS_PREFIX.length)
        : value;

const migrateLegacyIcons = (attrs) => ({
    ...attrs,
    titlePrefixIcon: toIconName(attrs.titlePrefixIcon),
    titleSuffixIcon: toIconName(attrs.titleSuffixIcon),
});

const deprecated = [
    // Current markup, saved while the icon attributes still defaulted to the
    // legacy class strings. Same `save` as the live block - only the defaults differ.
    {
        attributes: {
            ...attributes,
            ...legacyIconDefaults,
        },
        save,
        migrate: migrateLegacyIcons,
    },
    {
        attributes: { ...attributes, ...legacyIconDefaults },
        migrate: migrateLegacyIcons,
        save: ({ attributes }) => {
            const {
                title,
                clickable,
                blockId,
                inheritedTagName,
                inheritedDisplayIcon,
                inheritedTabIcon,

                titlePrefixType,
                titlePrefixText,
                titlePrefixIcon,
                titlePrefixImgUrl,
                titlePrefixImgAlt,

                titleSuffixType,
                titleSuffixText,
                titleSuffixIcon,
                titleSuffixImgUrl,
                titleSuffixImgAlt,
            } = attributes;

            return (
                <>
                    <div
                        className={`${blockId} eb-accordion-wrapper`}
                        data-clickable={clickable}
                    >
                        <div className={`eb-accordion-title-wrapper`} tabIndex={0}>
                            {inheritedDisplayIcon && (
                                <span className="eb-accordion-icon-wrapper">
                                    <span
                                        className={`${getIconClass(inheritedTabIcon)} eb-accordion-icon`}
                                    ></span>
                                </span>
                            )}

                            <div className="eb-accordion-title-content-wrap">
                                {titlePrefixType !== 'none' && (
                                    <>
                                        {titlePrefixType === 'text' && titlePrefixText && (
                                            <RichText.Content
                                                className={"eb-accordion-title-prefix-text"}
                                                tagName="span"
                                                value={titlePrefixText}
                                            />
                                        )}

                                        {titlePrefixType === 'icon' && titlePrefixIcon && (
                                            <EBDisplayIcon icon={titlePrefixIcon} className={`eb-accordion-title-prefix-icon`} />
                                        )}

                                        {titlePrefixType === "image" && titlePrefixImgUrl ? (
                                            <img
                                                className="eb-accordion-title-prefix-img"
                                                src={titlePrefixImgUrl}
                                                alt={titlePrefixImgAlt}
                                            />
                                        ) : null}
                                    </>
                                )}
                                <RichText.Content
                                    className={"eb-accordion-title"}
                                    tagName={inheritedTagName}
                                    value={title}
                                />

                                {titleSuffixType !== 'none' && (
                                    <>
                                        {titleSuffixType === 'text' && titleSuffixText && (
                                            <RichText.Content
                                                className={"eb-accordion-title-suffix-text"}
                                                tagName="span"
                                                value={titleSuffixText}
                                            />
                                        )}

                                        {titleSuffixType === 'icon' && titleSuffixIcon && (
                                            <EBDisplayIcon icon={titleSuffixIcon} className={`eb-accordion-title-suffix-icon`} />
                                        )}

                                        {titleSuffixType === "image" && titleSuffixImgUrl ? (
                                            <img
                                                className="eb-accordion-title-suffix-img"
                                                src={titleSuffixImgUrl}
                                                alt={titleSuffixImgAlt}
                                            />
                                        ) : null}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="eb-accordion-content-wrapper">
                            <div className="eb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </>
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, [
                "parentBlockId",
            ]),
            ...legacyIconDefaults,
        },
        migrate: migrateLegacyIcons,
        save: ({ attributes }) => {
            const {
                title,
                clickable,
                blockId,
                inheritedTagName,
                inheritedDisplayIcon,
                inheritedTabIcon,

                titlePrefixType,
                titlePrefixText,
                titlePrefixIcon,
                titlePrefixImgUrl,
                titlePrefixImgAlt,

                titleSuffixType,
                titleSuffixText,
                titleSuffixIcon,
                titleSuffixImgUrl,
                titleSuffixImgAlt,
            } = attributes;

            return (
                <>
                    <div
                        className={`${blockId} eb-accordion-wrapper`}
                        data-clickable={clickable}
                    >
                        <div className={`eb-accordion-title-wrapper`} tabIndex={0}>
                            {inheritedDisplayIcon && (
                                <span className="eb-accordion-icon-wrapper">
                                    <span
                                        className={`${getIconClass(inheritedTabIcon)} eb-accordion-icon`}
                                    ></span>
                                </span>
                            )}

                            <div className="eb-accordion-title-content-wrap">
                                {titlePrefixType !== 'none' && (
                                    <>
                                        {titlePrefixType === 'text' && titlePrefixText && (
                                            <RichText.Content
                                                className={"eb-accordion-title-prefix-text"}
                                                tagName="span"
                                                value={titlePrefixText}
                                            />
                                        )}

                                        {titlePrefixType === 'icon' && titlePrefixIcon && (
                                            <EBDisplayIcon icon={titlePrefixIcon} className={`eb-accordion-title-prefix-icon`} />
                                        )}

                                        {titlePrefixType === "image" && titlePrefixImgUrl ? (
                                            <img
                                                className="eb-accordion-title-prefix-img"
                                                src={titlePrefixImgUrl}
                                                alt={titlePrefixImgAlt}
                                            />
                                        ) : null}
                                    </>
                                )}
                                <RichText.Content
                                    className={"eb-accordion-title"}
                                    tagName={inheritedTagName}
                                    value={title}
                                />

                                {titleSuffixType !== 'none' && (
                                    <>
                                        {titleSuffixType === 'text' && titleSuffixText && (
                                            <RichText.Content
                                                className={"eb-accordion-title-suffix-text"}
                                                tagName="span"
                                                value={titleSuffixText}
                                            />
                                        )}

                                        {titleSuffixType === 'icon' && titleSuffixIcon && (
                                            <EBDisplayIcon icon={titleSuffixIcon} className={`eb-accordion-title-suffix-icon`} />
                                        )}

                                        {titleSuffixType === "image" && titleSuffixImgUrl ? (
                                            <img
                                                className="eb-accordion-title-suffix-img"
                                                src={titleSuffixImgUrl}
                                                alt={titleSuffixImgAlt}
                                            />
                                        ) : null}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="eb-accordion-content-wrapper">
                            <div className="eb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </>
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, [
                "titlePrefixType",
                "titlePrefixText",
                "titlePrefixIcon",
                "titlePrefixImgUrl",
                "titlePrefixImgId",
                "titlePrefixImgAlt",
                "titleSuffixType",
                "titleSuffixText",
                "titleSuffixIcon",
                "titleSuffixImgUrl",
                "titleSuffixImgId",
                "titleSuffixImgAlt",
            ]),
        },
        save: ({ attributes }) => {
            const {
                title,
                clickable,
                blockId,
                inheritedTagName,
                inheritedDisplayIcon,
                inheritedTabIcon,
            } = attributes;

            return (
                <>
                    <div
                        className={`${blockId} eb-accordion-wrapper`}
                        data-clickable={clickable}
                    >
                        <div className={`eb-accordion-title-wrapper`} tabIndex={0}>
                            {inheritedDisplayIcon && (
                                <span className="eb-accordion-icon-wrapper">
                                    <span
                                        className={`${getIconClass(inheritedTabIcon)} eb-accordion-icon`}
                                    ></span>
                                </span>
                            )}
                            <RichText.Content
                                className={"eb-accordion-title"}
                                tagName={inheritedTagName}
                                value={title}
                            />
                        </div>
                        <div className="eb-accordion-content-wrapper">
                            <div className="eb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </>
            );
        },
    },
    {
        attributes: { ...attributes, ...legacyIconDefaults },
        migrate: migrateLegacyIcons,
        save: ({ attributes }) => {
            const {
                title,
                clickable,
                blockId,
                inheritedTagName,
                inheritedDisplayIcon,
                inheritedTabIcon,
            } = attributes;

            return (
                <>
                    <div
                        className={`${blockId} eb-accordion-wrapper`}
                        data-clickable={clickable}
                    >
                        <div className={`eb-accordion-title-wrapper`}>
                            {inheritedDisplayIcon && (
                                <span className="eb-accordion-icon-wrapper">
                                    <span
                                        className={`${inheritedTabIcon} eb-accordion-icon`}
                                    ></span>
                                </span>
                            )}
                            <RichText.Content
                                className={"eb-accordion-title"}
                                tagName={inheritedTagName}
                                value={title}
                            />
                        </div>
                        <div className="eb-accordion-content-wrapper">
                            <div className="eb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </>
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, [
                "resOption",
                "blockId",
                "blockRoot",
                "blockMeta",
                "titleColor",
                "accordionColor",
                "iconColor",
                "parentBlockId",
            ]),
            ...legacyIconDefaults,
        },
        migrate: migrateLegacyIcons,
        save: ({ attributes }) => {
            const {
                title,
                clickable,
                inheritedTagName,
                inheritedDisplayIcon,
                inheritedTabIcon,
            } = attributes;

            return (
                <>
                    <div
                        className={`eb-accordion-wrapper`}
                        data-clickable={clickable}
                    >
                        <div className={`eb-accordion-title-wrapper`}>
                            {inheritedDisplayIcon && (
                                <span className="eb-accordion-icon-wrapper">
                                    <span
                                        className={`${inheritedTabIcon} eb-accordion-icon`}
                                    ></span>
                                </span>
                            )}
                            <RichText.Content
                                className={"eb-accordion-title"}
                                tagName={inheritedTagName}
                                value={title}
                            />
                        </div>
                        <div className="eb-accordion-content-wrapper">
                            <div className="eb-accordion-content">
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                </>
            );
        },
    },
];

export default deprecated;
