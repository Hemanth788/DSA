class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sumOfN = (nums.length * (nums.length + 1)) / 2;
        let sumOfNums = nums.reduce((acc, num) => acc + num, 0);

        return sumOfN - sumOfNums;
    }
}
