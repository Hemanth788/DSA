class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        while(l <= r) {
            let m = Math.floor((l + r) / 2);
            if(matrix[m][0] > target) {
                r = m - 1;
            } else if (matrix[m][matrix[m].length - 1] < target) {
                l = m + 1;
            } else {
                return this.rowSearch(matrix[m], target);
            }
        }
        return false;
    }

    rowSearch(row, target){
        let l = 0;
        let r = row.length - 1;
        while(l <= r) {
            let m = Math.floor((l + r) / 2);
            if(row[m] > target) {
                r = m - 1;
            } else if (row[m] < target) {
                l = m + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
