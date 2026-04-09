class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let l = 0;
        let map = new Map();
        for(let i = 0; i < s.length; i++){
            if(map.has(s[i])){
                l = Math.max(l, map.get(s[i]) + 1);
            }
            map.set(s[i], i);
            res = Math.max(res, i - l + 1);
        }
        return res;
    }
}
