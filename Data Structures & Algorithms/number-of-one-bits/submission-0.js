class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        console.log(n.toString(2));
        for(let x of n.toString(2)){
            if(x === '1') count++;
        }
        return count;
    }
}
