class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '') return '';

        let countT = {};
        let window = {};
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for(const c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0, need = Object.keys(countT).length;
        for(let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(c in countT && window[c] === countT[c]) {
                have++;
            }

            while(have === need) {
                if((r - l + 1) < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }
                window[s[l]] -= 1;
                if(s[l] in countT && window[s[l]] < countT[s[l]]) {
                    have -= 1;
                }
                l++;
            }
        }
        return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : '';
    }
}
