class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        mini = prices[0]
        max_profit = 0

        for i in range(1, len(prices)):
            mini = min(mini, prices[i])
            max_profit = max(prices[i] - mini, max_profit);

        return max_profit
        