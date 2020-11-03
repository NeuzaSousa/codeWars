function getSum( a,b ) {
    // if b is less than a
    // switch them
    if (b < a) {
      let temp = b;
      b = a;
      a = temp;
      
    }
    // initialize sum to 0
    let sum = 0;
    // looping from a to b
    for (let i = a; i <= b; i++) {
      // add i to sum
      sum += i;
    }
    // return sum
    return sum;
}