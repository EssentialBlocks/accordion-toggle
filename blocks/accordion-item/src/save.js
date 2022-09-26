import { InnerBlocks, RichText } from "@wordpress/block-editor";

const save = ({ attributes }) => {
	const {
		title,
		clickable,
		inheritedTagName,
		inheritedDisplayIcon,
		inheritedTabIcon,
	} = attributes;

	return (
		<>
			<div className="eb-accordion-wrapper" data-clickable={clickable}>
				<div className={`eb-accordion-title-wrapper`}>
					{inheritedDisplayIcon && (
						<span className="eb-accordion-icon-wrapper">
							<span className={`${inheritedTabIcon} eb-accordion-icon`}></span>
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
};

export default save;
