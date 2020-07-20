document.addEventListener("DOMContentLoaded", function(event) {
	let accordions = document.querySelectorAll(".eb-accordion-container");

	// Return if there is no accoridion block
	if (!accordions) return;

	for (let x = 0; x < accordions.length; x++) {
		let accordion = accordions[x];
		let titleNodes = accordion.querySelectorAll(".eb-accordion-title-wrapper");
		let contentNodes = accordion.querySelectorAll(
			".eb-accordion-content-wrapper"
		);
		let hide = "eb-accordion-hidden";

		function changeIcon(clickedTab) {
			// Replace tab icon with expanded or vice versa
			let iconNode = clickedTab.querySelector(".eb-accordion-icon");
			let isExpanded = iconNode.classList.contains(faExpandPostfix);

			if (isExpanded) {
				iconNode.classList.remove(faExpandPrefix, faExpandPostfix);
				iconNode.classList.add(faTabPrefix, faTabPostfix);
				iconNode.style.color = iconColor;
			} else {
				iconNode.classList.remove(faTabPrefix, faTabPostfix);
				iconNode.classList.add(faExpandPrefix, faExpandPostfix);
				iconNode.style.color = activeTitleColor || defaultTitleColor;
			}
		}

		function changeAllExpandIcons(accordion, color) {
			let iconNodes = accordion.querySelectorAll(".eb-accordion-icon");

			// Replace expand icon with tab icon & change color
			for (let i = 0; i < iconNodes.length; i++) {
				if (iconNodes[i].classList.contains(faExpandPostfix)) {
					iconNodes[i].classList.remove(faExpandPrefix, faExpandPostfix);
					iconNodes[i].classList.add(faTabPrefix, faTabPostfix);
					iconNodes[i].style.color = iconColor;
				}
			}
		}

		// Get all data attributes
		var accordionType = accordion.getAttribute("data-accordion-type");
		var transitionFunction = accordion.getAttribute("data-transition-function");
		var duration = accordion.getAttribute("data-transition-duration");
		var tabIcon = accordion.getAttribute("data-tab-icon");
		var expandedIcon = accordion.getAttribute("data-expanded-icon");
		var hoverColor = accordion.getAttribute("data-hover-color");
		var defaultColor = accordion.getAttribute("data-original-color");
		var activeColor = accordion.getAttribute("data-active-color");
		var activeTitleColor = accordion.getAttribute("data-active-title-color");
		var defaultTitleColor = accordion.getAttribute("data-title-color");
		var iconColor = accordion.getAttribute("data-icon-color");
		var backgroundImageURL = accordion.getAttribute(
			"data-background-image-url"
		);

		// Seperate fontawesome 5 prefix and postfix classes.
		let faTabPrefix = tabIcon.split(" ")[0];
		let faTabPostfix = tabIcon.split(" ")[1];
		let faExpandPrefix = expandedIcon.split(" ")[0];
		let faExpandPostfix = expandedIcon.split(" ")[1];

		// Set accordion background image
		if (backgroundImageURL) {
			accordion.style.backgroundImage = `url(${backgroundImageURL})`;
		}

		// Hide all accordion content by default
		hideContents(contentNodes, hide);

		// Add data-height, transition timing function, height css attribute to all content
		for (let i = 0; i < contentNodes.length; i++) {
			contentNodes[i].style.transitionTimingFunction = transitionFunction;
			contentNodes[i].dataset.height = contentNodes[i].clientHeight + "px";
			contentNodes[i].style.height = "0px";
		}

		// Take action based on accordion type
		accordionType === "toggle"
			? setToggleAction(titleNodes)
			: setAccordionAction(titleNodes);

		// Toggle action here
		function setToggleAction(titleNodes) {
			for (let i = 0; i < titleNodes.length; i++) {
				let selectedTab = titleNodes[i];

				(function(selectedTab) {
					selectedTab.addEventListener("click", onToggleTabClick);
					selectedTab.addEventListener("mouseover", onMouseOver);
					selectedTab.addEventListener("mouseleave", onMouseLeave);
				})(selectedTab);
			}
		}

		function onToggleTabClick() {
			let clickedTab = this;
			let contentNode = clickedTab.nextElementSibling;
			let contentHeight = contentNode.getAttribute("data-height");
			let alreadyOpen = !contentNode.classList.contains(hide);

			// Change content height to 0, remove active color if it's open
			if (alreadyOpen) {
				contentNode.style.height = "0px";
				contentNode.style.overflow = "hidden";
				contentNode.querySelector("p").style.transform = `translate(0px,-20px)`;
				this.style.background = defaultColor;
				setTitleColor(this, defaultTitleColor);
			} else {
				contentNode.style.height = contentHeight;
				contentNode.style.overflow = "visible";
				contentNode.querySelector("p").style.transform = `translate(0px,0px)`;
				this.style.background = activeColor || defaultColor;
				setTitleColor(this, activeTitleColor);
			}

			contentNode.classList.toggle(hide);

			// Change tab icon
			changeIcon(clickedTab);
		}

		function onMouseOver() {
			let alreadyOpen = !this.nextElementSibling.classList.contains(hide);
			if (alreadyOpen) {
				this.style.background = activeColor || hoverColor || defaultColor;
				setTitleColor(this, activeTitleColor);
			} else {
				this.style.background = hoverColor || defaultColor;
				setTitleColor(this, defaultTitleColor);
			}
		}

		function onMouseLeave() {
			// Change tab color based on content hide / open
			let contentNode = this.nextElementSibling;
			let alreadyOpen = !contentNode.classList.contains(hide);

			if (alreadyOpen) {
				this.style.backgroundColor = activeColor || defaultColor;
			} else {
				this.style.backgroundColor = defaultColor;
			}
		}

		// Accordion action here
		function setAccordionAction(titleNodes) {
			for (let i = 0; i < titleNodes.length; i++) {
				let selectedTab = titleNodes[i];

				(function(selectedTab) {
					selectedTab.addEventListener("click", onAccordionTabClick);
					selectedTab.addEventListener("mouseover", onMouseOver);
					selectedTab.addEventListener("mouseleave", onAccordionMouseLeave);
				})(selectedTab);
			}
		}

		function onAccordionTabClick() {
			let clickedTab = this;
			let contentNode = this.nextElementSibling;
			let contentHeight = contentNode.getAttribute("data-height");
			let alreadyOpen = !contentNode.classList.contains(hide);

			// Hide all contents, change expand icon to tab icon then
			// toggle clicked accordion
			// If accordion was already open, hide it
			hideAccordionContents(contentNodes, hide);
			changeAllExpandIcons(accordion, iconColor);
			contentNode.classList.toggle(hide);

			if (alreadyOpen) {
				// Hide content and change background color, icon
				contentNode.classList.add(hide);
				contentNode.style.height = "0px";
				this.style.background = defaultColor;
				setTitleColor(clickedTab, defaultTitleColor);
				setIconColor(clickedTab, iconColor);
				changeIcon(clickedTab);
			} else {
				// Open content, change all tab colors to default except clicked one
				contentNode.style.height = contentHeight;
				changeAllTitleColors(titleNodes, defaultColor, defaultTitleColor);
				this.style.background = activeColor || defaultColor;
				setTitleColor(clickedTab, activeTitleColor);
				setIconColor(clickedTab, activeTitleColor);
			}

			//Change tab icon
			changeIcon(clickedTab);
		}

		function onAccordionMouseLeave() {
			for (let i = 0; i < titleNodes.length; i++) {
				let contentNode = titleNodes[i].nextElementSibling;
				let alreadyOpen = !contentNode.classList.contains(hide);

				if (alreadyOpen) {
					titleNodes[i].style.backgroundColor = activeColor || defaultColor;
					setTitleColor(titleNodes[i], activeTitleColor);
				} else {
					titleNodes[i].style.backgroundColor = defaultColor;
					setTitleColor(titleNodes[i], defaultTitleColor);
				}
			}
		}
	}
});

function rgbToHex(color) {
	if (color.charAt(0) == "r") {
		color = color
			.replace("rgb(", "")
			.replace(")", "")
			.split(",");
		var r = parseInt(color[0], 10).toString(16);
		var g = parseInt(color[1], 10).toString(16);
		var b = parseInt(color[2], 10).toString(16);
		r = r.length == 1 ? "0" + r : r;
		g = g.length == 1 ? "0" + g : g;
		b = b.length == 1 ? "0" + b : b;
		var hexColor = "#" + r + g + b;
		return hexColor;
	}
}

function setTitleColor(titleNode, color) {
	titleNode.querySelector(".eb-accordion-title").style.color = color;
}

function setIconColor(titleNode, color) {
	titleNode.querySelector(".eb-accordion-icon").style.color = color;
}

function hideContents(contentNodes, hide) {
	for (let i = 0; i < contentNodes.length; i++) {
		contentNodes[i].classList.add(hide);
	}
}

function hideAccordionContents(contentNodes, hide) {
	for (let i = 0; i < contentNodes.length; i++) {
		contentNodes[i].classList.add(hide);
		contentNodes[i].style.height = "0px";
	}
}

function changeAllTitleColors(titleNodes, bgColor, textColor) {
	for (let i = 0; i < titleNodes.length; i++) {
		titleNodes[i].style.background = bgColor;
		setTitleColor(titleNodes[i], textColor);
	}
}

// Change accordion content height on  browser resize, accordion will work just
// fine without following code
window.addEventListener("resize", function() {
	let contents = document.querySelectorAll(".eb-accordion-content-wrapper");

	for (let content of contents) {
		let topMargin = getOnlyNumbers(content.children[0].style.marginTop);
		let bottomMargin = getOnlyNumbers(content.children[0].style.marginBottom);

		if (content.style.height !== "0px") {
			content.style.height =
				content.children[0].clientHeight + topMargin + bottomMargin + "px";
		}
		content.dataset.height =
			content.children[0].clientHeight + topMargin + bottomMargin + "px";
	}

	// Removes string from number. Example: "10px" => 10
	function getOnlyNumbers(str) {
		const notNumbers = /\D/g;
		return parseInt(str.replace(notNumbers, ""));
	}
});
