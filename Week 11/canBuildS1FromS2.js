/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/*****************************************************************************/
//Loop, comparison, lowercase all


function canBuildS1FromS2(s1, s2) {
  const charFreq = []

  for(let char of s2.toLowerCase()){
    // console.log("char: " + char)
    charFreq[char] = charFreq[char] + 1 || 1
    // console.log("charFreq[char]: " + charFreq[char])
  }
  for(let char of s1.toLowerCase()){
    if(!charFreq[char]){
      return false
    }
    charFreq[char]--
  }
  return true
}
console.log(canBuildS1FromS2(strA1, strB1)); //true
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));

module.exports = { canBuildS1FromS2 };