function generateSpiralMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }
    
    let num = 1, rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {

        for (let j = colStart; j <= colEnd; j++) {
            matrix[rowStart][j] = num++;
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = num++;
        }
        colEnd--;
        
        for (let j = colEnd; j >= colStart; j--) {
            matrix[rowEnd][j] = num++;
        }
        rowEnd--;
        
        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = num++;
        }
        colStart++;
    }
    
    return matrix;
}

console.log(generateSpiralMatrix(3))