// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8
//https://leetcode.com/problems/top-k-frequent-elements/
/* 
    Given an unsorted non-empty array of integers and int k
    return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability
    but the input is NOT guaranteed to be sorted and the output
    does NOT need to be in any specific order
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const nums3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/*****************************************************************************/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
    const count = {};
    const occurrences = [];
    for(num of nums){
        if(count.hasOwnProperty(num)){
            count[num] ++;
        }else{
            count[num] = 1;
        }
    }for(let i=0;i<k;i++){
        let most=0;
        let amount =0;
        for(num in count){
            if(count[num]>amount){
                most=num;
                amount=count[num]
            }
        }
        occurrences.push(most);
        delete count[most];
    }
    return occurrences
}
console.log(kMostFrequent(nums1, k1))
console.log(kMostFrequent(nums2, k2))
console.log(kMostFrequent(nums3, k3))

// Loop Statements:
// for (initial-expression; condition; second-expression){
//   //Code block
// }
// Step 1: Run the initial-expression.
// Step 2: Check if condition meets. If condition meets, proceed; or else end the loop.
// Step 3: Run the code in block.
// Step 4: Run the second-expression.
// Step 5: Go to Step 2

module.exports = { kMostFrequent };