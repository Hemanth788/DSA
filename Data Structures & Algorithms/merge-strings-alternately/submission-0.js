class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0, ans = '';
        while(i < word1.length && i < word2.length) {
            ans += word1.charAt(i) + word2.charAt(i);
            i++;
        }

        if(i < word1.length) {
            ans += word1.slice(i);
        }

        if(i < word2.length) {
            ans += word2.slice(i);
        }

        return ans;
    }
}
