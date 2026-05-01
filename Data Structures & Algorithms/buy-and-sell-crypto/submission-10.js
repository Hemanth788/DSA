class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leastValueDay = 0, profit = 0;
        for(let i = 0; i < prices.length; i++) {
            leastValueDay = prices[i] > prices[leastValueDay] ? leastValueDay : i;
            profit = Math.max(profit, prices[i] - prices[leastValueDay]);
        }

        return profit;
    }
}
