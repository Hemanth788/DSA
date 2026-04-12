class NumMatrix {
    /**
     * @param {number[][]} m
     */
    constructor(m) {
        const r = m.length;
        const c = m[0].length;
        this.ps = Array.from({ length: r + 1 }, () =>
            Array(c + 1).fill(0),
        );

        for(let i = 0; i < r; i++) {
            for(let j = 0; j < c; j++) {
                this.ps[i + 1][j + 1] = m[i][j] + this.ps[i][j + 1] + this.ps[i + 1][j] - this.ps[i][j];
            }
        }
    }

    /**
     * @param {number} r1
     * @param {number} c1
     * @param {number} r2
     * @param {number} c2
     * @return {number}
     */
    sumRegion(r1, c1, r2, c2) {
        return this.ps[r2 + 1][c2 + 1]
             - this.ps[r1][c2 + 1]
             - this.ps[r2 + 1][c1]
             + this.ps[r1][c1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
