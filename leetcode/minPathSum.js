var minPathSum = function(grid) {
    const table = Array.from({length: grid.length}, () => new Array(grid[0].length))


    table[0][0] = grid[0][0]

    for(let i = 1; i < grid[0].length; i++) {
        table[0][i] = table[0][i-1] + grid[0][i]
    }

    for(let i = 1; i < grid.length; i++) {
        table[i][0] = table[i - 1][0] + grid[i][0]
    }

    for(let i = 1; i < grid.length; i++) {
        for(let j = 1; j < grid[0].length; j++) {
            table[i][j] = grid[i][j] + Math.min(table[i-1][j], table[i][j-1])
        }
    }


    return table[table.length -1][table[0].length -1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))