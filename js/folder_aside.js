$(document).ready(function(){
	var l = $(".folder_aside_box").find("a").length;
	for( var i = 0; i < l; i++ ){
		with({b:i})
		$(".folder_aside_box").find("a").eq(b).prepend( b + "." );
	}
})