var transpose = function(matrix) {
    const res = Array.from({length: matrix[0].length}, () => new Array(matrix.length))

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++){
            res[col][row] = matrix[row][col]
        }
    }

    return res
};


console.log(transpose([[1,2,3],[4,5,6]]))