class TimeMap {
    constructor() {
        this.keyStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore[key]) {
            this.keyStore[key] = [{ timestamp, value, prevTimeStamp: null }];
        } else {
            this.keyStore[key] = [...this.keyStore[key], { timestamp, value, prevTimestamp: this.keyStore[key][this.keyStore[key].length - 1].timestamp }];
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let valArr = this.keyStore[key];
        let res = '';
        if(!valArr) return res;
        let l = 0;
        let r = valArr.length - 1;
        while(l <= r){
            let m = Math.floor((l + r) / 2);
            console.log('m: ', m, valArr);
            if(valArr[m].timestamp === timestamp){
                return valArr[m].value;
            } else if (valArr[m].timestamp < timestamp){
                res = valArr[m].value;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
