class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '{': '}',
            '[': ']',
            '(': ')',
        };
        const stack = [];
        for(const char of s){
            if(pairs[stack[stack.length - 1]] === char) {
                stack.pop();
                continue;
            }
            stack.push(char);
        }
        return stack.length === 0;
    }
}
