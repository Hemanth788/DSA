class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = 0, sell = 1;
        while(sell < prices.length){
            if(prices[buy] > prices[sell]){
                buy = sell; sell++;
            } else {
                profit = Math.max(profit, prices[sell] - prices[buy]);
                sell++;
            }
        }
        return profit;
    }
}
