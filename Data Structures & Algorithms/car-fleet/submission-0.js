class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);

        const timeStack = [];
        for(let [p, s] of pair){
            const time = (target - p) / s;
            timeStack.push(time);
            if(timeStack.length >= 2 && timeStack[timeStack.length - 1] <= timeStack[timeStack.length - 2]) {
                timeStack.pop();
            }
        }
        return timeStack.length;
    }
}
