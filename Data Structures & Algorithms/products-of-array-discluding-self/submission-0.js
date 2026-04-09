class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productWithoutZeroes = 1;
        let zeroesCount = 0;
        let result = [];
        for(const i of nums){
            if(i === 0){
                zeroesCount++;
            }else{
                productWithoutZeroes *= i;
            }
        }

        if(zeroesCount > 1){
            return new Array(nums.length).fill(0);
        }

        for(const i of nums){
            if(i === 0){
                result.push(productWithoutZeroes);
            } else{
                if(zeroesCount === 1){
                    result.push(0);
                }else{
                    result.push(productWithoutZeroes / i);
                }
            }
        }
        return result;
    }
}
