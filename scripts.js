console.log("Yahtzee!");

// set up players object
// set up game object
// create dice and dice randomizer


var dice1, dice2, dice3, dice4, dice5, dice6; 


document.getElementById("rollDice").addEventListener("click", rollAllDice);

document.getElementById("playerOne").addEventListener("click", playerOne);
// document.getElementById("2player").addEventListener("click", 2player);



function rollAllDice() {

	dice1 = rollDice();
	dice2 = rollDice();
	dice3 = rollDice();
	dice4 = rollDice();
	dice5 = rollDice();
	dice6 = rollDice();
    // document.getElementById("dice1").innerHTML = "dice1: " + dice1;
    // document.getElementById("dice2").innerHTML = "dice2: " + dice2;
    // document.getElementById("dice3").innerHTML = "dice3: " + dice3;
    // document.getElementById("dice4").innerHTML = "dice4: " + dice4;
    // document.getElementById("dice5").innerHTML = "dice5: " + dice5;
    // document.getElementById("dice6").innerHTML = "dice6: " + dice6;
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    document.getElementById("dice3").innerHTML = dice3;
    document.getElementById("dice4").innerHTML = dice4;
    document.getElementById("dice5").innerHTML = dice5;
    document.getElementById("dice6").innerHTML = dice6;

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




// document.getElementById("demo").innerHTML = Math.floor(Math.random() * 6) + 1;




