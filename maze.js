window.onload = main;

function main(){

	//Exercise 1
	let wall = document.getElementById("boundary1");
	wall.addEventListener("mouseover", function(){
		this.className += " youlose";
	});
	//==================================================================
}