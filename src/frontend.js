document.addEventListener("DOMContentLoaded", function (event) {
	let accordions = document.querySelectorAll(
		".eb-accordion-container > .eb-accordion-inner"
	);

	// Return if there is no accoridion block
	if (!accordions) return;

	for (let x = 0; x < accordions.length; x++) {
		let accordion = accordions[x];
		let titleNodes = accordion.querySelectorAll(".eb-accordion-title-wrapper");
		let contentNodes = accordion.querySelectorAll(
			".eb-accordion-content-wrapper"
		);
		let hide = "eb-accordion-hidden";

		//  add a className after the domcontent has been loaded
		accordion.classList.add("eb_accdn_loaded");

		// Add data-height, transition timing function, height css attribute to all content
		for (let i = 0; i < contentNodes.length; i++) {
			contentNodes[i].dataset.height = contentNodes[i].clientHeight + "px";
		}

		for (let i = 0; i < contentNodes.length; i++) {
			contentNodes[i].style.height = "0px";
		}

		const testEl = document.createElement("span");

		// Get all data attributes
		let accordionType = accordion.getAttribute("data-accordion-type");
		let tabIcon = accordion.getAttribute("data-tab-icon") || "_ _";
		let expandedIcon = accordion.getAttribute("data-expanded-icon") || "_ _";

		// Seperate fontawesome 5 prefix and postfix classes.
		let faTabPrefix = tabIcon.split(" ")[0];
		let faTabPostfix = tabIcon.split(" ")[1];
		let faExpandPrefix = expandedIcon.split(" ")[0];
		let faExpandPostfix = expandedIcon.split(" ")[1];

		function changeIcon(clickedTab) {
			// Replace tab icon with expanded or vice versa
			let iconNode = clickedTab.querySelector(".eb-accordion-icon") || testEl;
			let isExpanded = iconNode.classList.contains(faExpandPostfix);

			if (isExpanded) {
				iconNode.classList.remove(faExpandPrefix, faExpandPostfix);
				iconNode.classList.add(faTabPrefix, faTabPostfix);
			} else {
				iconNode.classList.remove(faTabPrefix, faTabPostfix);
				iconNode.classList.add(faExpandPrefix, faExpandPostfix);
			}
		}

		function changeAllExpandIcons(accordion) {
			let iconNodes = accordion.querySelectorAll(".eb-accordion-icon");

			// Replace expand icon with tab icon & change color
			for (let i = 0; i < iconNodes.length; i++) {
				if (iconNodes[i].classList.contains(faExpandPostfix)) {
					iconNodes[i].classList.remove(faExpandPrefix, faExpandPostfix);
					iconNodes[i].classList.add(faTabPrefix, faTabPostfix);
				}
			}
		}

		// Hide all accordion content by default
		hideContents(contentNodes, hide);

		// Take action based on accordion type
		accordionType === "toggle"
			? setToggleAction(titleNodes)
			: setAccordionAction(titleNodes);

		// Toggle action here
		function setToggleAction(titleNodes) {
			for (let i = 0; i < titleNodes.length; i++) {
				let selectedTab = titleNodes[i];

				(function (selectedTab) {
					selectedTab.addEventListener("click", onToggleTabClick);
				})(selectedTab);
			}
		}

		function onToggleTabClick() {
			let clickedTab = this;
			let contentNode = clickedTab.nextElementSibling;
			let contentHeight = contentNode.getAttribute("data-height");
			let alreadyOpen = !contentNode.parentElement.classList.contains(hide);

			// Change content height to 0, remove active color if it's open
			if (alreadyOpen) {
				contentNode.style.height = "0px";
			} else {
				contentNode.style.height = contentHeight;
			}

			contentNode.parentElement.classList.toggle(hide);

			// Change tab icon
			changeIcon(clickedTab);
		}

		// Accordion action here
		function setAccordionAction(titleNodes) {
			for (let i = 0; i < titleNodes.length; i++) {
				let selectedTab = titleNodes[i];

				(function (selectedTab) {
					selectedTab.addEventListener("click", onAccordionTabClick);
				})(selectedTab);
			}
		}

		function onAccordionTabClick() {
			let clickedTab = this;
			let contentNode = this.nextElementSibling;
			let contentHeight = contentNode.getAttribute("data-height");
			let alreadyOpen = !contentNode.parentElement.classList.contains(hide);

			// Hide all contents, change expand icon to tab icon then
			// toggle clicked accordion
			// If accordion was already open, hide it
			hideAccordionContents(contentNodes, hide);
			changeAllExpandIcons(accordion);
			contentNode.parentElement.classList.toggle(hide);

			if (alreadyOpen) {
				// Hide content and change background color, icon
				contentNode.parentElement.classList.add(hide);
				contentNode.style.height = "0px";
				changeIcon(clickedTab);
			} else {
				contentNode.style.height = contentHeight;
			}

			//Change tab icon
			changeIcon(clickedTab);
		}
	}
});

function hideContents(contentNodes, hide) {
	for (let i = 0; i < contentNodes.length; i++) {
		contentNodes[i].parentElement.classList.add(hide);
	}
}

function hideAccordionContents(contentNodes, hide) {
	for (let i = 0; i < contentNodes.length; i++) {
		contentNodes[i].parentElement.classList.add(hide);
		contentNodes[i].style.height = "0px";
	}
}
