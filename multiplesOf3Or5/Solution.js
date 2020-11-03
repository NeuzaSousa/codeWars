function solution(number){
    // initialize num array
    let num = [];
    // loop through the numbers between 0 and number
    for(let n = 0; n < number; n++) {
      // if the number is a multiple of 3 or 5
      if((n % 3 === 0) || (n % 5 === 0)) {
        // push it to num
        num.push(n)
      }
    }
    // sum the items inside array
    let final = num.reduce((a,b) => (a + b), 0)
    // return array
    return final
}