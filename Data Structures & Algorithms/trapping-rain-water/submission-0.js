class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    trap(height) {
        if(!height || height.length === 0){
            return 0;
        }
        let l = 0, r = height.length - 1, lMax = height[l], rMax = height[r], res = 0;
        while(l < r){
            if(lMax < rMax){
                l++;
                lMax = Math.max(lMax, height[l]);
                res += lMax - height[l];
            }else{
                r--;
                rMax = Math.max(rMax, height[r]);
                res += rMax - height[r];
            }
        }
        return res;
    }
}
