function forLoop (array) {
  outcome = [];
  for(let i = 1; i < 25; i++){
    if ([i] === 1){
      outcome.push("I am 1 strange loop.");
    } else{
      outcome.push(`I am ${[i]} strange loops.`);
    }
  } return outcome
}
