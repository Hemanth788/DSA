class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(const x of strs){
            res += `${x.length}#${x}`
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [], i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            let start = j + 1;
            let end = j + 1 + length;
            result.push(str.substring(start, end));
            i = end;
        }
        return result;
    }
}
