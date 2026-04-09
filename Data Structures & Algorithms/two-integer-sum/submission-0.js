class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        let sol;
        for(let i = 0; i < nums.length; i++){
            const searchFor = target - nums[i];
            if(map[searchFor]){
                sol = [Number(map[searchFor]), i];
                break;
            }else{
                map[nums[i]] = '' + i;
            }
        }
        return sol;
    }
}
