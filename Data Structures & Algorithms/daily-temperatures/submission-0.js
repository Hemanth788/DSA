class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        let stack = [];
        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > stack[stack.length - 1].temp) {
                const { index } = stack[stack.length - 1];
                res[index] = i - index;
                stack.pop();
            } 
            stack.push({
                temp: temperatures[i],
                index: i
            })
            
        }
        return res;
    }
}
