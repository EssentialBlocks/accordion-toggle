/**
 * Internal dependencies
 */
import { titleContentDirection, titleContentVAlign } from "./constants";


const { softMinifyCssStrings, StyleComponent, generateResponsiveAlignStyles } = window.EBAccordionControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        title,
        titleColor,
        clickable,
        iconColor,
        accordionColor,
        parentBlockId,
        titlePrefixColor,
        titleSuffixIconColor,
    } = attributes;

    const {
        alignStylesDesktop: directionDesktop,
        alignStylesTab: directionTab,
        alignStylesMobile: directionMobile,
    } = generateResponsiveAlignStyles({
        controlName: titleContentDirection,
        property: "flex-direction",
        attributes,
    });

    const {
        alignStylesDesktop: vAlignDesktop,
        alignStylesTab: vAlignTab,
        alignStylesMobile: vAlignMobile,
    } = generateResponsiveAlignStyles({
        controlName: titleContentVAlign,
        property: "align-items",
        attributes,
    });

    // Selector for this item's title row. Scoped to ${blockId} so each
    // Accordion Item can lay its prefix out independently.
    const titleRow = `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-content-wrap`;

    // CSS/styling Codes Starts from Here

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
	${accordionColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-wrapper {
		background-image: unset;
		background-color: ${accordionColor};
	}`
            : ""
        }
	${titleColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title {
		color: ${titleColor};
	}`
            : ""
        }
	${iconColor
            ? `.${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-icon {
		color: ${iconColor};
	}`
            : ""
        }
        ${titleRow} {
            ${directionDesktop}
            ${vAlignDesktop}
        }
        .${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-prefix-text,
        .${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-prefix-icon {
            color: ${titlePrefixColor};
        }
        .${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-suffix-text,
        .${parentBlockId}.eb-accordion-container .${blockId}.eb-accordion-wrapper .eb-accordion-title-suffix-icon {
            color: ${titleSuffixIconColor};
        }

	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
        ${titleRow} {
            ${directionTab}
            ${vAlignTab}
        }
    `);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
        ${titleRow} {
            ${directionMobile}
            ${vAlignMobile}
        }
    `);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
