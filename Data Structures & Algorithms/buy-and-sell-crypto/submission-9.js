class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxProfits = 0;
        for(let price of prices){
            const currEquation = price - minBuy
            maxProfits = Math.max(maxProfits, currEquation);
            minBuy = Math.min(minBuy, price);
        }
        return maxProfits;
    }
}
