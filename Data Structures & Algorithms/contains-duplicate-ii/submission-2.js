class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
    let set = new Set();
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);

        if (i - j >= k) {
            let remove = nums[j]; // oldest element
            set.delete(remove);
            j++;
        }
    }

    return false;
}
}
