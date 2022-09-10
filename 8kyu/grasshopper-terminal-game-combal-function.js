// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health.Health can't be less than 0.

// FUNDAMENTALS


// my solutions

function combat(health, damage) {
  //  for (let i = 0; i > health; i++){
  //     health - i
  //   }
  //   return health

  if (health > damage) {
    return health - damage
  } else {
    return 0
  }
}

//other solutions
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}

//
const combat = (health, damage) => Math.max(0, health - damage);


