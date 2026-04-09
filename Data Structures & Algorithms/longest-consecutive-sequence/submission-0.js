class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(const n of nums){
            if(!set.has(n-1)){
                let length = 1, num = n;
                while(set.has(num + 1)){
                    length++;
                    num += 1;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}