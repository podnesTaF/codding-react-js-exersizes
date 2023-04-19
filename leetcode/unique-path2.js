const uniquePathsWithObstacles = (obstacleGrid) => {
    const table = Array.from({length: obstacleGrid.length}, () => new Array(obstacleGrid[0].length).fill(0))

    for(let i = 0; i < table.length; i++) {
        if(obstacleGrid[i][0] === 1) break;
        table[i][0] = 1
    }

    for(let i = 0; i < table[0].length; i++) {
        if(obstacleGrid[0][i] === 1) break;
        table[0][i] = 1
    }

    if(obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) {
        return 0
    }

    for(let i = 0; i < table.length; i++) {
        for(let j = 0; j< table[i].length; j++) {
            if(obstacleGrid[i][j] === 1) {
                table[i][j] = 0 
            } else {
                table[i][j] = table[i-1][j] + table[i][j-1]
            }
        }
    }

    return table[table.length - 1][table[0].length - 1]
}