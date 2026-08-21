const diceImg = document.getElementById("dice");
function rollDice() {
    const min = 1;
    const max = 7;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber == 1) {
        diceImg.src = "images/one.png";
    }
    else if (randomNumber == 2) {
        diceImg.src = "images/two.png";
    }
    else if (randomNumber == 3) {
        diceImg.src = "images/three.png";
    }
    else if (randomNumber == 4) {
        diceImg.src = "images/four.png";
    }
    else if (randomNumber == 5) {
        diceImg.src = "images/five.png";
    }
    else {
        diceImg.src = "images/dice.png";
    }
}