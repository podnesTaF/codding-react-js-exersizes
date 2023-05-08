var diagonalSum = function(mat) {
    let res = 0

    let j = 0
    for(let i = 0; i < mat.length; i++) {
        res += mat[i][j]
        console.log(mat[i][j])
        if(mat.length - j - 1 !== i) {
            console.log(mat.length - j, i, j)
            res += mat[i][mat.length - 1 - j]
        }
        j++
    }

    return res
};

console.log(diagonalSum([[1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]]))