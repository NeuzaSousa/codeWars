function divisibleByThree(str){
    //convert strings into numbers array
    let digits = str.split('');  
    // create sum
    let sum = 0;
    // loop through array
    for (let digit of digits) {
      // add digit to sum
      sum = sum + Number(digit);
    }
    // modulo of 3
    let remainder = sum % 3;
    // return true or false
    return (remainder === 0)
}