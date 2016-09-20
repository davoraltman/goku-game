var GoGoku = 0;
var addMarginTop = 20;
var addMarginLeft = 20;

	
function gokuGoDown() {

	//check which key is pressed
	var x = event.keyCode;
		
	//only move Goku if keyboard arrows are used
	
	if (x == 40) {

		GoGoku = document.getElementById("goku").style.marginTop = addMarginTop + "px";
		addMarginTop += 20;

	} else if (x == 39) {
		
		GoGoku = document.getElementById("goku").style.marginLeft = addMarginLeft + "px";
		addMarginLeft += 20;	

	} else if (x == 38) {

		GoGoku = document.getElementById("goku").style.marginTop = addMarginTop + "px";
		addMarginTop -= 20;

	} else if (x == 37) {

		GoGoku = document.getElementById("goku").style.marginLeft = addMarginLeft + "px";
		addMarginLeft -= 20;

	}

//get Goku's position		
	var gokuPosition = document.getElementById("goku").getBoundingClientRect();
	console.log(gokuPosition.top, gokuPosition.bottom, gokuPosition.left, gokuPosition.right);

	return GoGoku;

}

//make the rock float
function floatRock() {

		setTimeout(function() {
		document.getElementById("obstacle").style.marginRight = 100 + "%";
		}, 500 );

		setTimeout(function() {
		document.getElementById("obstacle").style.opacity = "0";
		}, 6000 );

		var rockPosition = document.getElementById("obstacle").getBoundingClientRect();
		console.log(rockPosition.top, rockPosition.bottom, rockPosition.left, rockPosition.right);

	return GoGoku;
}

























