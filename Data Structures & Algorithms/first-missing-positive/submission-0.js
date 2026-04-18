class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
        let i = 0;
        while(i < n) {
            let element = nums[i];
            if(1 <= element && element <= n) {
                let position = element - 1;
                if(nums[position] !== element) {
                    [nums[position], nums[i]] = [nums[i], nums[position]];
                    i--; // because whatever you've swapped might not be in the right position as well, gotta check for that too
                }
            }
            i++;
        }

        for(let i = 0; i < n; i++) {
            if(nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}
