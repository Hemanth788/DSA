class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const cache = [];
        let numStr = String(n);
        let sum = 0;
        while(true){
            for(let c of numStr){
                sum += Math.pow(Number(c), 2);
            }
            console.log('sum: ', sum);
            if(sum === 1 || cache.includes(sum)){ 
                break;
            }
            else{
                numStr = String(sum);
                cache.push(sum);
                sum = 0;
            }
        }
        if(sum === 1){
            return true;
        }
        return false;
    }
}
