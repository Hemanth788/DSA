class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let l = 0, r = nums.length - 1;
    let min = nums[0];
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        // Handle boundaries safely
        let next = (m + 1) % nums.length;
        let prev = (m - 1 + nums.length) % nums.length;

        // Check if m is the pivot point
        if (nums[m] > nums[next]) {
            min = nums[next];
            break;
        }
        if (nums[prev] > nums[m]) {
            min = nums[m];
            break;
        }

        // Decide which half to search next
        if (nums[m] >= nums[l]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    
    return min;
}

}
