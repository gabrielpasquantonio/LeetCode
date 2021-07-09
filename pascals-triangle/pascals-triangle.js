/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
       const rows = [[1]];
    for(let i = 1; i< numRows; i++){
        const prevRow = rows[i-1];
        rows[i] = [...prevRow,1];
        for(let j = 1; j<rows[i].length - 1; j++){
            rows[i][j] = prevRow[j-1] + prevRow[j];
        }
    }
    return rows; 
};