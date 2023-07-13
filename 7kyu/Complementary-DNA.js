function DNAStrand(dna){
  let complementary = "";
  
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      complementary += "T";
    } else if (dna[i] === "T") {
      complementary += "A";
    } else if (dna[i] === "C") {
      complementary += "G";
    } else if (dna[i] === "G") {
      complementary += "C";
    }
  }
  
  return complementary;
}
