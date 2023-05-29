// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// Main Solution
function periodIsLate(last, today, cycleLength) {
   const oneDay = 24 * 60 * 60 * 1000; 
  const daysPassed = Math.round((today - last) / oneDay); 
  return daysPassed > cycleLength;
}

// Alternative Solution
function periodIsLate(last, today, cycleLength)
{
  // convert from milliseconds to days
  var msPerDay = 86400000;
  var daysSinceLast = (today-last)/msPerDay;
  
  // compare to cycleLength
  return daysSinceLast>cycleLength;
}

