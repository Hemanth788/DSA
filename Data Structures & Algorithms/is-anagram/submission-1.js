class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const map = {};
        for(const i of s){
            if(map[i]){
                map[i] += 1;
            }else{
                map[i] = 1;
            }
        }
        for(const i of t){
            if(map[i]){
                map[i] -= 1;
            }
        }
        return Object.values(map).every(i => i === 0);
    }
}
