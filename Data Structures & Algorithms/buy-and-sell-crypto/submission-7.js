class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let profit = 0;
        for(let price of prices){
            profit = Math.max(profit, price - minBuy);
            minBuy = Math.min(minBuy, price);
        }
        return profit;
    }
}
