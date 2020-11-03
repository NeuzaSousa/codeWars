function findOdd(A) {
    // Create empty object 
    let numberCount = {} 
    // Loop through every letter in the string
    for(let i of A){
      if (numberCount[i]){
      // Add 1 to the counter
      numberCount[i] += 1
    } else {
      // Otherwise, create a new counter for that new letter
      numberCount[i] = 1
    }
  }
    for (let n in numberCount) {
      if(numberCount[n] % 2 === 1) {
      return Number(n);
      }
    }
  }