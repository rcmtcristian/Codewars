// How many kookaburras are there?

// Hint
// The trick to counting kookaburras is to listen carefully

// The males sound like HaHaHa...

// The females sound like hahaha...

// And they always alternate male/female

// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

//Main solution
var kookaCounter = function (laughing, currSound) {
  if (!laughing) return 0;

  const shortenedLaughing = laughing.slice(2);

  if (!currSound) {
    return 1 + kookaCounter(shortenedLaughing, laughing.slice(0, 2));
  }

  if (laughing.slice(0, 2) === currSound) {
    return kookaCounter(shortenedLaughing, currSound);
  }

  currSound = laughing.slice(0, 2); // 'ha'

  return 1 + kookaCounter(shortenedLaughing, currSound);
};

//Other solutions
function kookaCounter(laughing) {
  return laughing.replace(/(ha)+/gi, "$1").length / 2;
}

//
var kookaCounter = function (laughing) {
  return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
};
