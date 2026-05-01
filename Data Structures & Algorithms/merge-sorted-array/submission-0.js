class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // backward merge as both are sorted
       let i = m - 1, j = n - 1, k = m + n - 1;

       while(j >= 0) { // enough to loop on nums2
        if(i >= 0 && nums1[i] > nums2[j]) { // check if i is valid && if value at i is greater than nums2 value at j
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
       }
    }
}
