
var object1 = {
	word: "bevo",
	wordArray:[],
	guessesLeft: 7,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false
};

var object2 = {
	word: "vinceyoung",
	wordArray: [],
	guessesLeft: 10,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false
};

var object3 = {
	word: "hookem",
	wordArray: [],
	guessesLeft: 7,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false
};

var object4 = {
	word: "thedrag",
	wordArray: [],
	guessesLeft: 7,
	gotWord: false,
	wrongLetters:[],
	blankAndLetters:[],
	failed: false
};

function pick(){
	number = Math.floor((Math.random() * 4) + 1);

	//pass object based on random number picked
	if (number == 1){
		playGame(object1)
	}
	else if (number == 2){
		playGame(object2)
	}
	else if (number == 3){
		playGame(object3)
	}
	else if (number == 4){
		playGame(object4)
	}
}

function update(object){

	//update word to guess
	document.getElementById("wordToGuess").innerHTML = object.blankAndLetters.join(" ");

	//upddate wrong guesses
	document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: " + object.wrongLetters.join(" "); 
	
	//update guesses left
	document.getElementById("guessesLeft").innerHTML = object.guessesLeft
}

function checkGuess(object, guess){

		//list of indexes of correct word placement
		var inList = [];

		//is the guess already in the wrong guessed word array
		var inArray = false;

		//check guess to every letter in the word
		for (var i = 0; i < object.wordArray.length; i++){

			// If guess matches the current index
			if (guess == object.wordArray[i]){
				inList.push(i);
			}
		}


		//check to see if word is already in the list of wrong letters
		for (var j=0; j < object.wrongLetters.length; j++){
			if (object.wrongLetters[j] == guess){
				inArray = true; 
				break;
			}
		}

		//if the guess is wrong and not already guessed
		if ((inList.length == 0) && (inArray==false)){

			object.wrongLetters.push(guess);
			object.guessesLeft-=1;
			if (object.guessesLeft == 0){
				object.failed = true;
			}
		}

		//if the word is right display at the correct index
		else{
			for (var i=0; i<inList.length;i++){
				object.blankAndLetters[inList[i]] = guess;
			}
		}


		//check to see if the word is guessed
		var checkWord = object.blankAndLetters.join("");
		if (checkWord == object.word){
			object.gotWord = true;
		}
}

function reset(object){

	//reset the display for a new word
	object.wordArray = object.word.split("");

	for(var i=0; i<object.wordArray.length; i++){
		object.blankAndLetters.push("_");
	}

	document.getElementById("wordToGuess").innerHTML = object.blankAndLetters.join(" ");
	document.getElementById("guessesLeft").innerHTML = object.guessesLeft;
	document.getElementById("wrongGuesses").innerHTML = "Wrong Guesses: ";
}

function playGame(object){
	var winCounter = 0;
	var lossCounter = 0;
	var played = false;
	var playAgain = false;
	var audioWin = new Audio('http://fightsongsringtone.com/files/Texas__Texas_Fight.mp3');
	var audioLoss = new Audio("../images/fail.mp3");

	reset(object);

	document.onkeyup = function(event){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (object.gotWord == false && object.failed == false){
			checkGuess(object,userGuess);
			update(object);
		}


		if (object.gotWord == true && played == false){
			alert("You Win!");
			winCounter += 1;
			document.getElementById("winCounter").innerHTML = winCounter
			played = true;
			audioWin.play();
			// var playAgain = alert("want to play again");
			// return false;
		}

		else if (object.failed == true && played == false){
			alert("You Lost!");
			lossCounter += 1;
			document.getElementById("lossCounter").innerHTML = lossCounter
			played = true;
			audioLoss.play();
		}
	}
}


pick()


