var star = document.getElementById('star');
//grab the star id//
star.addEventListener("click", colorChange);
//make the star listen for the click//
var isClicked = false;
//start the function as false//
console.log(isClicked);
function colorChange(){
  isClicked = true;
  //define as if clicked true//
  checkMouse();
  //check with the mouse to confirm//
  star.style.backgroundColor = "yellow";
  //add style if true//
  console.log(isClicked);
}
function checkMouse(){
  if(isClicked == true){
    star.style.border = "solid black 10px";
  }
}
var rtop = document.getElementById('rtop');
//grab the element//
rtop.addEventListener("click", animation);
//make the element wait for click//
var isClicked = false;
//if there is no click there is no animation//
console.log(isClicked);
//define the function and run the animation if the mouse is clicked//
function animation(){
  isClicked = true;
  checkMouse();
  rtop.classList.add("animation");
 console.log(isClicked);
}
//define the checkMouse function//
function checkMouse(){
  if(isClicked == true){
    rtop.classList.add("animation");
  }
}
//get the element//
var box = document.getElementById('box');
//make the element wait for the mouseover//
box.addEventListener("mouseover", animation2);
//if the mouseover doesnt happen do not run animation2//
var isClicked = false;
console.log(isClicked);
function animation2(){
  isClicked = true;
  checkClick();
  box.classList.add("animation2");
  console.log(isClicked);
}
function checkClick(){
  if(isClicked == true){
    box.classList.add("animation2");
  }
}
//call the fucntion//
function changeStarBG(){
	var randomId = Math.floor(Math.random()* 9);
  //math.random produces random selection
	var randomStar = document.getElementById(randomId);
  //grab a random Id//
	randomStar.classList.add('animation3');
	// add the animation3//
	console.log(randomStar);
}
//call the function//
function createStars(){
  //define the forloop//
	for (i = 0; i < 100; i++) {
    //create the div//
		var star = document.createElement('div');
    //place the stars//
		star.style.left = Math.random() * 1500 + "px";
		star.style.top = Math.random() * 800 + "px";
    //add the star class//
		star.classList.add('stars');
    //define i//
		star.id = i;
		// console.log("the star id is:", star.id);
    //place into container//
		var container = document.getElementById('container');
		container.appendChild(star);
	}
}
//call the function//
createStars();
// changeStarBG();
setInterval(changeStarBG, 500);
