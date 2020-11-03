function nextId(ids){
    // loop through ids
    for (id = 0; id < ids.length; id++) {
      // check if the next id is included in array
      if(!ids.includes(id)) {
        // if yes, return next id outside of ids
        return id;
      }
    }
    // if not, return the next number
    return ids.length;
}