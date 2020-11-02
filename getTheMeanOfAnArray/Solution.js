function getAverage(marks){
    let sum = null;
    // loop through array
    for(let m = 0; m < marks.length; m++) {
      //sum the elements of an array
      sum = marks.reduce((a, b) => a + b)
     } 
    // divide them by the number of elements of an array
    let average = sum / marks.length
    // round them down
    return Math.floor(average)
  }