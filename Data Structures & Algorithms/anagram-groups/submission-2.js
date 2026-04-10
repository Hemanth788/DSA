class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keyAnagramGroupMap = new Map();

        for(let str of strs) {
            const arr = new Array(26).fill(0);
            for(let s of str) {
                arr[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = arr.join('#');
            if(keyAnagramGroupMap.has(key)) {
                const group = keyAnagramGroupMap.get(key);
                group.push(str)
                keyAnagramGroupMap.set(key, group)
            } else {
                keyAnagramGroupMap.set(key, [str])
            }
        }

        return Array.from(keyAnagramGroupMap.values());
    }
}
