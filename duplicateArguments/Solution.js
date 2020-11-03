function solution(...a){
    // create array this the arguments
    let arr = [...a];
    // create new array and use set to filter out duplicates
    let nArr = [...new Set(arr)]
    // if both lengths are different, arr has duplicates
    if (arr.length !== nArr.length) {
      return true;
    }
   return false;
}