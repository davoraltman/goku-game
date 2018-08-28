var getGoku = document.getElementById("goku");
var getObstacle = document.getElementById("obstacle");
var addMarginTop = 20;
var addMarginLeft = 20;

function gokuGo() {

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
		console.log(obstaclePosition.top, obstaclePosition.bottom, obstaclePosition.left, obstaclePosition.right);
}

// check if Goku and the rock collide
/* still needs to be worked on

var overlap = !(rect1.right < rect2.left ||
                rect1.left > rect2.right ||
                rect1.bottom < rect2.top ||
                rect1.top > rect2.bottom) */

//add timer
var i = 0;

function timer() {
	document.getElementById("timer").innerHTML = i;
	i++;
}

setInterval(function() {timer()}, 1000);
