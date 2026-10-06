class Solution:
    def getIdt(self, s: str) -> str:
        arr = [0]*26
        
        for i in range(0, len(s)):
            arr[ord(s[i]) - ord('a')] += 1

        return '#'.join(map(str, arr))

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        
        for i in range(0, len(strs)):
            idt = self.getIdt(strs[i])
            if idt in map:
                map[idt].append(strs[i])
            else:
                map[idt] = [strs[i]]
        
        return list(map.values())