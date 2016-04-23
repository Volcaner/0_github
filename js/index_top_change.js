var WIDTH = document.body.clientWidth;
window.onload = function(){
	document.getElementById('index_logo').style.marginLeft = ( WIDTH/2 - 141 ) + "px";
	document.getElementById('smallCircle3').style.marginLeft = ( WIDTH/2 - 2.5 + 50 ) + "px";
	document.getElementById('smallCircle2').style.marginLeft = ( WIDTH/2 - 2.5 ) + "px";
	document.getElementById('smallCircle1').style.marginLeft = ( WIDTH/2 - 2.5 - 50 ) + "px";

	document.getElementById('smallCircle1').style.background = "#ccc";
	document.getElementById('smallCircle2').style.background = "";
	document.getElementById('smallCircle3').style.background = "";
	document.getElementById('index_top_pic01').style.transitionDelay = "0s";
	document.getElementById('index_top_pic01').style.transitionDuration = "0.5s";
	document.getElementById('index_top_pic01').style.transitionProperty = "all";
	document.getElementById('index_top_pic01').style.transitionTimingFunction = "ease";
	document.getElementById('index_top_pic01').style.opacity = "1";
	document.getElementById('index_top_pic02').style.opacity = "0";
	document.getElementById('index_top_pic03').style.opacity = "0";
	document.getElementById('smallCircle1').onmouseover = function(){
		document.getElementById('smallCircle1').style.background = "#ccc";
		document.getElementById('smallCircle2').style.background = "";
		document.getElementById('smallCircle3').style.background = "";
		document.getElementById('index_top_pic01').style.transitionDelay = "0s";
		document.getElementById('index_top_pic01').style.transitionDuration = "0.5s";
		document.getElementById('index_top_pic01').style.transitionProperty = "all";
		document.getElementById('index_top_pic01').style.transitionTimingFunction = "ease";
		document.getElementById('index_top_pic01').style.opacity = "1";
		document.getElementById('index_top_pic02').style.opacity = "0";
		document.getElementById('index_top_pic03').style.opacity = "0";
	}

	document.getElementById('smallCircle2').onmouseover = function(){
		document.getElementById('smallCircle2').style.background = "#ccc";
		document.getElementById('smallCircle1').style.background = "";
		document.getElementById('smallCircle3').style.background = "";
		document.getElementById('index_top_pic02').style.transitionDelay = "0s";
		document.getElementById('index_top_pic02').style.transitionDuration = "0.5s";
		document.getElementById('index_top_pic02').style.transitionProperty = "all";
		document.getElementById('index_top_pic02').style.transitionTimingFunction = "ease";
		document.getElementById('index_top_pic02').style.opacity = "1";
		document.getElementById('index_top_pic01').style.opacity = "0";
		document.getElementById('index_top_pic03').style.opacity = "0";

	}

	document.getElementById('smallCircle3').onmouseover = function(){
		document.getElementById('smallCircle3').style.background = "#ccc";
		document.getElementById('smallCircle2').style.background = "";
		document.getElementById('smallCircle1').style.background = "";
		document.getElementById('index_top_pic03').style.transitionDelay = "0s";
		document.getElementById('index_top_pic03').style.transitionDuration = "0.5s";
		document.getElementById('index_top_pic03').style.transitionProperty = "all";
		document.getElementById('index_top_pic03').style.transitionTimingFunction = "ease";
		document.getElementById('index_top_pic03').style.opacity = "1";
		document.getElementById('index_top_pic02').style.opacity = "0";
		document.getElementById('index_top_pic01').style.opacity = "0";

	}
}