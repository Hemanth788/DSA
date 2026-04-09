class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // while window is invalid, i.e., characters that need to be replaced are more than our replacement limit
            // remove the left most character occurence count from the map and move the pointer forward
            while (r - l + 1 - Math.max(...count.values()) > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}