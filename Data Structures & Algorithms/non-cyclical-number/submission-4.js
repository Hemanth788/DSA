class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();
        while(true) {
            const sum = this.sumOfSquaresOfDigits(n);
            n = sum;
            if(sum === 1) return true;
            if(set.has(sum)) break;
            set.add(sum);
        }

        return false;
    }

    sumOfSquaresOfDigits(n) {
        let sum = 0;
        while(n > 0) {
            let remainder = n % 10;
            sum += Math.pow(remainder, 2);
            console.log("sum: ", sum);
            n = Math.floor(n / 10);
        }

        return sum;
    }
}
