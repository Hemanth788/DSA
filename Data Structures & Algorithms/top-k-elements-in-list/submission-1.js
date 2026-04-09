class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};
        for(const num of nums) {
            if(countMap[num]) {
                countMap[num]++
            } else {
                countMap[num] = 1;
            }
        }
        return Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]).slice(0, k);
    }
}
