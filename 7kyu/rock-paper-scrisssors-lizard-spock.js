// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

// Manin Solution
function rpsls(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  }
  if (
    (player1 === "scissors" && (player2 === "paper" || player2 === "lizard")) ||
    (player1 === "paper" && (player2 === "rock" || player2 === "spock")) ||
    (player1 === "rock" && (player2 === "lizard" || player2 === "scissors")) ||
    (player1 === "lizard" && (player2 === "spock" || player2 === "paper")) ||
    (player1 === "spock" && (player2 === "scissors" || player2 === "rock"))
  ) {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
}
// Alternative Solution
const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};


function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}