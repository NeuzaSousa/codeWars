function generateIntegers(m, n) {
    // if m and n are equal
    if (m === n) {
     // return m
      return [m];
    }
    // create array
    let nums = [];
    // loop though nums from m to n
    for (i = m; i <= n; i++) {
      // push nums to array
      nums.push(i);
    }
    // return result
    return nums
}