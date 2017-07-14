"use strict";

function rectWord(word, width, height) {
	//Create the array
	let wordArr = new Array(word.length * width - (width - 1));
	for(let i = 0; i < wordArr.length; i++) {
		wordArr[i] = new Array(word.length * height - (height - 1));
		wordArr[i].fill(" ");
	}

	

	//Insert first letters
	for(let i = 0; i < wordArr.length; i+=(word.length-1)) {
		for(let j = 0; j < wordArr[i].length; j+=(word.length-1)) {
			if((i+j) % 2 == 0) {
				wordArr[i][j] = word.charAt(0);
				//Up
				if(i > 0) { //if not on the left hand side, input to the left
					for(let k = 1; k < word.length; k++) {
						wordArr[i-k][j] = word.charAt(k);
					}
				}
				//Down
				if(i < wordArr.length-1) { //if not on the right hand side, input to the right
					for(let k = 1; k < word.length; k++) {
						wordArr[i+k][j] = word.charAt(k);
					}
				}
				//Left
				if(j > 0) { //if not on the left hand side, input to the left
					for(let k = 1; k < word.length; k++) {
						wordArr[i][j-k] = word.charAt(k);
					}
				}
				//Right
				if(j < wordArr[i].length-1) { //if not on the right hand side, input to the right
					for(let k = 1; k < word.length; k++) {
						wordArr[i][j+k] = word.charAt(k);
					}
				}
			}
		}
	}

	outputRect(wordArr);
}

function outputRect(wordArr) {
	console.log(wordArr);
}

rectWord("DEFIE", 2, 2);

/*
REKTKER
E  K  E
K  E  K
TKEREKT
K  E  K
E  K  E
REKTKER
*/