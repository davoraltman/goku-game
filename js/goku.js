var getGoku = document.getElementById("goku");
var getObstacle = document.getElementById("obstacle");
var addMarginTop = 20;
var addMarginLeft = 20;

function gokuGoDown() {

	//check which key is pressed
	var x = event.keyCode;
		
	//only move Goku if keyboard arrows are used
	
	if (x == 40) {

		getGoku.style.marginTop = addMarginTop + "px";
		addMarginTop += 20;

	} else if (x == 39) {
		
		getGoku.style.marginLeft = addMarginLeft + "px";
		addMarginLeft += 20;	

	} else if (x == 38) {

		getGoku.style.marginTop = addMarginTop + "px";
		addMarginTop -= 20;

	} else if (x == 37) {

		getGoku.style.marginLeft = addMarginLeft + "px";
		addMarginLeft -= 20;

	}

//get Goku's position		
	var gokuPosition = getGoku.getBoundingClientRect();
	console.log(gokuPosition.top, gokuPosition.bottom, gokuPosition.left, gokuPosition.right);

}


//make the rock float
function floatRock() {

		setTimeout(function() {
		getObstacle.style.marginRight = 110 + "%";
		}, 500 );

		//log the initial position of the rock
		var obstaclePosition = getObstacle.getBoundingClientRect();
		console.log(obstaclePosition);
}

//add timer
var i = 0;

function timer() {
	document.getElementById("timer").innerHTML = i;
	i++;
}

setInterval(function() {timer()}, 1000);