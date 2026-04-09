class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(let s of strs) {
            res += s.length + '#' + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            let strLen = Number(str.slice(i, j));
            strs.push(str.slice(j + 1, j + 1 + strLen));
            i = j + 1 + strLen;
        }
        return strs;
    }
}
