class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = True
        string = "".join(char for char in s.lower() if char.isalnum())
        str_len = len(string)
        for i in range(0, str_len):
            if string[i] != string[str_len - i - 1]:
                res = False
                break

        return res