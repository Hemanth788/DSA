class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(let str of strs) {
            encoded += str.length + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            let len = parseInt(str.substring(i, j), 10);
            i = j + 1;
            let origStr = str.substring(i , len + i);
            res.push(origStr);
            i += len;
        }

        return res;
    }
}
