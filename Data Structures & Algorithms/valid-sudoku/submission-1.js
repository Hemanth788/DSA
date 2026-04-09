class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // creating a map for squares, the tricky part
    // 0 1 2
    // 3 4 5
    // 6 7 8
    // these are the buckets into which the 9 squares are made into
    // to do that, (r / 3) * 3 + c / 3 is used
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cell = board[r][c];
                if (cell === '.') {
                    continue;
                }
                if (
                    rows.get(r)?.has(cell) ||
                    cols.get(c)?.has(cell)
                    || squares
                        .get(Math.floor(r / 3) + Math.floor(c / 3) * 3)
                        ?.has(cell)
                ) {
                    return false;
                }
                cols.set(c, new Set(cols.get(c)).add(cell));
                rows.set(r, new Set(rows.get(r)).add(cell));
                squares.set(
                    Math.floor(r / 3) + Math.floor(c / 3) * 3,
                    new Set(
                        squares.get(Math.floor(r / 3) + Math.floor(c / 3) * 3),
                    ).add(cell),
                );
            }
        }
        return true;
    }
}
