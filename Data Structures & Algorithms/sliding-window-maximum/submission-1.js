class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const result = [];
        const q = new Deque();
        let l = 0;
        let r = 0;

        while(r < n) {
            while(q.size() && nums[q.back()] < nums[r]) {
                q.popBack();
            }
            q.pushBack(r);
            
            // moved past the current max's index
            if(l > q.front()) {
                q.popFront();
            }

            if(r + 1 >= k) {
                result[l] = nums[q.front()];
                l++;
            }
            r++;
        }

        return result;
    }
}
