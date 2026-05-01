class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        let map = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        let num = 0;
        for(let i = 0; i < s.length; i++) {
            if(s.charAt(i) === 'I' && s.charAt(i + 1) === 'V') { num += 4; i++; }
            else if(s.charAt(i) === 'I' && s.charAt(i + 1) === 'X') { num += 9; i++; }
            else if(s.charAt(i) === 'X' && s.charAt(i + 1) === 'L') { num += 40; i++; }
            else if(s.charAt(i) === 'X' && s.charAt(i + 1) === 'C') { num += 90; i++; }
            else if(s.charAt(i) === 'C' && s.charAt(i + 1) === 'D') { num += 400; i++; }
            else if(s.charAt(i) === 'C' && s.charAt(i + 1) === 'M') { num += 900; i++; }
            else { num += map[s.charAt(i)]; }
            console.log("num: ", num);
        }
        return num;
    }
}
