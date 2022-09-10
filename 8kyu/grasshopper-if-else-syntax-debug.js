// DESCRIPTION:
// If /else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive / CheckAlive / check_alive.Unfortunately, Greg made some errors while creating the function.

// checkAlive / CheckAlive / check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between - 10 and 10.

// DEBUGGING

//my solution

const checkAlive = health => health > 0

//other solution 
function checkAlive(health) {
  if (health < -10) throw "What The Health !?"
  if (health == -10) return false;
  if (health == -9) return false;
  if (health == -8) return false;
  if (health == -7) return false;
  if (health == -6) return false;
  if (health == -5) return false;
  if (health == -4) return false;
  if (health == -3) return false;
  if (health == -2) return false;
  if (health == -1) return false;
  if (health == 0) return false;
  if (health == 1) return true;
  if (health == 2) return true;
  if (health == 3) return true;
  if (health == 4) return true;
  if (health == 5) return true;
  if (health == 6) return true;
  if (health == 7) return true;
  if (health == 8) return true;
  if (health == 9) return true;
  if (health == 10) return true;
  if (health > 10) throw "What The Health ?!";
}

//
function checkAlive(health) {
  return health > 0 ? true : false;
}