class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let rows = matrix.length;
        let columns = matrix[0].length;
        let res = Array.from({ length: columns }, () => Array(rows).fill(0));

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < columns; j++) {
                res[j][i] = matrix[i][j];
            }
        }

        return res;
    }
}
