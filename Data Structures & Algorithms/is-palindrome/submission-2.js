class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, '');
        let flag = true;
        let i = 0, j = s.length - 1;
        while(i < j) {
            if(s[i].toLowerCase() !== s[j].toLowerCase()) {
                flag = false;
                break;
            }
            i++;
            j--;
        } 

        return flag;
    }
}
