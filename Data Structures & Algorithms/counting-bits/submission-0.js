class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let offset = 1;
        let dp = new Array(n + 1).fill(0);
        for(let i = 1; i <= n; i++){
            if(i === offset * 2){
                offset = i;
            }
            dp[i] = 1 + dp[i - offset];
        }
        return dp;
    }
}
