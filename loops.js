let forLoop = (array) =>{
  outcome = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] === 1){
      outcome.push("I am 1 strange loop");
    } else{
      outcome.push(`I am ${array[i]} strange loops`);
    }
  } return outcome 
}