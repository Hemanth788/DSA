class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
    let set = new Set();
    // let queue = [];
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;

        set.add(nums[i]);
        // queue.push(nums[i]);

        if (
            // queue.length > k
            i - j >= k
            ) {
            // let remove = queue.shift(); // oldest element
            let remove = nums[j];
            set.delete(remove);
            j++;
        }
    }

    return false;
}
}
