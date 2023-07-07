function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let diceImage1 = 'images/dice' + randomNumber1 + '.png';
  let diceImage2 = 'images/dice' + randomNumber2 + '.png';

  document.getElementById('player1DiceImage').src = diceImage1;
  document.getElementById('player2DiceImage').src = diceImage2;
  let heading = document.getElementById('heading');
  heading.innerText = 'winner is';
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = 'Player 1 Wins!!!';
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = 'Player 2 Wins!!!';
  } else {
    randomNumber1 == randomNumber2;
    heading.innerHTML = 'draw!!!';
  }
}
