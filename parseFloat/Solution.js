function parseF(s) {
    // parse s
    s = parseFloat(s);
    // if s is a number
    if(!isNaN(s)) {
      // return s
      return s;
    } else {
      // return null
      return null;
    }
}