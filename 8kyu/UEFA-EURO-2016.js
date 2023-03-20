// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// Main Solution
function uefaEuro2016(teams, scores) {
  let duel =
    scores[0] >= scores[1]
      ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
      : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  let draw =
    scores[0] == scores[1]
      ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
      : duel;
  return 1 < 0 ? duel : draw;
}

// Other Solutions
const uefaEuro2016 = (c, s) =>
  `At match ${c[0]} - ${c[1]}, ${
    s[0] == s[1]
      ? "commands played draw."
      : (s[0] > s[1] ? c[0] : c[1]) + " won!"
  }`;
