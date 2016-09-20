//define margins for Goku's movement
var addMarginTop = 20;
var addMarginLeft = 20;

	
function gokuGoDown() {

	//check which key is pressed
	var x = event.keyCode;
		
	//only move Goku if keyboard arrows are used
	
	if (x == 40) {

		document.getElementById("goku").style.marginTop = addMarginTop + "px";
		addMarginTop += 20;

	} else if (x == 39) {
		
		document.getElementById("goku").style.marginLeft = addMarginLeft + "px";
		addMarginLeft += 20;	

	} else if (x == 38) {

		document.getElementById("goku").style.marginTop = addMarginTop + "px";
		addMarginTop -= 20;

	} else if (x == 37) {

		document.getElementById("goku").style.marginLeft = addMarginLeft + "px";
		addMarginLeft -= 20;

	}

//get Goku's position		
	var gokuPosition = document.getElementById("goku").getBoundingClientRect();
	console.log(gokuPosition.top, gokuPosition.bottom, gokuPosition.left, gokuPosition.right);

}

//make the rock float
function floatRock() {

		setTimeout(function() {
		document.getElementById("obstacle").style.marginRight = 100 + "%";
		}, 500 );

		setTimeout(function() {
		document.getElementById("obstacle").style.opacity = "0";
		}, 6000 );
}

























