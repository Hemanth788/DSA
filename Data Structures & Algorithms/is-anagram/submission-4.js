class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const alphabet = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++) {
            alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            alphabet[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return alphabet.every(i => i === 0);
    }
}
