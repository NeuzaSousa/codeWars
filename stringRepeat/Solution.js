function repeatStr (n, s) {
    // convert s into an array
    let str = s.split('');
    // loop n-1 times
    for (let i= 0; i < n-1; i++){
      str.push(s)
    }
    return str.join('')
  }