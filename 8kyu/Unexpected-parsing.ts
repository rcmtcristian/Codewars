// Here is a piece of code:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return 
//   {
//     status: msg
//   }
// }
// Expected Behaviour
// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.


// Main Solution
function getStatus(isBusy) {
  let msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  }
}

// Refactor Solution
function getStatus(isBusy: boolean): { status: string }  {
  let msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  }
}


// Alternate Solution
const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });