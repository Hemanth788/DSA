class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const map = new Map();
        for(let num of nums) {
            const count = map.get(num);
            map.set(num, count ? count + 1 : 1);
            if(map.entries().length > 2) {
                for(let key of map.keys()) {
                    const newVal = map.get(key) - 1;

                    map.set(key, newVal);
                    if(newVal == 0) {
                        map.delete(key);
                    }
                }
            }
        }

        const res = [];
        for(let [key, val] of map.entries()) {
            if(val > nums.length / 3) {
                res.push(key);
            }
        }

        return res;
    }
}
