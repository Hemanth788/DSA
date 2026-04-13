class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0;
        let productExcludingZeroes = 1;
        for(let num of nums) {
            if(num === 0) {
                zeroCount++;
            } else {
                productExcludingZeroes *= num;
            }
            
            if(zeroCount > 1) return new Array(nums.length).fill(0);
        }

        let res = [];
        for(let num of nums) {
            res.push(num === 0 ? productExcludingZeroes : zeroCount ? 0 : productExcludingZeroes / num);
        }

        return res;
    }
}
