// controls –––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var imageCount = 125;

var title = "ART HISTORY"

var pauseKey = 32;

var initTimeVarMin = 2500;
var initTimeVarMax = 2500;

var demoModeOn = false;

var demoTimeVarMin = 2500;
var demoTimeVarMax = 2500;

var imageWidthVar = 15; // percentage
var imageWidthMin = 20; // percentage
var marginTopVar = 10; // percentage
var marginTopMin = 5; // percentage
var marginLeftVar = 45; // percentage

var transitionTime = 3 // seconds

var holdVibrate = false;
var holdWidth = 30; // percentage
var holdMarginTopMin = 1.5 // percentage

var opacityVariation = false;



// arrays –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



// variables ––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var primaryImage = document.getElementById("image");
var pauseVar = false;


// setup commands –––––––––––––––––––––––––––––––––––––––––––––––––––

document.getElementById("title").innerHTML = title;


// commands –––––––––––––––––––––––––––––––––––––––––––––––––––––––––

init();


// listeners ––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// not working ??

// window.onkeydown = function(e) {
// 	var key = e.keyCode ? e.keyCode : e.which;
// 	if (key == pauseKey) {
// 		if (key == 16 && initTimeVarMin <= 10000){
// 			alert("shift pressed!");
// 			initTimeVarMin += 250;
// 			initTimeVarMax += 250;
// 		} else if (key == 16 && initTimeVarMin > 10000);
// 			initTimeVarMin = 250;
// 			initTimeVarMax = 250;
// 	};
// };

window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == pauseKey) {
		pauseVar = true;
		document.getElementById('image').style.transition = transitionTime + "s";
		document.getElementById('image').style.opacity = 1;
		document.getElementById('image').style.marginTop = Math.random() * holdMarginTopMin + "%";
		if (holdVibrate === true){
			document.getElementById('image').style.width = (Math.random() * 40) + 20 + "%";
		} else {
			document.getElementById('image').style.width = holdWidth + "%";
		}
	};
};

// these two are almost the same - combine?

window.onmousedown = function() {
	pauseVar = true;
	document.getElementById('image').style.transition = transitionTime + "s";
	document.getElementById('image').style.opacity += 1;
	document.getElementById('image').style.marginTop = Math.random() * holdMarginTopMin + "%";
	if (holdVibrate === true){
		document.getElementById('image').style.width = (Math.random() * 40) + 20 + "%";
	} else {
		document.getElementById('image').style.width = holdWidth + "%";
	}
}

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == pauseKey) {
		pauseVar = false;
		document.getElementById('image').style.transition = "0s";
		init();
	} else if (key == 13) {
       var elem = document.getElementById("body");
	   req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
	   req.call(elem);	
   };
};

// these two are almost the same - combine?

window.onmouseup = function() {
	pauseVar = false;
	document.getElementById('image').style.transition = "0s";
	init();
};


// time functions –––––––––––––––––––––––––––––––––––––––––––––––––––

function initRandomTime(){
	var x = (Math.random() * (initTimeVarMax - initTimeVarMin)) + initTimeVarMin;
	return x;
}

function demoRandomTime(){
	var x = (Math.random() * (demoTimeVarMax - demoTimeVarMin)) + demoTimeVarMin;
	return x;
}

// functions ––––––––––––––––––––––––––––––––––––––––––––––––––––––––

function init(){
	if(pauseVar === false){
		setTimeout(function(){
			randomImage();
			init();
		}, initRandomTime());
	};
};

// demo mode not working - sticking on?

function demoMode(){
	setInterval(function(){
		pauseVar = true;
		document.getElementById('image').style.transition = transitionTime + "s";
		document.getElementById('image').style.opacity = 1;
		if (holdVibrate === true){
			document.getElementById('image').style.width = (Math.random() * 40) + 20 + "%";
		} else {
			document.getElementById('image').style.width = holdWidth + "%";
		}
	}, demoRandomTime());
}

function randomImage(){
	var x = Math.round(Math.random() * imageCount);
	var width = Math.random() * imageWidthVar;
	var marginTop = (Math.random() * marginTopVar) + marginTopMin;
	var marginLeft = Math.random() * marginLeftVar;
	var y = Math.round(Math.random());
	var marginPlusMinus = "";
	if(y === 1){
		marginPlusMinus = "-";
	};
	document.getElementById('image').src = ("images/" + x + ".jpg");
	document.getElementById('image').style.width = width + imageWidthMin + "%";
	document.getElementById('image').style.marginTop = marginTop + "%";
	document.getElementById('image').style.marginLeft = marginPlusMinus + marginLeft + "%";
	if (opacityVariation === true) {
		document.getElementById('image').style.opacity = (Math.random() * .5) + .25;	
	};
};