
var object1 = {
	word: "hello",
	wordArray:[],
	guessesLeft: 10,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false

};

var object2 = {
	word: "other",
	wordArray: [],
	guessesLeft: 10,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false
};

function pick(){
	number = Math.floor((Math.random() * 2) + 1);
	// console.log(number)

	if (number == 1){
		playGame(object1)
	}
	else if (number == 2){
		playGame(object2)
	}
}

function update(object){
	//update word to guess
	//upddate wrong guesses 
	//update guesses left
	//update win counter 
	//update loss counter

}

function checkGuess(object, guess){

		// for each letter of the word
		for (var i = 0; i < object.wordArray.length; i++){

			// If guess was correct
			if (guess == object.wordArray[i]){
				object.blankAndLetters[i] == guess;
			}

			// If guess is incorrect
			else{
				var inArray = false;

				//check to see if word is already in the list of wrong letters
				for (var j=0; j < object.wrongLetters.length; j++){
					if (object.wrongLetters[j] == guess){
						inArray = true; 
						break;
					}
				}

				//if the word is not already in list of wrong words
				if (inArray == false){
					object.wrongLetters.push(guess);
					if (object.guessesLeft == 0){
						object.failed = true;
					}
					else{
						object.guessesLeft-=1;	
					}
				}
			}
		}


		//check to see if the word is guessed
		var checkWord = object.blankAndLetters.join("");
		if (checkWord == object.word){
			object.gotWord = true;
		}

		//update the script and game
		// update(object)
}

function playGame(object){
	object.wordArray = object.word.split("");
	console.log(object.wordArray);

	for(var i=1; i<object.wordArray.length; i++){
		object.blankAndLetters.push("_");
	}

	console.log(object.blankAndLetters);
	document.getElementById("wordToGuess").innerHTML = object.blankAndLetters.join(" ");
	document.getElementById("guessesLeft").innerHTML = object.guessesLeft;
}


pick()
