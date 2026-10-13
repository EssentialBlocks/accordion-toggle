/**
 * WordPress dependencies
 */
import { InnerBlocks } from "@wordpress/block-editor";
const { BlockProps } = window.EBAccordionControls;
const Save = ({ attributes }) => {
    const {
        blockId,
        classHook,
        accordionType,
        displayIcon,
        tabIcon,
        expandedIcon,
        transitionDuration,
        designVersion
    } = attributes;

    return (
        <BlockProps.Save
            attributes={attributes}
        >
            <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                <div
                    className={`eb-accordion-container ${blockId}`}
                    data-accordion-type={accordionType || "toggle"}
                    data-tab-icon={displayIcon ? tabIcon : ""}
                    data-expanded-icon={displayIcon ? expandedIcon : ""}
                    data-transition-duration={transitionDuration ? Number(transitionDuration) * 1000 : 500}
                    // Only written for blocks on the 1.4.0 design (see `designVersion`), so
                    // blocks saved by earlier versions keep byte-identical markup.
                    {...(designVersion ? { "data-design-version": designVersion } : {})}
                >
                    <div className="eb-accordion-inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </BlockProps.Save>
    );
};

export default Save;
