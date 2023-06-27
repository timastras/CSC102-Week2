//variables for function//
var dice1 = 0;
var dice2 = 0;
var sum = 0;
//function that rolls dice and displays results//
function rollDice() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    sum = dice1 + dice2;
    //innerHTML displays dice, sum, and result//
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    document.getElementById("sum").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("result").innerHTML = "You LOSE";
    } else if (sum == 2 || sum == 3 || sum == 12) {
        document.getElementById("result").innerHTML = "You WIN!";
    } else {
        document.getElementById("result").innerHTML = "Roll Again!";
    }
}
