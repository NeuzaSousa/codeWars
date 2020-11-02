function paperwork(n, m) {
    // if n or m are negative return 0
    if (n < 0) {
      return 0;
    } else if (m < 0) {
      return 0;
    } else {
      // create variable pages
      let pages = 0;
    // multiply n and m
      pages = n * m;
    // return result  
      return pages;
    }  
  }