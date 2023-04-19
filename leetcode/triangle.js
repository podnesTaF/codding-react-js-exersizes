const minimunTotal = (triangle) => {
    const table = []

    for(let row of triangle) table.push(new Array(row.length).fill(0))

    table[0] = triangle[0]

    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            const prevRow =  table[i - 1]
             if(j === 0) {
                table[i][j] = triangle[i][j] + prevRow[j]
            } else if(j === triangle[i].length - 1) {
                table[i][j] = triangle[i][j] + prevRow[prevRow.length - 1]
            } else {
                let smallest = Math.min(prevRow[j], prevRow[j - 1])
                table[i][j] = triangle[i][j] + smallest
            }
        }
    }

    return Math.min(...table[table.length - 1])
}

console.log(minimunTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))

