const attributes = {
	itemId: {
		type: "string",
	},
	title: {
		type: "string",
	},
	clickable: {
		type: "boolean",
		default: false,
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
};

export default attributes;
