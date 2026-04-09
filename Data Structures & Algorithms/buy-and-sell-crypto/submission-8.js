class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxProfits = 0;
        for(let price of prices){
            maxProfits = Math.max(maxProfits, price - minBuy);
            minBuy = Math.min(minBuy, price);
        }
        return maxProfits;
    }
}
