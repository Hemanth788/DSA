class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0, r = s.length - 1, flag = true;
        while(l < r) {
            if(s[l] !== s[r]) {
                flag = this.isPalindrome(s, l + 1, r) || this.isPalindrome(s, l, r - 1);
                break;
            }
            l++;
            r--;
        }

        return flag;
    }

    isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
