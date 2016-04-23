// $(document).ready(function(){
		// 	$("#areas_04_wesp").click(function(){
		// 		$("#areas_04_img").slideToggle("slow");
		// 	});
		// });
		// $(document).ready(function(){
		// 	$("#areas_03_wesp").click(function(){
		// 		$("#areas_03_img").slideToggle("slow");
		// 	});
		// });
		// $(document).ready(function(){
		// 	$("#areas_02_wesp").click(function(){
		// 		$("#areas_02_img").slideToggle("slow");
		// 	});
		// });
		// $(document).ready(function(){
		// 	$("#areas_01_ud").click(function(){
		// 		$("#areas_01_img").slideToggle("slow");
		// 	});
		// });

		$(document).ready(function(){
			k = 1;
			for(i=1;i<5;i++){
				with({b:i})
				$("#areas_0" + b + "_ud").click(function(){
					k = k*(-1);
					// console.log($("#areas_0" + b + "_ud").attr('src'));
					$("#areas_0" + b + "_img").slideToggle("slow");
					$("#areas_0" + b + "_detail").slideToggle("slow");
					// $("#areas_0" + b + "_detail").text("173px");
					// if(k==-1 && $("#areas_0" + b + "_img").height()!=1){
					// 	$("#areas_0" + b + "_ud").attr("src","images/areas_" + -1 + ".png");
					// }
					// else if(k==1 && $("#areas_0" + b + "_img").height()!=1){
					// 	$("#areas_0" + b + "_ud").attr("src","images/areas_" + -1 + ".png");
					// }
					// else if(k==1 && $("#areas_0" + b + "_img").height()==1){
					// 	$("#areas_0" + b + "_ud").attr("src","images/areas_" + 1 + ".png");
					// }
					// else{
					// 	$("#areas_0" + b + "_ud").attr("src","images/areas_" + 1 + ".png");
					// }
					if($("#areas_0" + b + "_ud").attr('src')=="images/areas_-1.png"){
						$("#areas_0" + b + "_ud").attr("src","images/areas_1.png");
					}
					else {
						$("#areas_0" + b + "_ud").attr("src","images/areas_-1.png");
					}
					
					// console.log(k);
					// console.log($("#areas_04_img").height());
				});
			}
		});