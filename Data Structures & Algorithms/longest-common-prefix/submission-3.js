class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcp = strs[0];
        for(let i = 1; i < strs.length; i++) {
            let curr = "";
            let j = 0;
            while(lcp[j] === strs[i][j] && (j < Math.min(lcp.length, strs[i].length))) {
                curr += lcp[j];
                j++;
            }
            lcp = curr;
        }
        return lcp;
    }
}
