var lastTime;
var deltaTime;
var wfaH;

var jiaHaoObj;


document.body.onload = main;

function main(){
	init();
	lastTime = Date.now();
	deitaTime = 0;
	loop();
}

function init(){
	wfaH = $("#we_folder_article").height();
	// console.log(wfaH);
	jiaHaoObj = new jiaHaoObj();
	jiaHaoObj.init();
}

function loop(){
	window.requestAnimFrame( loop );
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if ( deltaTime > 40 ) deltaTime = 40;

	jiaHaoObj.turnning();

}

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();