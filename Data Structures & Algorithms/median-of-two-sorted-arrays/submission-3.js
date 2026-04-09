class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        let ALen = A.length;
        let BLen = B.length;

        const total = ALen + BLen;
        const half = Math.floor((total) / 2);

        if (B.length < A.length) {
            [A, B] = [B, A];
            [ALen, BLen] = [BLen, ALen];
        }

        let totalLenIsOdd = total % 2 === 1;
        let l = 0, r = ALen - 1;

        while(true){
            let mA = Math.floor((l + r) / 2); // A
            let mB = half - mA - 2; // B

            let ALeft = mA >= 0 ? A[mA] : -Infinity;
            let ARight = mA + 1 < ALen ? A[mA + 1] : Infinity;
            
            let BLeft = mB >= 0 ? B[mB] : -Infinity;
            let BRight = mB + 1 < BLen ? B[mB + 1] : Infinity;

            if(ALeft <= BRight && BLeft <= ARight) {
                if(totalLenIsOdd){
                    return Math.min(ARight, BRight);
                } else {
                    return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
                }
            } else if(ALeft > BRight){
                r = mA - 1;
            } else {
                l = mA + 1;
            }
        }
    }
}
