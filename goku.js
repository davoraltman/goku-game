var GoGoku = 0;
var addMarginTop = 20;
var addMarginLeft = 20;

	
function gokuGoDown() {

	//check which key is pressed
	var x = event.keyCode;
		
	//only move goku if keyboard arrows are used
	
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

	return GoGoku;

}

//make the rock float

function floatRock() {

		setTimeout(function() {
		document.getElementById("obstacle").style.marginRight = 110 + "%";
		}, 500 );

}



















