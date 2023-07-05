// You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.

// Task
// Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.

// Examples:
// max_ball(15) should return 4

// max_ball(25) should return 7

// Notes
// Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
// The maximum height recorded by the device is not necessarily the maximum height reached by the ball.
// FUNDAMENTALS

// Main solution: ball-upwards.js
function maxBall(v0) {
// Convert velocity from km/h to m/s
  const speed = v0 * 1000 / 3600;

  let t = 0; 
  let maxHeight = 0; 
  let currentTime = 0; 
  let currentHeight = 0;
  let prevHeight = 0; 

  while (currentHeight >= prevHeight) {
    
    prevHeight = currentHeight;

    // Calculate height at current time
    currentHeight = speed * currentTime - 0.5 * 9.81 * currentTime * currentTime;


    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
      t = currentTime;
    }

    currentTime += 0.1; 
  }

  return Math.round(t * 10);
}

// Alternative solution
function maxBall(v0) {
  const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
  return Math.round(secondsToTenths * v0 / mpsToKph / g);
}