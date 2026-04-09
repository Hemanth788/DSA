class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        console.log(String(Number(digits.join('')) + 1));
        return String(Number(digits.join('')) + 1).split('').map(i => Number(i));
    }
}
