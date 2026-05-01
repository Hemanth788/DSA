class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        if(s.length % 2 !== 0) return false;

        const map = {
            "(" : ")",
            "[" : "]",
            "{" : "}"
        };
        let stack = [];

        for(let str of s) {
            if(str === map[stack[stack.length - 1]]) {
                stack.pop();
                continue;
            }
            
            stack.push(str);
        }

        return stack.length === 0;
    }
}
