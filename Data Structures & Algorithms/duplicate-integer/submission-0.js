class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countMap = {};
        let flag = false;
        for(const i of nums){
            if(countMap[i]){
                flag = true;
                break;
            }else{
                countMap[i] = 1;
            }
        }
        return flag;
    }
}
