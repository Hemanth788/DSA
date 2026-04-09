class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // checkInclusion(s1, s2) {
    //     let s1Map = {};
    //     for(let i = 0; i < s1.length; i++){
    //         s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
    //     }
    //     for(let i = 0; i < s2.length; i++){
    //         if(s1Map[s2[i]]){
    //             let j = i;
    //             let copy = {...s1Map};
    //             while(j < i + s1.length){
    //                 console.log('j: ', j, s2[j]);
    //                 if(copy[s2[j]] > 0){
    //                     copy[s2[j]]--;
    //                 } else {
    //                     break;
    //                 }
    //                 j++;
    //             }
    //             if(Object.values(copy).every(it => it === 0)){
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }

    checkInclusion(s1, s2){
        if (s1.length > s2.length) {
            return false;
        }
        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let l = 0;
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26){
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;

            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;
    }
}
