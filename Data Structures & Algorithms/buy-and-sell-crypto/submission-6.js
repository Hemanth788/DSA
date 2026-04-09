class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let profit = 0;
        while(sell < prices.length){
            if(prices[buy] < prices[sell]){
                profit = Math.max(prices[sell] - prices[buy], profit);
            } else {
                buy = sell;
            }
            sell++;
        }
        return profit;
    }
}
