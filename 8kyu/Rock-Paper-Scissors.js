// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2-- > Output):

// "scissors", "paper" -- > "Player 1 won!"
// "scissors", "rock" -- > "Player 2 won!"
// "paper", "paper" -- > "Draw!"


// my solution 

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!'

  if (p1 == 'rock' && p2 == 'scissors')
    return 'Player 1 won!'
  else if (p1 == 'scissors' && p2 == 'paper')
    return 'Player 1 won!'
  else if (p1 == 'paper' && p2 == 'rock')
    return 'Player 1 won!'

  else

    return 'Player 2 won!'
};


//other solutions 
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}

//

const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };

  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};