class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let resIdx  = -1;
        while(l <= r){
            let m = Math.floor((l + r) / 2);

            if(nums[m] === target) {
                resIdx = m;
                break;
            }
            if (nums[l] <= nums[m]) {
                if (target > nums[m]) {
                    l = m + 1;
                } else {
                    if(target < nums[l]){
                        l = m + 1;
                    } else {
                        r = m - 1;
                    }
                }
            } else {
                if (target < nums[m]) {
                    r = m - 1;
                } else {
                   if(target > nums[r]) {
                        r = m - 1;
                   } else {
                        l = m + 1;
                   }
                }
            }
        }
        return resIdx;
    }
}
