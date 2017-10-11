window.onload = main;

function main(){

	//Exercise 1
	let wall = document.getElementById("boundary1");
	wall.addEventListener("mouseover", function(){
		this.className += " youlose";
	});
	//==================================================================
	//Exercise 2
	let boundaries = document.querySelectorAll(".boundary");
	let e_flag = -1;

	for(var i = 0; i < boundaries.length; i++){
		if(boundaries[i].className.indexOf("example") != -1){
			boundaries[i].addEventListener("mouseover", function(){
				this.className = "boundary example youlose"
			})
			e_flag = i;
		}else{
			boundaries[i].addEventListener("mouseenter", function(){
				for(var i = 0; i < boundaries.length; i++){
					if( i != e_flag){
						boundaries[i].className = "boundary youlose";
					}
				}
			});
		}
	}
	//=================================================================

}