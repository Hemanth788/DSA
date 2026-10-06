class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        s = set()
        result = False
        for n in nums:
            if n in s:
                result = True
                break
            s.add(n)
        
        return result
        