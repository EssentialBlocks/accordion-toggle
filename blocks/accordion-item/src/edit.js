/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { useRef } from "@wordpress/element";

import classnames from "classnames";
import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, className, isSelected } = props;
	const {
		title,
		clickable,
		inheritedTagName,
		inheritedDisplayIcon,
		inheritedTabIcon,
		inheritedExpandedIcon,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames(
			className,
			`eb-guten-block-main-parent-wrapper eb-accordion-item`
		),
	});

	const accordionTitle = useRef(null);
	const handleSlidingOfAccordion = () => {
		let contentWrapper = accordionTitle.current.nextElementSibling;
		let tabIcon = accordionTitle.current
			.getAttribute("data-tab-icon")
			.split(" ");
		let expandedIcon = accordionTitle.current
			.getAttribute("data-expanded-icon")
			.split(" ");
		let iconWrapper = accordionTitle.current.children[0].children[0];

		if (contentWrapper.style.display === "block") {
			contentWrapper.style.display = "none";
			iconWrapper.removeAttribute("class");
			for (let i = 0; i < tabIcon.length; i++) {
				iconWrapper.classList.add(tabIcon[i]);
			}
			iconWrapper.classList.add("eb-accordion-icon");
		} else {
			contentWrapper.style.display = "block";
			contentWrapper.style.opacity = "1";
			iconWrapper.removeAttribute("class");
			for (let i = 0; i < expandedIcon.length; i++) {
				iconWrapper.classList.add(expandedIcon[i]);
			}
			iconWrapper.classList.add("eb-accordion-icon");
		}
	};

	return (
		<>
			{isSelected && <Inspector {...props} />}
			<div {...blockProps}>
				<div
					className={`eb-accordion-wrapper for_edit_page`}
					data-clickable={clickable}
				>
					<div
						className={`eb-accordion-title-wrapper`}
						onClick={handleSlidingOfAccordion}
						ref={accordionTitle}
						data-tab-icon={inheritedDisplayIcon ? inheritedTabIcon : ""}
						data-expanded-icon={
							inheritedDisplayIcon ? inheritedExpandedIcon : ""
						}
					>
						{inheritedDisplayIcon && (
							<span className="eb-accordion-icon-wrapper">
								<span
									className={`${inheritedTabIcon} eb-accordion-icon`}
								></span>
							</span>
						)}

						<RichText
							className="eb-accordion-title"
							tagName={inheritedTagName}
							placeholder={__("Add Title", "essential-blocks")}
							onChange={(value) => setAttributes({ title: value })}
							value={title}
						/>
					</div>
					<div
						className="eb-accordion-content-wrapper"
						style={{ display: "none" }}
					>
						<div className="eb-accordion-content">
							<InnerBlocks templateLock={false} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
