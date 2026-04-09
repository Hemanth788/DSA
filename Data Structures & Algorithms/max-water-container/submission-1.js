class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let res = 0;
        while(i < j){
            res = Math.max(res, (j - i) * Math.min(heights[i], heights[j]));
            if(heights[j] < heights[i]) {
                j--;
            } else {
                i++;
            }
        }
        return res;
    }
}
