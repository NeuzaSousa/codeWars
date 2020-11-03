function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let positions =  [];
    
    for(let ch of text.toLowerCase()) {
      let ix = alphabet.indexOf(ch);
      if(ix > -1) {
        positions.push(ix + 1);
      }
     } 
      return positions.join(' ');
}