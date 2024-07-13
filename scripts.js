console.log("Yahtzee!");

// set up a play game button
// create a dropdown number of players option to shose from before hiting play game button
// one hit play game display each players score cardes as well as which players turn it is
// create a roll dice button to start your turn
// then create dice selector to chose which dice you want to reroll
// create a reroll button
// end turn after 3 rolls
// create a score selector let player choose which score they want to go with and add it to their score chart
// after game is finish add up all points and display the winner
// make page prity


// var dice1, dice2, dice3, dice4, dice5, dice6; 
var dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]
var allDice = [];
let numRolles = 0;

document.getElementById("rollDice").addEventListener("click", startTurn);

document.getElementById("rerollDice").addEventListener("click", rerollDice);

document.getElementById("allDice").addEventListener("click", selectDice);





let answersArray = document.querySelectorAll(".rolledDice");

answersArray.forEach(function(answer) {
  answer.addEventListener("click", function(e) {
  	// let answerText = e.currentTarget.child.id();
  	// let answerText = e.target.closest('.rolledDice').querySelector('p');
  	let answerText = e.target.parentNode.querySelector('p').id;
  	// let answerText = e.currentTarget.children;
  	console.log('this dice is: ' + answerText);


    // let answerText = e.currentTarget.children[e.currentTarget.children.length - 1];
    // let answerText = e.target.closest('.answerBox').querySelector('p');

    // if (answerText.id === "answerB") {
    //   console.log('hiya')
    // }
  });
});






function startTurn() {

	document.getElementById("rollDice").style.display = "none";
	document.getElementById("rerollDice").style.display = "block";
 	rollAllDice();
	numRolles++;
}


function selectDice() {
	// body...
	// selectedDice.getElementById();
	console.log("this clicked");
}

function rerollDice() {
	// body...
	rollAllDice();
	numRolles++;
	console.log("numRolles in while " + numRolles);

	if (numRolles == 3) {
		document.getElementById("rerollDice").style.display = "none";
	}

}



function rollAllDice() {

	for (let i = 0; i < dice.length; i++) {
		let y = dice[i];
		let x = rollDice();
		allDice.push(x);
		document.getElementById(y).innerHTML = x;
	  }
	  console.log("dice " + allDice);

}


function rollDice() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}








function playerOne() {
	// body...
	console.log("player 1")
	document.getElementById("numPlayers").style.display = "none";
	var playerP = document.createElement("p");
	playerP.innerHTML = "Player 1";
	document.getElementById("players").appendChild(playerP);

	
}





