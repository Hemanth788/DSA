class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = '';
        for(let c of s) {
            if(c.match(/\w/)) {
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }
}
