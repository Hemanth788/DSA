class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A, B;
        let n1Len = nums1.length;
        let n2Len = nums2.length;
        let total =  n1Len + n2Len;
        let totalLenIsOdd = total % 2 === 1;

        let half = Math.floor(total / 2);
        if(n1Len < n2Len) {
            A = nums1;
            B = nums2;
        } else {
            A = nums2;
            B = nums1;
        }

        let ALen = A.length;
        let BLen = B.length;

        let l = 0, r = ALen - 1;
        while(true){
            let i = Math.floor((l + r) / 2); // A
            let j = half - i - 2; // B

            let ALeft = i >= 0 ? A[i] : -Infinity;
            let ARight = i + 1 < ALen ? A[i + 1] : Infinity;
            
            let BLeft = j >= 0 ? B[j] : -Infinity;
            let BRight = j + 1 < BLen ? B[j + 1] : Infinity;

            if(ALeft <= BRight && BLeft <= ARight) {
                if(totalLenIsOdd){
                    return Math.min(ARight, BRight);
                } else {
                    return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
                }
            } else if(ALeft > BRight){
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
