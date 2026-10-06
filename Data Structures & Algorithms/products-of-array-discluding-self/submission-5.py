class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        nonZeroProduct = 1
        zeroCount = 0
        for index, num in enumerate(nums):
            if num != 0:
                nonZeroProduct *= num
            else:
                zeroCount += 1
        
        if zeroCount > 1:
            return [0] * len(nums)

        res = []
        for index, num in enumerate(nums):
            if num == 0:
                res.append(nonZeroProduct)
            elif zeroCount >= 1:
                res.append(0)
            else:
                res.append(nonZeroProduct // num)
        
        return res
        