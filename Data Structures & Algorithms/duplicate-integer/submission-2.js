class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let ans = false;
        const set = new Set();
        for(let num of nums) {
            if(set.has(num)) {
                ans = true;
                break;
            } else {
                set.add(num)
            }
        }

        return ans;
    }
}
