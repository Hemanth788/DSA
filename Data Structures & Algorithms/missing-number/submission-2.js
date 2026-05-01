class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        return ((nums.length * (nums.length + 1)) / 2) - (nums.reduce((acc, num) => acc + num, 0));
    }
}
