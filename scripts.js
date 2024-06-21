console.log("Yahtzee!");

// set up players object
// set up game object
// create dice and dice randomizer


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


var dice1, dice2, dice3, dice4, dice5, dice6; 


document.getElementById("rollDice").addEventListener("click", rollAllDice);

document.getElementById("playerOne").addEventListener("click", playerOne);
// document.getElementById("2player").addEventListener("click", 2player);



function rollAllDice() {

	// dice1 = rollDice();
	// dice2 = rollDice();
	// dice3 = rollDice();
	// dice4 = rollDice();
	// dice5 = rollDice();
	// dice6 = rollDice();

	var dice = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"]
	// console.log("dice: " + dice);

	for (let i = 0; i < dice.length; i++) {
		let y = dice[i];
		let x = rollDice();
		console.log("y: " + y);
		console.log("x: " + x);
		document.getElementById(y).innerHTML = x;
	  }

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





