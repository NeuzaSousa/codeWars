function buildPalindrome(str) {
    //loop through string 
    for(let i = 0; i < str.length; i++){
      //append i characters reversed at the end of the string - str.substring()
      let newString = str + str.substring(0, i).split("").reverse().join("")
        //check if it is a palindrome
        if(newString === newString.split("").reverse().join("")) {
          return newString
        };
    }
}