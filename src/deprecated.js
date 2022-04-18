/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * Inteanal dependencies
 */
import AccordionIcon from "./components/accordion-icon";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		save: ({ attributes }) => {
			const {
				blockId,
				accordionType,
				displayIcon,
				accordions,
				tabIcon,
				expandedIcon,
			} = attributes;

			return (
				<div {...useBlockProps.save()}>
					<div
						className={`eb-accordion-container ${blockId}`}
						data-accordion-type={accordionType || "toggle"}
						data-tab-icon={displayIcon ? tabIcon : ""}
						data-expanded-icon={displayIcon ? expandedIcon : ""}
					>
						<div className="eb-accordion-inner">
							{accordions.map((accordion, index) => (
								<div
									className="eb-accordion-wrapper eb-accordion-hidden"
									key={index}
								>
									<div className="eb-accordion-title-wrapper">
										{displayIcon && <AccordionIcon icon={tabIcon} />}

										<RichText.Content
											tagName="h3"
											className="eb-accordion-title"
											value={accordion.title}
										/>
									</div>
									<div className="eb-accordion-content-wrapper">
										<RichText.Content
											tagName="p"
											className="eb-accordion-content"
											value={accordion.content}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
