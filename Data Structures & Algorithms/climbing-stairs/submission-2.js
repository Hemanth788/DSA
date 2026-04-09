class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 3) return n;
        return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
