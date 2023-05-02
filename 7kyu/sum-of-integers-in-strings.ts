// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// Main Solution
function sumOfIntegersInString(s){
  const filtered = s.replace(/\D/g,' ').split(' ').reduce((a,b)=> a + Number(b),0)
  return filtered
}

// Other Solutions
function sumOfIntegersInString(s){
return s.replace(/\D/gi,' ')
        .split(" ")
        .map(value=>Number(value))
        .reduce((a,b)=>a+b); 
}

// 
function sumOfIntegersInString(s: string): number{
  const filtered: string = s.replace(/\D/g,' ').split(' ').reduce((a:string,b:string)=> a + Number(b),0)
  return filtered
}