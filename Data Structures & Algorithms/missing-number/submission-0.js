class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let sum1 = n * (n + 1) / 2;
        let sum2 = nums.reduce((x, a) => x + a, 0);
        return sum1 - sum2;
    }
}
