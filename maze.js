window.onload = main;

function main(){

	//Exercise 1
	let wall = document.getElementById("boundary1");
	wall.addEventListener("mouseover", function(){
		this.className = "boundary youlose";
	});
	//==================================================================
	//Exercise 2
	let boundaries = document.querySelectorAll(".boundary");
	let e_flag = -1;

	for(var i = 0; i < boundaries.length; i++){
		if(boundaries[i].className.indexOf("example") != -1){
			e_flag = i;
		}else{
			boundaries[i].addEventListener("mouseover", function(){
				for(var i = 0; i < boundaries.length; i++){
					if( i != e_flag){
						boundaries[i].className = "boundary youlose";
					}
				}
			});
		}
	}
	//=================================================================
	//Exercise 3
	var end = document.getElementById("end");

	end.addEventListener("mouseover", function(){
		if (document.getElementsByClassName("boundary youlose").length == 0){
			alert("You Win!!");
		}
	});
	//============================================================
}