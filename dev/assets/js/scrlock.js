// SCROLL LOCK 
// css scrolling animation library

var isScrolling = false;

var specialItems = [
	{
		item: "body",
		color0: "#000",
		color1: "#FFF"
	},
	{
		item: "header#left #title",
		color0: "#FFF",
		color1: "#000"
	},
	{
		item: "section#splash",
		color0: "#000",
		color1: "#FFF"
	},
	{
		item: "div.carousel-mask",
		color0: "#000",
		color1: "#FFF"
	},
	{
		item: "section#content",
		color0: "#000",
		color1: "#FFF"
	}
]



window.addEventListener("scroll", throttleScroll, false);

function throttleScroll (e) {
	if (isScrolling == false) {
		window.requestAnimationFrame(function () {
			scrolling(e);
			isScrolling = false;
		});
	}
	isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("body .scrlock");

// node list of all scroll lock items
var specialDOM = addSpecialItems(specialItems);

console.log(specialDOM)


function addSpecialItems (list) {
	var index = "";
	for (var i=0; i<list.length; i++) {
		index = index + (list[i].item).toString();

		if (i < specialItems.length - 1) {
			index = index + ",";
		}
	}

	var list = document.querySelectorAll(index)
	return list
}



function scrolling (e) {

	if (isPartiallyVisible(specialDOM[4])) {
		toggleOn(0, "background");
		toggleOn(1, "color");
		toggleOn(3, "border-color");
	} else {
		// header
		// toggleOff(0, "color");
		// splash
		toggleOff(0, "background");
		toggleOff(1, "color");
		toggleOff(3, "border-color");
	}
	
	
	for (var i = 0; i < listItems.length; i++) {
		var listItem = listItems[i];
		if (isPartiallyVisible(listItem)) {
			listItem.classList.add("active");
		} 
		if (isFullyVisible(listItem)) {

		} else {
			listItem.classList.remove("active");
		}
	}
}


function toggleOn(num, property) {
	// console.log("ON");
	var color1 = specialItems[num].color1;
	specialDOM[num].style[property] = (color1).toString();
}

function toggleOff(num, property) {
	// console.log("OFF");
	var color0 = specialItems[num].color0;
	specialDOM[num].style[property] = (color0).toString();
}


function isPartiallyVisible (el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;
	var height = elementBoundary.height;

	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible (el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;

	return ((top >= 0) && (bottom <= window.innerHeight));
}