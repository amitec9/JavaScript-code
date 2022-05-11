let learnCoding = 'learn to code for free with freeCodeCamp';
let splitLearnCoding = learnCoding.split(" ");
//console.log(splitLearnCoding)
let capletter = splitLearnCoding.map((word)=>{
   // console.log(word)
    return word[0].toUpperCase()+word.slice(1)
})
console.log(capletter.join(" "))


