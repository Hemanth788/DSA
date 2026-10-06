class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        table = {}
        
        for n in nums:
            table[n] = True
        
        res = 0

        for n in nums:
            temp = n
            
            if temp - 1 not in table:
                count = 1

                while temp + 1 in table:
                    count += 1
                    temp += 1
                
                res = max(count, res)
        
        return res