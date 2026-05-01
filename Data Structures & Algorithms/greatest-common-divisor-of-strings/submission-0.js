class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */

    gcdOfStrings(str1, str2) {
        if (str1 + str2 !== str2 + str1) return "";
        const gcd = this.gcd(str1.length, str2.length);
        return str1.slice(0, gcd);
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }
}
