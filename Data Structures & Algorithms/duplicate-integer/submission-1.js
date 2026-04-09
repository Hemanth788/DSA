class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numCount = {};
        for(let num of nums) {
            if(numCount[num]) {
                return true;
            } else {
                numCount[num] = 1;
            }
        }
        return false;
    }
}
