// controls –––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var imageCount = 206;

var title = "ART HISTORY"

// var pauseKey = 32;

var initTimeVarMin = 25;
var initTimeVarMax = 25;

var demoModeOn = true;

var demoTimeVarMin = 4000;
var demoTimeVarMax = 8000;

var imageWidthVar = 15; // percentage
var imageWidthMin = 20; // percentage
var marginTopVar = 10; // percentage
var marginTopMin = 5; // percentage
var marginLeftVar = 45; // percentage

var transitionTime = 3 // seconds

var holdVibrate = true;
var holdWidth = 30; // percentage
var holdMarginTopMin = 1.5 // percentage

var opacityVariation = true;
var staticOpacityVar = .5;



// arrays –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––



// variables ––––––––––––––––––––––––––––––––––––––––––––––––––––––––

var primaryImage = document.getElementById("image");
var pauseVar = false;


// setup commands –––––––––––––––––––––––––––––––––––––––––––––––––––

document.getElementById("title").innerHTML = title;


// commands –––––––––––––––––––––––––––––––––––––––––––––––––––––––––

init();
if (demoModeOn === true) {
	demoMode();
};


// listeners ––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// not working ??

window.onkeydown = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 32) {
		pauseVar = true;
		document.getElementById('image').style.transition = transitionTime + "s";
		document.getElementById('image').style.opacity = 1;
		document.getElementById('image').style.marginTop = Math.random() * holdMarginTopMin + "%";
		if (holdVibrate === true){
			document.getElementById('image').style.width = (Math.random() * 40) + 20 + "%";
		} else {
			document.getElementById('image').style.width = holdWidth + "%";
		};
	};
};

window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 32) {
		pauseVar = false;
		document.getElementById('image').style.transition = "0s";
		init();
	} else if (key == 13) {
       var elem = document.getElementById("body");
	   req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
	   req.call(elem);	
   } else if (key == 40){
		if(initTimeVarMin <= 2000){
			initTimeVarMin *= 2;
			initTimeVarMax *= 2;
		} else {
			initTimeVarMin = 2000;
			initTimeVarMax = 2000;
		};
   } else if (key == 38){
		// alert("pressed");
		if(initTimeVarMin >= 25){
			initTimeVarMin /= 2;
			initTimeVarMax /= 2;
		} else {
			initTimeVarMin = 25;
			initTimeVarMax = 25;
		};
   } else if (key == 37){
		if(staticOpacityVar <= 1){
			staticOpacityVar += .1;
		} else {
			staticOpacityVar = 1;
		};
   } else if (key == 39){
		if(staticOpacityVar >= 0){
			staticOpacityVar -= .1;
		} else {
			staticOpacityVar = 0;
		};
   } 
   // else if (key == 16){
   // 		alert(demoModeOn);
   // 		if (demoModeOn = false) {
   // 			demoModeOn = true;
   // 		} else {
   // 			demoModeOn = false;
   // 		};
   // }
};

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
	setTimeout(function(){
		pauseVar = true;
		document.getElementById('image').style.transition = transitionTime + "s";
		document.getElementById('image').style.opacity = 1;
		if (holdVibrate === true){
			document.getElementById('image').style.width = (Math.random() * 40) + 20 + "%";
		} else {
			document.getElementById('image').style.width = holdWidth + "%";
		}
		demoMode();
	}, demoRandomTime());
	setTimeout(function(){
		pauseVar = false;
		document.getElementById('image').style.transition = "0s";
		document.getElementById('image').style.opacity = staticOpacityVar;
		init();
	}, 2000);
};

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
	document.getElementById('image').style.opacity = staticOpacityVar;	
	// if (opacityVariation === true) {
	// 	document.getElementById('image').style.opacity = (Math.random() * .5) + .25;	
	// };
};