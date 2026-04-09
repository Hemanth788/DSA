class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let len = 0;
        for(let i = 0; i < s.length; i++){
            let j = i, curr = 0, char = [];
            while(!char.includes(s[j]) && j < s.length){
                curr++;
                char.push(s[j]);
                j++;
            }
            len = Math.max(len, curr);
        }
        return len;
    }
}
