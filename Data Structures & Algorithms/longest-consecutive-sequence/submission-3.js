class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        if(set.size === 0) return 0;

        let longest = 1;
        for(let n of set) {
            if(!set.has(n - 1)) {
                let len = 1;
                while(set.has(n + len)){
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
