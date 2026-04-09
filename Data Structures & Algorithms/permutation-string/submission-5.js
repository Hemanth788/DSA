class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Map = {};
        for(let i = 0; i < s1.length; i++){
            s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
        }
        for(let i = 0; i < s2.length; i++){
            if(s1Map[s2[i]]){
                let j = i;
                let copy = {...s1Map};
                console.log('copy before: ', copy);
                while(j < i + s1.length){
                    console.log('j: ', j, s2[j]);
                    if(copy[s2[j]] > 0){
                        copy[s2[j]]--;
                    } else {
                        break;
                    }
                    j++;
                }
                console.log('copy, s1Map: ', copy, s1Map);
                if(Object.values(copy).every(it => it === 0)){
                    return true;
                }
            }
        }
        return false;
    }
}
