class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let count = {};
        let res = 0;
        for(let right = 0; right < s.length; right++){
            let windowLen = right - left + 1;
            count[s[right]] = (count[s[right]] || 0) + 1;
            if(windowLen - Math.max(...Object.values(count)) > k){
                count[s[left]] -= 1;
                left++;
            }
            windowLen = right - left + 1;
            res = Math.max(res, windowLen);
        }
        return res;
    }
}
