/* 
    Given by Riot games. Rehash an incorrectly hashed string 
    by combining letter count occurrences and alphabetizing them.
*/


/**
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
*/
const expected1 = "a199b70c42j3";

const str1 = "b70a164c32a20c10j3a15";
// Create an empty object to store the counts of each letter
// Loop/Iterate over the provided string
// If statement

function rehash(str) {
    const letterHashCounts = {};
    let numStr = "";
    let letter = str[0];
    // console.log(letter)

    for(let i = 1; i < str.length; i++){
        //Convert the current character to a number
        const num = parseInt(str[i])
        //Check if the current character is a number
        const isNum  = !isNaN(num)
        //Check if the current character is a letter
        const isLetter = isNaN(num)

        //If the current character is a number, add it to the numStr.
        if(isNum){
            numStr += str[i]
        }

        if(isLetter || i === str.length -1){

            const letterCount = parseInt(numStr)

            if(letter in letterHashCounts){
                letterHashCounts[letter] += letterCount
            } else {
                letterHashCounts[letter] = letterCount
            }
            letter = str[i];
            numStr = ""
        }
    }

    const abc = Object.keys(letterHashCounts).sort()

    let newHash = "";

    for(let i = 0; i < abc.length; i++){

        const letter = abc[i]
        console.log("This is our letter for loop: " + letter)

        newHash += letter + letterHashCounts[letter]
    }
    return newHash
}

console.log(rehash(str1));  // Output: "a199b70c42j3"
/*****************************************************************************/

module.exports = { rehash };