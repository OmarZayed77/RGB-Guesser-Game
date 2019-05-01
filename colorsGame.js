var squares = document.getElementsByClassName("square");
var colors = [];
var squaresNum = 6;
var playing = document.querySelector("#playing");
var textDisplay = document.querySelector("#textDisplay");
var h1 = document.querySelector("h1");
var newGame = document.querySelector(".newGame")
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var pickedColor;

function show() {
	for(var i = 0; i < squaresNum; i++){
			squares[i].classList.remove("hide");
		}
}

function reset(){
	colors=[];
	textDisplay.textContent = "";
	newGame.textContent = "New Colors";
	h1.style.backgroundColor= "steelblue"; 
	for(var i =0; i< squaresNum; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		colors.push("rgb(" + r + ", " + g + ", " + b + ")");
	};
	for(var i =0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
}

function pick() {
	pickedColor = colors[Math.floor(Math.random() * squaresNum)];
	playing.textContent = pickedColor;
}


reset();
pick();



for(var i =0; i< squares.length; i++){
	squares[i].addEventListener("click",
		function() {
			if(this.style.backgroundColor === pickedColor){
				show();
				for(var x =0; x< squares.length; x++){
					squares[x].style.backgroundColor = pickedColor;
					h1.style.backgroundColor = pickedColor;	
					textDisplay.textContent = "You Got it, Bravo!"
					textDisplay.style.color = "green"
					newGame.textContent = "Play Again?"
				}
			}
			else
			{
				this.classList.add("hide");
				textDisplay.textContent = "Try Harder!!";
				textDisplay.style.color = "red"		
			}
		} 
	);	
}

newGame.addEventListener("click",
	function(){
		reset();
		show();	
		pick();
	}
);

easy.addEventListener("click",
	function(){
		squaresNum = 3;
		reset();
		pick();
		for(var x =0; x < squaresNum; x++){
			squares[x].classList.remove("hide");
		}
		for(var i =3; i < squares.length; i++){
			squares[i].classList.add("hide");
		}
		easy.classList.add("selected");
		hard.classList.remove("selected");
	}
);


hard.addEventListener("click",
	function(){
		squaresNum = 6;
		reset();
		pick();
		show();
		hard.classList.add("selected");
		easy.classList.remove("selected");
	}
);
