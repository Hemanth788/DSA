class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        map.set(0, 1);
        let sum = 0, res = 0;
        for(let num of nums) {
            sum += num;
            res += map.get(sum - k) ?? 0;
            map.set(sum, (map.get(sum) ?? 0) + 1);
        }

        return res;
    }
}
