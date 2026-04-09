class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const i of nums){
            if(map[i]) map[i] ++;
            else map[i] = 1;
        }
        return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(i => i[0]);
    }
}
