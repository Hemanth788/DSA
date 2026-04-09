class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
        for(let num of nums){
            if(!numSet.has(num-1)){
                let currLen = 1;
                let nextNum = num+currLen;
                while(numSet.has(nextNum)){
                    currLen++;
                    nextNum++;
                }
                longest = Math.max(longest, currLen);
            }
        }
        return longest;
    }
}
