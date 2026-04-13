class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    areRowsFine(board) {
        let flag = true;

        for(let row of board) {
            let set = new Set();
            for(let char of row) {
                if(char === ".") continue;

                if(set.has(char)) {
                    flag = false;
                    break;
                } else {
                    set.add(char)
                }
            }
            if(!flag) break;
        }

        return flag;
    }

    areColumnsFine(board) {
        let flag = true;
        for(let i = 0; i < 9; i++) {
            let set = new Set();
            for(let row of board) {
                let char = row[i];

                if(char === ".") continue;

                if(set.has(char)) {
                    flag = false;
                    break;
                } else {
                    set.add(char)
                }
            }
            if(!flag) break;
        }

        return flag;
    }

    are3x3sFine(board) {
        let flag = true;
        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) {
                        flag = false;
                        break;
                    }
                    seen.add(board[row][col]);
                }
                if(!flag) break;
            }
            if(!flag) break;
        }

        return flag;
    }

    isValidSudoku(board) {
        return this.areRowsFine(board)
               && this.areColumnsFine(board)
               && this.are3x3sFine(board);
    }
}
