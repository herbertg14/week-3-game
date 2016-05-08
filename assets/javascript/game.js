
var object1 = {
	word: "testing",
	guesses: 10,
	gotIt: false,
	wrong:[]

};

var object2 = {
	word: "other",
	guesses: 5,
	gotIt: false,
	wrong:[]
}

function pick(){
	// number = Math.floor(1 + Math.random() * 5)
	number = Math.floor(1 + Math.random() * 2)
	// console.log(number)

	if (number == 1){
		playGame(object1)
	}
	else if (number == 2){
		playGame(object2)
	}
}


function playGame(object){
	// console.log("----------");
	// console.log(object);
	// console.log(object.word);
	document.write("Press any key to get started!<br>");
	document.write("current word has " + object.word.length + " letters");
	dou

	word = object.word
	
	while ((object.guesses > 0) && (object.gotIt == false)){

		document.onkeyup = function(event){
			var letter = String.fromCharCode(event.keyCode).toLowerCase();
			
			for (){}
				// if (letter == 'd'){
				// 	alert(object.word)
				// }
		}

		// console.log(object.guesses);
		object.guesses--; 



	}

}


// document.onkeyup = function(event){
// 	var letter = String.fromCharCode(event.keyCode).toLowerCase();

// 	if (letter == 'd'){
// 		alert("worked")
// 	}
// }

pick()
