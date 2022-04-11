function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
    if (reversedWord === word){
      return true;
    } else {
      return false;
    }
  }

/* 
  Add your pseudocode here
    we need to take in argument word and reverse it, then see if that reversed word equals the regular word 
*/

/*
  Add written explanation of your solution here
  if we take in the argument word and split it to covert into an array, the call .reverse on it, plus .join to put them back together.
  then we need to compare them and return a boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
