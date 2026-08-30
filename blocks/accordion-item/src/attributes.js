import { titleContentDirection, titleContentVAlign } from "./constants";

const { generateResponsiveAlignAttributes } = window.EBAccordionControls;

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // Layout of the title row (prefix + title + suffix).
    // Defaults mirror the values hard-coded in ./style.scss, so blocks saved
    // before this control existed keep rendering exactly as they did.
    ...generateResponsiveAlignAttributes(titleContentDirection, {
        defaultAlign: "row",
    }),
    ...generateResponsiveAlignAttributes(titleContentVAlign, {
        defaultAlign: "center",
    }),
    // blockId attribute for making unique className and other uniqueness ⬇
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },

    itemId: {
        type: "string",
    },
    title: {
        type: "string",
    },
    titleColor: {
        type: "string",
    },
    clickable: {
        type: "boolean",
        default: false,
    },
    accordionColor: {
        type: "string",
    },
    iconColor: {
        type: "string",
    },
    inheritedAccordionType: {
        type: "string",
        default: "accordion",
    },
    inheritedTagName: {
        type: "string",
        default: "h3",
    },
    inheritedDisplayIcon: {
        type: "boolean",
        default: true,
    },
    inheritedTabIcon: {
        type: "string",
    },
    inheritedExpandedIcon: {
        type: "string",
    },
    faqSchema: {
        type: "boolean",
        default: false,
    },
    parentBlockId: {
        type: "string",
    },
    titlePrefixType: {
        type: "string",
        default: "none",
    },

    titlePrefixColor: {
        type: "string",
    },

    titlePrefixImgUrl: {
        type: "string",
        default: ''
    },
    titlePrefixImgId: {
        type: "string",
    },

    titlePrefixImgAlt: {
        type: "string",
    },

    titleSuffixType: {
        type: "string",
        default: "none",
    },
    titleSuffixIconColor: {
        type: "string",
    },

    titleSuffixImgUrl: {
        type: "string",
        default: ''
    },
    titleSuffixImgId: {
        type: "string",
    },
    titleSuffixImgAlt: {
        type: "string",
    },
    titleSuffixText: {
        type: "string",
        default: "Suffix",
    },
    titlePrefixText: {
        type: "string",
        default: "Prefix",
    },
    titlePrefixIcon: {
        type: "string",
        default: "dashicons-admin-users",
    },
    titleSuffixIcon: {
        type: "string",
        default: "dashicons-admin-site",
    },
};

export default attributes;
