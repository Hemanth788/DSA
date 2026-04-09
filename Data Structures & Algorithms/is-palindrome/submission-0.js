class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    alphaNum(c) {
        const charCode = c.charCodeAt(0);
        return (
            (65 <= charCode && charCode <= 90) ||
            (97 <= charCode && charCode <= 122) ||
            (48 <= charCode && charCode <= 57)
        );
    }

    isPalindrome(s) {
        let flag = true;
        let l = 0, r = s.length - 1;
        while(l < r){
            while(l < r && !this.alphaNum(s[l])){
                l++;
            }
            while(l < r && !this.alphaNum(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                flag = false;
                break;
            }
            l++;
            r--;
        }
        return flag;
    }
}
