var jiaHaoObj = function(){
	var cur_wfaH;
	var angle;
	this.check = [];
	this.liNub;
}
jiaHaoObj.prototype.init = function(){
	cur_wfaH = 0;
	angle = 0;
	this.liNub = $("#we_folder_article").find("li").length/2;
	console.log(this.liNub)
	for( var i = 0; i < this.liNub; i++ ){
		this.check[i] = -1;
	}

	for(var i = 0; i < this.liNub; i++) {
		// var check = [];
		// check[i] = 1;
		var that = this;
	    (function(e) {
	       	$( "li#article01_0" + e ).click( function(){
	       		that.check[e] = -that.check[e]; 
	       		console.log(that.check[e]);
	       		if ( that.check[e] == 1 ) {
	       			$( ".article02" ).eq( e ).slideDown( "slow" );
	       		}
	       		if( that.check[e] == -1 ){
	       			$( ".article02" ).eq( e ).slideUp( "slow" );
	       		}

	       		for( var j = 0; j < 20; j++ ){
	       			(function(f){
	       				$( "#article02_0" + e ).find("a").eq(f).click(function(){
							$("#folder_body_box").attr("src","private/article02_0" + e + "_0" + f + ".html" );
							console.log(e);
						})
	       			})(j);
	       		}

			})
	    })(i);
	}
}
jiaHaoObj.prototype.turnning = function(){
	cur_wfaH = $("#we_folder_article").height();
	for(var i = 0; i < this.liNub; i++) {
		if( cur_wfaH > wfaH ){
			if(angle < 135){
				angle += deltaTime*0.1;
			}
			document.getElementById("ap_jiahao").style.transform = "rotate(" + angle + "deg)";
		}
		else{
			if(angle > 0){
				angle -= deltaTime*0.1;
			}
			document.getElementById("ap_jiahao").style.transform = "rotate(" + angle + "deg)";
		}
	}
}



// cur_wfaH = $("#we_folder_article").height();
// 			console.log(cur_wfaH + "  " + wfaH);
// 			if( cur_wfaH > wfaH ){
// 				angle += deitaTime * 0.05;
// 				console.log(deltaTime + "  " + angle);
// 				if( angle < 135 ){
// 					document.getElementById("ap_jiahao").style.transform = "rotate(" + angle + "deg)";
// 				}
// 			}


// for( var i = 0; i < 10; i++ ){

// 	with({b:i})

// 	$( "li#article01_0" + b ).click( function(){
// 		console.log(this.check)
// 		this.check = -this.check;
// 		if ( this.check == 1 ) {
// 			$( ".article02" ).eq( b ).slideDown( "slow" );

// 		}
// 		else{
// 			$( ".article02" ).eq( b ).slideUp( "slow" );
// 		}
		
// 	})
// }