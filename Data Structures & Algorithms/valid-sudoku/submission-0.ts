class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const row:{[key: number]: Set<string>} = {};
        const col:{[key: number]: Set<string>} = {};
        const squares:{[key: string]: Set<string>} = {};

        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const num = board[r][c];
                if(num === '.'){
                    continue;
                }
                const grid = `${Math.floor(r/3)}${Math.floor(c/3)}`;
                if(!row[r]) row[r] = new Set();
                if(!col[c]) col[c] = new Set();
                if(!squares[grid]) squares[grid] = new Set();

                if(row[r].has(num) || col[c].has(num) || squares[grid].has(num)){
                    return false;
                }
                row[r].add(num);
                col[c].add(num);
                squares[grid].add(num);
            }
        }
        return true;
    }
}
