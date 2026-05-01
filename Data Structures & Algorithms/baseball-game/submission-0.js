class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(let entry of operations) {
            switch(entry) {
                case 'C':
                    stack.pop();
                    break;
                case 'D':
                    stack.push(stack[stack.length - 1] * 2);
                    break;
                case '+':
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    break;
                default:
                    stack.push(parseInt(entry));
                    break;
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
