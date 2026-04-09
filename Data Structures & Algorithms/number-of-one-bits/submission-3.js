class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        // for(let x of n.toString(2)){
        //     if(x === '1') count++;
        // }

        while(n){
            count += n % 2;
            n = n >> 1;
        }

        // while(n){
        //     n &= n - 1;
        //     count++;
        // }

        return count;

    }
}
