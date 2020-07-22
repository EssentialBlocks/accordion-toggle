const AccordionIcon = ({ icon, iconWrapperStyles, iconStyles }) => (
	<span className="eb-accordion-icon-wrapper" style={iconWrapperStyles}>
		<span className={`${icon} eb-accordion-icon`} style={iconStyles} />
	</span>
);

export default AccordionIcon;
