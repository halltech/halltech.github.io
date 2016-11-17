// CAROUSEL 
// custom html carousels




var carousels = document.querySelectorAll("div.carousel .item");



// runs once DOM is ready
document.addEventListener("DOMContentLoaded", run, false);
// runs whenever the page is resized
window.addEventListener("resize", setup); 


var WIDTH = window.innerWidth;

function setup () {
	for (var i=0; i<carousels.length; i++){
		// console.log(WIDTH)
		carousels[i].style.left = (WIDTH * i).toString() + "px";
		// specialDOM[num].style[property] = (color0).toString();
	}
}


var intervalID = window.setInterval(callback, 6000);

var intervalCounter = 0;

function callback () {
	for (var i=0; i<carousels.length; i++) {
		var index = carousels[i].style.left;
		var index = parseInt(index, 10);
		carousels[i].style.left = (index + WIDTH).toString() + "px";
		console.log("i: " + i + " index: " + index)
		
		if(index/2 == WIDTH) {
			carousels[i].style.left = (0).toString() + "px";
		}

		if (carousels[i].style.left != "0px") {
			carousels[i].style.opacity = "0.3";
			carousels[i].style.transform = "scale(.8)";
		} else {
			carousels[i].style.opacity = "1.0";
			carousels[i].style.transform = "scale(1.0)";
		}
	}
	intervalCounter++;
}



function run () {
	setup()
	// callback();
	
}