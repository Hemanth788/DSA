class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = 0;
        let power = 0;
        for(let i = digits.length - 1; i >= 0; i--) {
            num += digits[i] * Math.pow(10, power);
            power += 1;
        }
        console.log("num: ", num);
        return String(num + 1).split('');
        
    }
}
