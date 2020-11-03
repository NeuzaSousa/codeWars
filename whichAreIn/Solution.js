function inArray(array1,array2){
    let result = [];
    for (let y = 0; y < array2.length; y++) {
      for (let w = 0; w < array1.length; w++) {
        if(array2[y].includes(array1[w])){
      result.push(array1[w])
        }
      }
    }
    result = Array.from(new Set(result));
    return result.sort();
}