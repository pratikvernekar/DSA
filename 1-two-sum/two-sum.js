/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 1. Iterate over every possible number pair
    for (let i = 0; i < nums.length; i++) {
        // j is always ahead of i so that we don't re-evaluate already evaluated sums
        for (let j = i + 1; j < nums.length; j++) {
            // 2. Check if a given pair adds up to our target
            if (nums[i] + nums[j] == target) {
                // Return the indices when a pair has been found
                return [i, j];
            }
        }
    }
};