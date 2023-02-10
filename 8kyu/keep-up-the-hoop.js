// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// Main Solution:
function hoopCount(n) {
  //your code goes here
  return 10 <= n
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}
