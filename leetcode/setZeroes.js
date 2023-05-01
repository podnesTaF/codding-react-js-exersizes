const applyZeros = (r,c,matrix) => {
    for(let i = 0; i < matrix.length; i++) {
        matrix[i][c] = 0
    }

    for(let i = 0; i < matrix[0].length; i++) {
        matrix[r][i] = 0
    }
} 

const setZeroes = (matrix) => {
    const zeros = []

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                zeros.push([i, j])
            }
        }
    }

console.log(zeros)

    for(idxs of zeros) {
        let row = idxs[0]
        let col = idxs[1]

        applyZeros(row, col, matrix)
    }
}

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)

console.log(matrix)